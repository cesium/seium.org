import '../../assets/css/home.css'
import Card from '../utils/cardCompo'
import HeaderIcon from '../images/Header.svg'
function SectionDescription(props) {
    return(
        <div className='description' style={{paddingLeft: '55px', paddingRight:'55px'}}>
            <p className='x-large-1' >{props.middleTitle}</p>
            {!props.title ? <div className="headerChallenge">
                        <h1 className="chall-desc">Five awesome days of learning, sharing and 
                    {' '}<span className="spanChall"> winning
                        <div className="cardContainer">
                                    <Card img={HeaderIcon} alt="HeaderIcon" style={{ alignItems: 'flex-end' }}>Or maybe losing. This one is kind of optional.</Card>
                                </div>
                            </span>.
                    </h1>
             </div> :  <h1 style={props.style}>{props.title}</h1>}
        </div>
    )
}

export default SectionDescription;