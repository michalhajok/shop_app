import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Nav from '../../components/organisms/nav';
import BasketItem from '../../components/molecules/basketItem';
import Button from '../../components/atoms/button';
import Footer from '../../components/organisms/footer';
import actions from '../../redux/order/actions';

import './basketPage.scss';

function BasketPage() {
    const [price, setPrice] = useState(0);
    const [delivery, setDelivery] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [amount, setAmount] = useState(0);
    const [discountCode, setDiscountCode] = useState('');

    const _basket = useSelector((state) => state.basket);
    const { basket } = _basket;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const codes = [
        { code: 'code40', discount: 0.4 },
        { code: 'code30', discount: 0.3 },
    ];

    const checkDiscount = () =>
        codes.some(({ code, discount: _discount }) =>
            code === discountCode ? setDiscount(price * _discount) : null,
        );

    const handleOrder = async () => {
        await dispatch(
            actions.addItemsToOrder({
                items: basket,
                price: {
                    price,
                    deliveryPrice: delivery,
                    discountPrice: discount,
                    amount,
                },
            }),
        );
        navigate('/shop_app/order');
    };

    useEffect(() => {
        let a = 0;
        basket.forEach((e) => {
            a += e.price * e.quantity;
        });

        setPrice(a);
        if (price < 200) {
            setDelivery(20);
        } else {
            setDelivery(0);
        }

        setAmount(price + delivery - discount);
    }, [_basket, delivery, price, discount, basket]);

    return (
        <div className='basketPage'>
            <Nav />
            <div className='basketPage__basket'>
                {basket.length === 0 ? (
                    <p className='basket__empty'>Basket is empty</p>
                ) : (
                    <div className='basket__card'>
                        <div className='card__itemList'>
                            {basket &&
                                basket.map((item) => <BasketItem key={item._id} item={item} />)}
                        </div>

                        <div className='basket__summary'>
                            <article>
                                <p>Price:</p>
                                <p>{price} zł</p>
                            </article>
                            <article>
                                <p>Delivery: </p>
                                <p>{delivery} zł</p>
                            </article>
                            <article>
                                <p>Discount: </p>
                                <p>{discount} zł</p>
                            </article>
                            <article>
                                <h4>Amount: </h4>
                                <h4>{amount} zł</h4>
                            </article>
                            <Button click={handleOrder}>Checkout</Button>
                        </div>
                        <div className='basket__discount'>
                            <input
                                type='text'
                                value={discountCode}
                                onChange={(e) => setDiscountCode(e.target.value)}
                                placeholder='Discount code'
                            />
                            <Button click={checkDiscount}>Realize</Button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default BasketPage;
