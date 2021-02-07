import Button from '../buttons/button'
import { Clickable } from 'react-clickable';
import windowDimensions from "../utils/windowDimensions";

function ProfileFooter(props) {
    let { width, height } = windowDimensions();
    let footerStyle = () => {
        if (width >= 1200) {
            return {
                labelStyle: {
                    width: '55%',
                    whiteSpace: 'nowrap',
                    opacity: '0.5',
                },
                headerStyle: {
                    display: 'flex',
                    flexDirection: 'row',
                },
                containerStyle: {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingRight: '10px',
                    minHeight: '23px'
                },
                buttonStyle: {
                },
                gotoStyle: {
                    marginRight: '5px',
                    fontSize: '12px'
                }
            }
        }
        else if (width >= 768) {
            return {
                labelStyle: {
                    width: '55%',
                    whiteSpace: 'nowrap',
                    opacity: '0.5',
                    fontSize: '10px',
                },
                headerStyle: {
                    display: 'flex',
                    flexDirection: 'row',
                },
                containerStyle: {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingRight: '10px',
                    minHeight: '23px'
                },
                buttonStyle: {
                    padding: '0px 12px 3px',
                },
                gotoStyle: {
                    marginRight: '5px',
                    fontSize: '10px'
                }
            }
        }
        else {
            return {
                labelStyle: {
                    width: '55%',
                    whiteSpace: 'nowrap',
                    opacity: '0.5',
                    fontSize: '10px',
                },
                headerStyle: {
                    display: 'flex',
                    flexDirection: 'row',
                },
                containerStyle: {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingRight: '10px',
                    minHeight: '23px'
                },
                buttonStyle: {
                    padding: '0px 12px 3px',
                },
                gotoStyle: {
                    marginRight: '5px',
                    fontSize: '10px'
                }
            }
        }
    }
    let button = (props.advanced) ? <Button background={'#173149'} style={footerStyle().buttonStyle} >+</Button> : ''
    const main = (
        <div style={{...footerStyle().headerStyle, ...props.style}}>
            <div style={footerStyle().containerStyle}>
                <p style={footerStyle().labelStyle} className='nav-bar-link'>{props.label}</p>
                <Clickable>
                    <p style={footerStyle().gotoStyle} className='x-large'>{props.goto}</p>
                </Clickable>
                {button}
            </div>
        </div>
    )
    return main;
}

export default ProfileFooter;