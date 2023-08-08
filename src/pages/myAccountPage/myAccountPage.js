import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../redux/order/actions';
import Footer from '../../components/organisms/footer';
import Nav from '../../components/organisms/nav';

import './myAccountPage.scss';

import MyAccountOrders from '../../components/organisms/myAccountOrders/myAccountOrders';

function MyAccountPage() {
    const [tabs, setTabs] = useState('orders');

    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user);
    const { orders } = useSelector((state) => state.order);

    useEffect(() => {
        dispatch(actions.getOrders(user._id));
    }, [dispatch, user]);

    return (
        <div className='myAccountPage'>
            <Nav />
            <div className='account'>
                <div className='accountDetails'>
                    <h3>
                        {user.name} {user.lastname}
                    </h3>
                    <p>{user.phone}</p>
                    <p>{user.email}</p>
                </div>
                <div className='accountOther'>
                    <div className='tabs'>
                        <div
                            className={tabs === 'address' ? 'activeTab' : ''}
                            onClick={() => setTabs('address')}
                            aria-hidden='true'
                        >
                            Address
                        </div>
                        <div
                            className={tabs === 'orders' ? 'activeTab' : ''}
                            onClick={() => setTabs('orders')}
                            aria-hidden='true'
                        >
                            Orders
                        </div>
                    </div>
                    {tabs === 'orders' ? <MyAccountOrders orders={orders} /> : <div />}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MyAccountPage;
