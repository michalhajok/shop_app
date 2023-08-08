import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/atoms/button';
import AddressForm from '../../components/molecules/addressForm/addressForm';
import RadioList from '../../components/molecules/radioList/radioList';
import Footer from '../../components/organisms/footer';
import Nav from '../../components/organisms/nav';

import './orderPage.scss';
import api from '../../utils/api';

function OrderPage() {
    const auth = useSelector((state) => state.auth);
    const order = useSelector((state) => state.order);
    const other = useSelector((state) => state.other);

    const navigate = useNavigate();

    const [orderDetails, setOrderDetails] = useState({
        userId: auth.user._id,
        payment: '',
        delivery: ''
    });
    const [orderAddress, setOrderAddress] = useState({
        town: '',
        street: '',
        houseNumber: '',
        apartmentNumber: '',
        postcode: ''
    });

    const handleChange = (e) => {
        setOrderAddress({
            ...orderAddress,
            [e.target.name]: e.target.value
        });
    };

    const sendOrder = async (e) => {
        e.preventDefault();
        const data = {
            ...orderDetails,
            address: orderAddress,
            items: order.items,
            prices: {
                discount: order.price.discountPrice,
                delivery: order.price.deliveryPrice,
                amount: order.price.amount
            },
            orderDate: Date.now()
        };
        const res = await api.post('orders', data);
        if (res.ok) {
            navigate('/shop_app');
        }
    };

    return (
        <div className='orderPage'>
            <Nav />
            <div className='orderDetails'>
                <AddressForm address={orderAddress} handleChange={handleChange} />
                <div className='orderDetails__rest'>
                    <div className='rest__window'>
                        <h4>Delivery:</h4>
                        <RadioList
                            array={other.delivery}
                            state={orderDetails.delivery}
                            setState={(_id) => setOrderDetails({ ...orderDetails, delivery: _id })}
                        />
                    </div>
                    <div className='rest__window'>
                        <h4>Payments: </h4>
                        <RadioList
                            array={other.payments}
                            state={orderDetails.payment}
                            setState={(_id) => setOrderDetails({ ...orderDetails, payment: _id })}
                        />
                    </div>
                </div>
                <div className='orderDetails__summary'>
                    <p>Discount: {order.price.discountPrice} zł</p>
                    <p>Delivery: {order.price.deliveryPrice} zł</p>
                    <h3>Amount: {order.price.amount} zł</h3>
                    <Button click={sendOrder}>Order and pay</Button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default OrderPage;
