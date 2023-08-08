import React from 'react';

import dateFormat from '../../../utils/dateFormat';

import './myAccountOrders.scss';

function MyAccountOrders({ orders }) {
    return (
        <div className='accountOrders'>
            {orders &&
                orders.map(({ _id, prices, status, items, orderDate, deliveryDate }) => (
                    <div key={_id} className='order'>
                        <div className='order__details'>
                            <h3>Numer zamówienia: {_id}</h3>
                            <div>
                                <h4>Order date</h4>
                                <p>{dateFormat(orderDate)}</p>
                            </div>
                            <div>
                                <h4>Price:</h4>
                                <p>{prices.amount}zł</p>
                            </div>
                            <div>
                                <h4>Status: </h4>
                                <p>{status}</p>
                            </div>
                            {deliveryDate ? (
                                <div>
                                    <h4>Delivery date: </h4>
                                    <p>{deliveryDate}</p>
                                </div>
                            ) : null}
                        </div>
                        <div className='order__itemList'>
                            {items &&
                                items.map(({ _id: id, picture, brand, size }) => (
                                    <div key={id} className='itemList__item'>
                                        <img src={picture[0]} alt='' />
                                        <p>{brand}</p>
                                        <p>Size: {size}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default MyAccountOrders;
