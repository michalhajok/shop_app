import React from 'react';

import Modal from 'react-modal';

import './itemModal.scss';

function ItemModal({
    warning,
    setModalIsOpen,
    item,
    saveUpdate,
    changeItem,
    modalIsOpen,
    brandList,
}) {
    const { title, description, price, size: _size, brand, picture: _picture } = item;

    return (
        <Modal
            className='itemModal'
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={() => setModalIsOpen(false)}
        >
            <div className='itemModal__background'>
                <p onClick={() => setModalIsOpen(false)} aria-hidden='true' className='close'>
                    Close
                </p>
                <div className='background'>
                    {warning ? <p className='warning'>Please check correctness of data </p> : null}
                    <form className='background--form'>
                        <label>
                            <p>Brand:</p>
                            <input
                                autoComplete='off'
                                required
                                name='brand'
                                list='brand'
                                value={brand}
                                onChange={changeItem}
                            />
                            <datalist id='brand'>
                                {brandList.map(({ _id, category }) => (
                                    <option key={_id} value={category} label={category} />
                                ))}
                            </datalist>
                        </label>
                        <label>
                            <p>Title:</p>
                            <input
                                autoComplete='off'
                                required
                                name='title'
                                type='text'
                                value={title}
                                onChange={changeItem}
                            />
                        </label>
                        <label>
                            <p>Price:</p>
                            <input
                                autoComplete='off'
                                required
                                name='price'
                                type='number'
                                value={price}
                                onChange={changeItem}
                            />
                            <label>
                                <p>Description:</p>
                                <textarea
                                    autoComplete='off'
                                    name='description'
                                    value={description}
                                    onChange={changeItem}
                                />
                            </label>
                        </label>
                        <div className='form--size'>
                            {_size.map(({ size, quantity }, index) => (
                                <label key={size}>
                                    <p>Size {size}:</p>
                                    <input
                                        autoComplete='off'
                                        required
                                        name='size'
                                        type='number'
                                        value={quantity}
                                        onChange={(e) => changeItem(e, index)}
                                    />
                                </label>
                            ))}
                        </div>
                        {_picture.map((picture, index) => (
                            <label key={picture}>
                                <p>Picture:</p>
                                <input
                                    autoComplete='off'
                                    required
                                    type='text'
                                    name='picture'
                                    value={picture}
                                    onChange={(e) => changeItem(e, index)}
                                />
                            </label>
                        ))}
                    </form>
                    <button className='save' type='button' onClick={saveUpdate}>
                        Save changes
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default ItemModal;
