import React, { useState } from 'react';

import './itemFigure.scss';

function ItemFigure({ picture: _picture }) {
    const [image, setImage] = useState('');

    return (
        <section className='itemPage__section--figures'>
            <figure className='figures__mini'>
                {_picture.map((picture) => (
                    <figure key={picture}>
                        <img
                            src={picture}
                            onMouseOver={() => setImage(image)}
                            onFocus={() => {}}
                            alt='img'
                        />
                    </figure>
                ))}
            </figure>
            <figure className='figures__main'>
                <img src={image || _picture[0]} alt='img' />
            </figure>
        </section>
    );
}

export default ItemFigure;
