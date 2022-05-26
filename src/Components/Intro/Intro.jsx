import React, { useContext } from 'react'
import './Intro.css'
import Github from '../../images/Github.png';
import In from '../../images/Inn.png';
import Instagram from '../../images/Instagram.png';
import Sher from '../../images/Sherlockk.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Crown from '../../images/crown.png'
import thumbp from '../../images/thumb.png'
import glasses from '../../images/glassesImoji.png'
import { themeContext } from '../../Context';
import {motion} from 'framer-motion'




const Intro = () => {

  const transition = {duration : 2, type: 'spring' }

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
      <div className="i-left">
          <div className="i-name">
              <span style={{color: darkMode? 'white' : ''}}>Hy! I'm</span>
              <span>Sherlock Holmes</span>
              <span>Frontend Developer with high level of experiment in web designing and development , producting the Quality work</span>
          </div>
          <button className="button i-button">Hire me</button>
      <div className="i-icons">
          <img src={Github}  width='50px' height={'50px'} alt="" />
          <img src={In} alt=""  width='50px' height={'50px'} />
          <img src={Instagram} width='50px' height={'50px'} alt=""  />
      </div>
      </div>
      <div className="i-right">
          <img src={Sher} alt="" />
          <motion.img initial={{left: '-36%'}} whileInView={{left:'-24%'}} transition={transition} src={glasses} />
      <motion.div className='floating-div' initial={{top:'-4%', left:'74%'}} whileInView={{left:'68%'}} transition={transition} style={{top:'-4%' , left:"68%"}}><FloatingDiv image={Crown} txt1='Web' txt2='Developer' /></motion.div>
      <motion.div className='floating-div' initial={{left:'9rem', top:'18rem'}} whileInView={{left:"0rem"}} transition={transition} style={{top:'16rem', left:'-2rem'}}><FloatingDiv image={thumbp} txt1='Best Design' txt2='Award' /></motion.div>
       {/*bluur divs  */}
       <div className="blur" style={{background:'rgb(238 210 255)'}}></div>
       <div className="blur" style={{background:'#C1F5FF', top:'17rem', width:'21rem', height:'11rem', left:'9rem'}}></div>
      </div>
    </div>
  )
}

export default Intro
