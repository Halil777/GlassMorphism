import React from 'react'
import './cssHover.css'

const CssHover = () => {
  return (
      <>
        <div className='middle'>
        <a className='btn' href="#">
            <i className='fab fa-facebook-f'></i>
        </a>
        <a className='btn' href="#">
            <i className='fab fa-twitter'></i>
        </a>
        <a className='btn' href="#">
            <i className='fab fa-google'></i>
        </a>
        <a className='btn' href="#">
            <i className='fab fa-instagram'></i>
        </a>
        <a className='btn' href="#">
            <i className='fab fa-youtube'></i>
        </a>
        </div>
        {/* <div class="fa-3x">
            <i class="fa-solid fa-basketball fa-bounce"></i>
            <i class="fa-solid fa-volleyball fa-bounce"></i>

            <!-- bounce animation with no "squish" -->
            <i class="fa-solid fa-frog fa-bounce" style=" --fa-bounce-start-scale-x: 1; --fa-bounce-start-scale-y: 1; --fa-bounce-jump-scale-x: 1; --fa-bounce-jump-scale-y: 1; --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1; " ></i>

            <!-- bounce animation with no "squish" or "rebound" -->
            <i class="fa-solid fa-envelope fa-bounce" style=" --fa-bounce-start-scale-x: 1; --fa-bounce-start-scale-y: 1; --fa-bounce-jump-scale-x: 1; --fa-bounce-jump-scale-y: 1; --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1; --fa-bounce-rebound: 0;" ></i>
        </div> */}
    </>
    
  )
}

export default CssHover
