import React, { useContext } from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from '../../images/sidebar.png'
import Horjun from '../../images/horjun.png'
import Music from '../../images/aydym.png'
import Haryt from '../../images/haryt.png'
import { themeContext } from '../../Context'
import './Portfolio.css'
import 'swiper/css'

const Portfolio = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='Portfolio'>
        {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* Swiper */}
      <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider'>
        <SwiperSlide>
            <img src={Sidebar} alt="sdkjf" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Horjun} alt="sdkjf" />
        </SwiperSlide>{" "}
        <SwiperSlide>
            <img src={Music} alt="sdkjf" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Haryt} alt="sdkjf" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
