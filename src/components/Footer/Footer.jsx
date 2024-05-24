import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Descrição de Áudio</li>
        <li>Central de Ajuda</li>
        <li>Gift Cards</li>
        <li>Centro de Mídia</li>
        <li>Relações com Investidores</li>
        <li>Trabalhos</li>
        <li>Termos de Uso</li>
        <li>Privacidade</li>
        <li>Noticias Legais</li>
        <li>Preferências de Cookie</li>
        <li>Informação Corporativa</li>
        <li>Contate-nos</li>
      </ul>
      <p className='copyright-text'>© 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
