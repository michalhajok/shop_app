import React from 'react';

import './addressForm.scss';

function AddressForm({ address, handleChange }) {
    return (
        <form className='addressForm'>
            <div className='inputBox'>
                <label htmlFor='postcode'>Postcode</label>
                <input
                    type='text'
                    id='postcode'
                    name='postcode'
                    autoComplete='off'
                    value={address.postcode}
                    onChange={handleChange}
                />
            </div>
            <div className='inputBox'>
                <label htmlFor='town'>Town</label>
                <input
                    type='text'
                    name='town'
                    id='town'
                    autoComplete='off'
                    value={address.town}
                    onChange={handleChange}
                />
            </div>
            <div className='inputBox'>
                <label htmlFor='street'>Street</label>
                <input
                    type='text'
                    name='street'
                    id='street'
                    autoComplete='off'
                    value={address.street}
                    onChange={handleChange}
                />
            </div>
            <div className='inputBox --inputNumber'>
                <label htmlFor='houseNumber'>House number</label>
                <input
                    type='text'
                    name='houseNumber'
                    id='houseNumber'
                    autoComplete='off'
                    value={address.houseNumber}
                    onChange={handleChange}
                />
            </div>
            <div className='inputBox --inputNumber'>
                <label htmlFor='apartmentNumber'>Apartment number</label>
                <input
                    type='number'
                    name='apartmentNumber'
                    id='apartmentNumber'
                    autoComplete='off'
                    value={address.apartmentNumber}
                    onChange={handleChange}
                />
            </div>
        </form>
    );
}

export default AddressForm;
