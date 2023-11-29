import Image from 'next/image';
import style from './SwiperCard.module.css'
 

const SwiperCard=({ imageSrc, title, price, location,text })=> {
    return (
        
        <div className={style.swipercard}>
            <div className={style.image}>
            <img
          src="https://firebasestorage.googleapis.com/v0/b/destinations-6c6a6.appspot.com/o/pexels-spencer-davis-4388164.jpg?alt=media&token=2f97038b-8b1b-46ac-bcc0-0069efef7e3d"
          alt=""  
        />            
        </div>
        <div className={style.tbody}>
            <div className={style.text}>
                    <h2>{title}</h2>
                    <p>{price}</p>
            </div>
            <div className={style.price_line}>
                    <button class="contact-button">Contact Us</button>
            </div>
        </div>
    </div>

    );
}

export default SwiperCard;
