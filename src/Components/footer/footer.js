import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-item">
                    <img className='footer-image' src={process.env.PUBLIC_URL + '/footer/img1.png'} alt='img1' />
                    <div className="footer-data">
                        BACK
                    </div>
                </div>
                <div className="footer-item">
                    <img className='footer-image' src={process.env.PUBLIC_URL + '/footer/img2.png'} alt='img1' />
                    <div className="footer-data">
                        REFRESH
                    </div>
                </div>
                <div className="footer-item">
                    <img className='footer-image' src={process.env.PUBLIC_URL + '/footer/img3.png'} alt='img1' />
                    <div className="footer-data">
                        DELETE
                    </div>
                </div>
                <div className="footer-item">
                    <img className='footer-image' src={process.env.PUBLIC_URL + '/footer/img4.png'} alt='img1' />
                    <div className="footer-data">
                        SEARCH
                    </div>
                </div>
                <div className="footer-item">
                    <img className='footer-image' src={process.env.PUBLIC_URL + '/footer/img5.png'} alt='img1' />
                    <div className="footer-data">
                        SHOW
                    </div>
                </div>
                <div className="footer-item">
                    <img className='footer-image' src={process.env.PUBLIC_URL + '/footer/img6.png'} alt='img1' />
                    <div className="footer-data">
                        PRINT
                    </div>
                </div>
                <div className="footer-item">
                     <img className='footer-image' src={process.env.PUBLIC_URL + '/footer/img7.png'} alt='img1' />
                    <div className="footer-data">
                        ADD NEW ITEM
                    </div>
                </div>
            </div>
        </>
    )
}
    
export default Footer;