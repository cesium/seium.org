import React from 'react'

const containerStyle = {
    width: '100%',
    maxWidth: '1440px',
    paddingTop: '3%',
    paddingBottom: '5%',
    paddingLeft: '50px',
    paddingRight: '50px',

}

function Container(props) {
    return(
        <div style={{...containerStyle, ...props.style }}>
            {props.children}
        </div>
    )
}

export default Container;