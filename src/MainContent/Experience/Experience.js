import JnJ from './img/jjmedtech-logo-header.svg'
import NTUA from './img/NTUA.png'
import UD from './img/University of Delaware.png'
import HORC from './img/HORC_Logo_LightBG.png'
import MLAB from './img/cropped-mlab_logo_white-1.jpg'

import {Link} from "react-router-dom";
import './BoxWithImage.css'; // Import your CSS file

function Experience () {
    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <h1 className="fw-bold">Experience</h1>
                <div className="container d-flex flex-wrap justify-content-center">

                    <Link to={"research-assistant"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" src={HORC} alt="HORC"/>
                                </div>
                                <div className="card-title fw-bold">Graduate Research Assistant</div>
                                <div className="card-subtext fw-bold">2019-Present</div>
                            </div>
                        </div>
                    </Link>

                    <Link to={"jnj-intern"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" src={JnJ} alt="JnJ"/>
                                </div>
                                <div className="card-title fw-bold">Robotics and Controls Engineer Intern</div>
                                <div className="card-subtext fw-bold">June 2022- August 2022</div>
                            </div>
                        </div>
                    </Link>

                    <Link to={"phd-ud"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" src={UD} style={{ width: '80%' }} alt="UD"/>
                                </div>
                                <div className="card-title fw-bold">Ph.D. in Mechanical Engineering</div>
                                <div className="card-subtext fw-bold">2019-Present</div>
                            </div>
                        </div>
                    </Link>

                    <Link to={"teaching-assistant"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" src={MLAB} alt="MLAB"/>
                                </div>
                                <div className="card-title fw-bold">Teaching Assistant</div>
                                <div className="card-subtext fw-bold">2018-2019</div>
                            </div>
                        </div>
                    </Link>

                    <Link to={"diploma"} className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card">
                                <div className="card-image-container">
                                    <img className="card-image" style={{ width: '50%' }} src={NTUA} alt="NTUA"/>
                                </div>
                                <div className="card-title fw-bold">Diploma in Electrical and Computer Engineering</div>
                                <div className="card-subtext fw-bold">2013-2019</div>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Experience;