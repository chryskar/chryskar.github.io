import laelaps from "./img/laelapsII.jpg";
import vst from "./img/vicon_mocap.jpg";
import foot_strike from "./img/foot-strike.png";
import line_tracking_robot from "./img/front_view_robot.jpg";
import best_zebro_swarm from "./BestZebroSwarm/img/zebro.jpg";
import duisburg from "./Duisburg/img/DSC_0956.JPG";
import dual_slip from "./img/dual_slip.jpg"
import ankle_prosthesis from "./AnkleProsthesis/img/subject_front_view.jpg"
import personal_webpage from "./img/personal_webpage.png"
import {Link} from "react-router-dom";
import './BoxWithImage_projects.css'; // Import your CSS file

function Projects () {
    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <h1 className="fw-bold">Projects</h1>
                <div className="container d-flex flex-wrap justify-content-center">

                    <Link to="ankle-prosthesis" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        {/*<img src={ankle_prosthesis} alt="Logo 1" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px'}}/>*/}
                        <div className="card-shadow">
                            <div className="card-projects">
                                <div className="card-image-container-projects">
                                    <img className="card-image-projects" src={ankle_prosthesis} id='prosthesis' alt="HORC"/>
                                </div>
                                <div className="card-title-projects fw-bold">Ankle-foot Prosthesis</div>
                                <div className="card-subtext-projects fw-bold">2021-Present</div>
                            </div>
                        </div>
                    </Link>

                    <Link to="dual-slip" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <div className="card-shadow">
                            <div className="card-projects">
                                <div className="card-image-container-projects">
                                    <img className="card-image-projects" src={dual_slip} id='dual_slip' alt="HORC"/>
                                </div>
                                <div className="card-title-projects fw-bold">3D Dual-Spring Loaded Inverted Pendulum (SLIP)</div>
                                <div className="card-subtext-projects fw-bold">2021-Present</div>
                            </div>
                        </div>

                    </Link>

                    <Link to="f-vespa" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <div className="card-shadow">
                            <div className="card-projects">
                                <div className="card-image-container">
                                    <img className="card-image-projects" src={foot_strike} alt="HORC"/>
                                </div>
                                <div className="card-title-projects fw-bold">Foot-strike Detection Algorithm (F-VESPA)</div>
                                <div className="card-subtext-projects fw-bold">2020-2021</div>
                            </div>
                        </div>

                    </Link>

                    <Link to="vst-architecture" className="d-flex flex-column align-items-center m-5 clickable">
                        <div className="card-shadow">
                            <div className="card-projects">
                                <div className="card-image-container">
                                    <img className="card-image-projects" src={vst} id='VST' alt="HORC"/>
                                </div>
                                <div className="card-title-projects fw-bold">Variable Stiffness Treadmill (VST)</div>
                                <div className="card-subtext-projects fw-bold">2019-2020</div>
                            </div>
                        </div>
                    </Link>

                    <Link to="master-thesis" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        {/*<img src={laelaps} alt="Logo 2" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px'}}/>*/}
                        {/*<h4 className="fw-bold m-2" style={{ textAlign: 'center' }}>SoC FPGA Architecture<br /> for Quadruped Robot</h4>*/}

                        <div className="card-shadow">
                            <div className="card-projects">
                                <div className="card-image-container">
                                    <img className="card-image-projects" src={laelaps} id='soc_fpga' alt="HORC"/>
                                </div>
                                <div className="card-title-projects fw-bold">SoC FPGA Architecture for Quadruped Robot</div>
                                <div className="card-subtext-projects fw-bold">2018-2019</div>
                            </div>
                        </div>

                    </Link>

                    <Link to="line-tracking-robot" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <div className="card-shadow">
                            <div className="card-projects">
                                <div className="card-image-container">
                                    <img className="card-image-projects" src={line_tracking_robot} id='projects' alt="HORC"/>
                                </div>
                                <div className="card-title-projects fw-bold">Line Tracking Robot</div>
                                <div className="card-subtext-projects fw-bold">2021</div>
                            </div>
                        </div>
                    </Link>

                    <Link to="best-zebro-swarm" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <div className="card-shadow">
                            <div className="card-projects">
                                <div className="card-image-container">
                                    <img className="card-image-projects" src={best_zebro_swarm} id='zebro' alt="HORC"/>
                                </div>
                                <div className="card-title-projects fw-bold">Swarm Robots</div>
                                <div className="card-subtext-projects fw-bold">2018</div>
                            </div>
                        </div>
                    </Link>

                    <Link to="duisburg" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <div className="card-shadow">
                            <div className="card-projects">
                                <div className="card-image-container">
                                    <img className="card-image-projects" src={duisburg} id='zebro' alt="HORC"/>
                                </div>
                                <div className="card-title-projects fw-bold">Object-oriented Modeling of Kinematical Chains</div>
                                <div className="card-subtext-projects fw-bold">2017</div>
                            </div>
                        </div>
                    </Link>

                    <Link to="personal-webpage" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <div className="card-shadow">
                            <div className="card-projects">
                                <div className="card-image-container">
                                    <img className="card-image-projects" src={personal_webpage} id='personal-webpage' alt="HORC"/>
                                </div>
                                <div className="card-title-projects fw-bold">Personal Webpage</div>
                                <div className="card-subtext-projects fw-bold">2024-Present</div>
                            </div>
                        </div>

                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Projects;