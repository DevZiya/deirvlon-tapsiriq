import './footer.scss'
import {IoLogoInstagram} from 'react-icons/io'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='footer-container'>
             <div className="logo">
                <span>Green</span>
                <p>Tekno</p>
            </div>

            <div className="sosial-media">
                <div className="head">
                    <span>Bizi izləyin:</span>
                </div>
                <div className="icons">
                        <IoLogoInstagram className='icon'/>
                        <BsFacebook className='icon'/>
                    </div>
            </div>

            <div className="elaqe">
                <span>Əlaqə:</span>
                <p>+994 55 123 45 67</p>
                <p>info@mail.com</p>
            </div>

            <div className="unvan">
                <span>Ünvan:</span>
                <p>Atatürk prospekti 58</p>
            </div>
        </div>
    )
}

export default Footer
