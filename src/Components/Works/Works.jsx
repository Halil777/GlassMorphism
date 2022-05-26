import React, { useContext } from 'react'
import Upwork from '../../images/upwork.png'
import Fiverr from '../../images/fiverr.png'
import Amazon from '../../images/amazon.png'
import Shopify from '../../images/shopify.png'
import Facebook from '../../images/facebook.png'
import { themeContext } from '../../Context'
import {motion} from 'framer-motion'
import './Works.css'

const Works = () => {
  const transition = {duration : 1, type: 'spring' }

    const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
    return (
        <div className='works'>
            <div className="awesome">
                <span style={{color: darkMode? 'white' : ''}}>Works for All these</span>
                <span>Brands & Clients</span>
                <spane>Perferendis doloremqu nobis!<br />Perferendis doloremque neque recusandae nobis!
                <br /> Provident nesciunt, assumenda iusto mollitia illum maiores!
                <br /> Perferendis doloremque neque recusandae nobis!</spane>
                    <button className="button s-button">Here me</button>
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>

            {/* right side  */}
            <div className="w-right">
                <motion.div initial={{rotate : 45}} whileInView={{rotate:0}} viewport={{margin: '-40px'}} transition={{duration: 3.5, type: 'spring'}} className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} style={{width:'150px'}} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={Fiverr} style={{width:'160px'}} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} style={{width:'150px'}} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} style={{width:'150px'}} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} style={{width:'100px'}} alt="" />
                    </div>
                </motion.div>
                    <div className="w-backCirckle blueCircle "></div>
                    <div className="w-backCirckle yellowCircle "></div>

            </div>
        </div>
    )
}

export default Works
