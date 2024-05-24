import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner2.jpg'
import hero_title from '../../assets/hero_title2.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Assistir</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />Mais Informações</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Sucessos de Bilheteria"} category={"top_rated"}/>
      <TitleCards title={"Só na Netflix"} category={"popular"}/>
      <TitleCards title={"Em Breve"} category={"upcoming"}/>
      <TitleCards title={"Melhores Escolhas Para Você"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home
