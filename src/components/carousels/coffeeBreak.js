import Coffee from '../images/Coffee.svg'
import windowDimensions from "../utils/windowDimensions";
let CoffeeStyle = () => {
    let { width, height } = windowDimensions();
    if (width >= 1200) {
        return {
            text: {

            }
        }
    }
    else if (width >= 768) {
        return {
            text: {
                fontSize: '14px'
            }
        }
    }
    else {
        return {
            text: {
                fontSize: '12px'
            }
        }
    }
}
function CoffeeBreak() {
    let container = {
        borderTop: '1px solid white',
        padding: '10px 13px',
        display: 'flex',
        justifyContent: 'space-between',
        width:'100%'
    }
    return (
        <div style={container}>
            <p className='medium-3' style={CoffeeStyle().text}>Coffee Break</p>
            <img src={Coffee} alt="" />
        </div>
    )
}

export default CoffeeBreak