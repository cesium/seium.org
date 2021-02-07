import React from 'react';

import '../../../../assets/css/home.css'
import Button from "../../../buttons/button";
import NavBar  from '../../../../components/nav/nav'

function Intro(props) {
    return (
      <div className='home' style={{...{flexDirection:'column', paddingBottom:'80px'}, ...props.style}}>
          <div className='container'>
          <NavBar />
            <div className='description'>
                <p className='x-large-1'>23 - 28 February 2021</p>
                <h1>
                    The software engineering week is back, let’s just SEI that.
                </h1>
            </div>
            <div className='infos'>
                <div className='contact'>
                    <p className='nav-bar-link'>Follow us on</p>
                    <div className='icons'>
                        <a href=""><div className='facebook'></div></a>
                        <a href=""><div className='github'></div></a>
                        <a href=""><div className='twitter'></div></a>
                    </div>
                </div>
                <div className='organization'>
                    <p className='nav-bar-link'>Organization</p>
                    <a href=""><div className='image'></div></a>
                </div>
            </div>
            <div className='details'>
                <div className='expect'>
                    <h5>What you can expect:</h5>
                    <ul>
                        <li><a href="">Hackatons</a></li>
                        <li><a href="">Talks</a></li>
                        <li><a href="">Workshops</a></li>
                        <li><a href="">Challenges</a></li>
                        <li><a href="">Contests</a></li>
                    </ul>
                </div>
                <div className='quote'>
                    <h4>We gather speakers, attract partners and give our imagination wings, all for this to be your favorite week.</h4>
                    <Button background='#1d1d1d'>KNOW THE TEAM</Button>
                </div>
            </div>
          </div>
      </div>
    );
  }

  export default Intro;
