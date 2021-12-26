import './payment.scss'
import Navbar from '../Components/navbar/Navbar'
import Search from '../Components/search/Search'
import Footer from '../Components/footer/Footer'
import { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { totalAmmount } from '../Redux/cartRedux'

const Payment = () => {

    const total = useSelector(state=>state.cart.totalPrice)
    const dispatch = useDispatch()
    const [toggle,setToggle]=useState(true)
    const handleClick = () =>{
        setToggle(!toggle)
    }

    useEffect(()=>{
        dispatch(totalAmmount())
    },[total,dispatch])

    return (
        <div className='container'>
            <Navbar />
            <Search />

            <div className="head">
                <h1>Ödəniş</h1>
            </div>
            <div className="payment-container">
            <div className="input-container">

            <div className="odenis-usul">
                <div className={toggle ? 'nagd active' : 'nagd'}
                onClick={handleClick}
                >
                    <div className="title">
                        <p>Nağd</p>
                        <span></span>
                    </div>
                    <span>Qapıda nağd ödəniş.</span>
                </div>

                <div 
                className={!toggle ? 'kredit active' : 'kredit'}
                onClick={handleClick}
                >
                <div className="title">
                        <p>Kredilə ödəniş</p>
                        <span></span>
                    </div>
                    <span>Kredit kartı ilə ödə</span>
                </div>
            </div>


                <div className="ad-soyad boxs">
                    <div className="ad box">
                        <p>Ad <span>*</span></p>
                        <input type="text" />
                    </div>
                    <div className="soyad box">
                        <p>Soyad <span>*</span></p>
                        <input type="text" />
                    </div>
                </div>

                <div className="telefon boxs">
                <div className="ataAd box">
                        <p>Ata ad <span>*</span></p>
                        <input type="text" />
                    </div>
                <div className="telfon box">
                        <p>Telefon nömrəsi <span>*</span></p>
                        <input type="number" placeholder='+994' />
                    </div>
                </div>

                <div className="elave">
                <span>Əlavə qeydlər</span>
                <input type="text" />
                </div>

                <div className="catdirilma">
                    <div className="head">
                        <h2>Çatdırılma ünvanı</h2>
                    </div>

                    <div className="seher-rayon boxs">
                    <div className="seher box">
                        <p>Şəhər <span>*</span></p>
                        <input type="text" />
                    </div>
                    <div className="rayon box">
                        <p>Rayon <span>*</span></p>
                        <input type="text" />
                    </div>
                    </div>

                    <div className="unvan box">
                        <p>Ünvan <span>*</span></p>
                        <input type="text" />
                    </div>

                    <div className="btn">
                        <button>Sifarişi təstiqlə</button>
                    </div>
                </div>
            </div>

                <div className={toggle ? 'total active' : 'total'}>
                    <div className="cem">
                        <span>Cəmi: {total}₼</span>
                    </div>
                    <div className="cat">
                        <span>Çatdırılma: 60₼</span>
                    </div>
                    <div className="yekun">
                        <span>Yekun: {total + 60}₼</span>
                    </div>
                </div>

                <div className={!toggle ? 'total-kredit active' : 'total-kredit'}>
                    <div className="ay">
                        <span>Ay: 6</span>
                    </div>
                    <div className="cem">
                        <span>İlkin ödəniş: {parseFloat(((total * 20) /100).toFixed(2))}₼</span>
                    </div>
                    <div className="cat">
                        <span>Aylıq ödəniş: {parseFloat((total / 6).toFixed(2))}₼</span>
                    </div>
                    <div className="yekun">
                        <span>Çatdırılma: 60₼</span>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Payment
