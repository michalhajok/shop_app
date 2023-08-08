import React from 'react';
import { useSelector } from 'react-redux';
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faPinterest,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
    const { delivery, payments } = useSelector((state) => state.other);

    return (
        <div className='footer'>
            <div className='footer__menu'>
                <Link to='/shop_app/contact'>Contact</Link>
                <Link to='/shop_app/statute'>Statute</Link>
            </div>
            <div className='footer__payments'>
                <h3>Payment methods</h3>
                <div>
                    {payments &&
                        payments.map(({ label, identification }) => (
                            <div key={identification}>{label}</div>
                        ))}
                </div>
            </div>
            <div className='footer__delivery'>
                <h3>Delivery</h3>
                <div>
                    {delivery &&
                        delivery.map(({ label, identification }) => (
                            <div key={identification}>{label}</div>
                        ))}
                </div>
            </div>
            <div className='footer_socials'>
                <h2>Social media</h2>
                <FontAwesomeIcon icon={faInstagram} size='2x' />
                <FontAwesomeIcon icon={faFacebook} size='2x' />
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
                <FontAwesomeIcon icon={faPinterest} size='2x' />
                <FontAwesomeIcon icon={faTwitter} size='2x' />
            </div>
            {/* <a href="https://michalhajok.github.io">Navigator</a> */}
        </div>
    );
}

export default Footer;
