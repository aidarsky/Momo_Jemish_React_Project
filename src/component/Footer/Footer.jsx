import React from 'react'
import './footer.css'


const Footer = () => {
  return (
    <div className='footerMain'>
        <h3>Footer</h3>
        <div>
                <div><a href="https://instagram.com">istagram</a> <img className='footerLogo' src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="" /></div>
                <div><a href="#">whats app</a> <img className='footerLogo' src="https://static-00.iconduck.com/assets.00/whatsapp-logo-icon-512x512-7i7ztupy.png" alt="" /></div>
                <div><a href="#">youtube</a><img className='footerLogo' src="https://pixlok.com/wp-content/uploads/2021/07/Youtube-Free-Icon-rdfd.png" alt="" /></div>
                <div><a href="#">контактные данные</a><img className='footerLogo' src="https://seekicon.com/free-icon-download/mobile-phone_1.png" alt="" /></div>
            </div>
    </div>
  )
}

export default Footer;