import React from 'react'
import '../../assets/css/dynamicMedia.css';

 function DynamicMedia(props) {
    return (
       <div className='iconsMedia'>
            <a href=""><div className='iconMedia' style={{background: `url(${props.icon1})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}></div></a>
            <a href=""><div className='iconMedia' style={{background: `url(${props.icon2})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}></div></a>
            <a href=""><div className='iconMedia' style={{background: `url(${props.icon3})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}></div></a>
            <a href=""><div className='iconMedia' style={{background: `url(${props.icon4})`,backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}></div></a>
            <a href=""><div className='iconMedia' style={{background: `url(${props.icon5})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}></div></a>
        </div>
    )
}

export default DynamicMedia;