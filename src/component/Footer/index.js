import { FaFacebook, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import Logo from '../../assets/img/footer.png'
import { IoLogoYoutube } from 'react-icons/io5'
import { BsInstagram } from 'react-icons/bs'

 export const Footer = () => {
  return (
    <footer>
      <div className="footerSection grid-adjustable-columns">
        <div className="footerImg foot">
           <img src={Logo} alt='Logo' />
          </div>
            <div className="reservationNav foot">
              <h3 className="footerTitle">Navigation</h3>
              <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Reservation</a></li>
              <li><a href="#">Order Online</a></li>
              <li><a href="#">Login</a></li>
              </ul>
            </div>
            <div className="contact foot">
             <h3 className='footerTitle'>
              Contact 
             </h3>
             <ul>
              <li>Address : 32 Lagos Street Owerri Imo State</li>
              <p>Phone Number: +234800000000</p>
              <p>Email: littlelemon@me.com</p>
             </ul> 
            </div>
            <div className="socialLink foot">
              <h3 className="footerTitle">
                Socials
              </h3>
              <div className="footerIcon">
                <ul>
                  <li><a href="#">{<FaFacebook/>}</a></li>
                  <li><a href="#">{<IoLogoYoutube/>}</a></li>
                  <li><a href="#">{<BsInstagram/>}</a></li>
                  <li><a href="#">{<FaWhatsapp/>}</a></li>
                  <li><a href="#">{<FaXTwitter/>}</a></li>
                </ul>
              </div>
            </div>
      </div>
    </footer>
  )
}


