import React from 'react';
import Logo from '../images/logo.svg';
import FooterIcon from '../images/Footer.svg'
import Media from '../utils/media';
import '../../assets/css/footer.css';
import Container from '../container/container';
import Card from '../utils/cardCompo';


function Footer(props) {
    return (
        <div className="footer" style={props.style}>
            <Container style={{paddingBottom:'0%'}}>
                <div className="logo-footer responsive">
                    <img src={Logo} alt="logo" className="logo"/>
                    <p className="x_small2 lang">Semana da <br/>Engenharia<br/>Informática</p>
                </div>
                <div className="footer-info">
                    <div className="parag1">
                        <p className="nav-bar-link responsive"> Previous Edition </p>
                        <p className="nav-bar-link responsive"> Code of Conduct </p>
                    </div>
                    <div className="parag2">
                    <div className="card-footer">
                        <Card img={FooterIcon} alt="FooterIcon">{props.children}</Card>
                    </div>
                        {/* <div className="card-footer">
                            <img src={FooterIcon} alt="FooterIcon" />
                            <p className="medium-2 reminder">Psst. Have you checked the<a href="">{' '}challenges? </a>
                                Just saying.
                            </p>
                        </div> */}
                        <div className="responsive">
                            <Media />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Footer;
