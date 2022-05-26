import React, { useContext } from 'react'
import heart from '../../images/heartEmoji.png';
import glasses from '../../images/glassesImoji.png'
import hamble from '../../images/hamble.png'
import Card from '../Card/Card';
import Resume from './Resume.pdf'
import { themeContext } from '../../Context';
import {motion} from 'framer-motion'
import './Services.css'

const Services = () => {
  const transition = {duration : 1, type: 'spring' }

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
      {/* left side */}

    <div className="awesome">
        <span style={{color: darkMode? 'white' : ''}}>My awesome</span>
        <span>services</span>
        <span>Perferendis doloremque neque recusandae nobis!<br/> Provident nesciunt, assumenda iusto mollitia illum maiores!</span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background:'#ABF1FF94'}}></div>
    </div>

      {/* right side */}
      <div className="cards">
          <motion.div initial={{left:'25%'}} whileInView={{left:'14rem'}} transition={transition}  style={{left:'14rem'}}>
              <Card emoji = {heart} heading = {'Design'} detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"} />
          </motion.div>
          {/* second card */}
          <div style={{top:'12rem', left:'-4rem'}}>
            <Card emoji={glasses} heading={'Developer'} detail={"Html, Css, JavaScript, React"} />
          </div>
          {/* third card */}
          <div style={{top:'19rem', left:'12rem'}}>
            <Card emoji={hamble} heading={"UI/UX"} detail={"Lorem ipsium dolor same amet name anme bir zatlar bolmaly oza yzam su textin ."} />
          </div>
          <div className='blur s-blur2' style={{ background: 'var(--purple)'}}></div>
      </div>
    </div>
  )
}

export default Services
