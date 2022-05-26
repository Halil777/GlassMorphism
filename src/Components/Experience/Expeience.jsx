import React, { useContext } from 'react'
import { themeContext } from '../../Context'
import './Experience.css'

const Expeience = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className='experience' id='Experience'>

            {DataExperience.map((item, index) => {
                return (
                    <div className="achievement">
                        <div className="circle" style={{color: darkMode? 'black' : ''}}>{item.circle}</div>
                        <span>{item.spa}</span>
                        <span>{item.spaa}</span>
                    </div>
                )
            })}

        </div>
    )
}

export default Expeience



const DataExperience = [
    {
        id: '1',
        spa: 'years',
        circle: ' 8+',
        spaa: 'Experience'
    },
    {
        id: '2',
        spa: 'completed',
        circle: '20+',
        spaa: 'Projects',
    },
    {
        id: '3',
        spa: 'compaines',
        circle: '5+',
        spaa:'Work'
    }
]