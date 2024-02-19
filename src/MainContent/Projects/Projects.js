import laelaps from "./img/laelapsII.jpg";
import vst from "./img/vicon_mocap.jpg";
import foot_strike from "./img/foot-strike.png";
import line_tracking_robot from "./img/front_view_robot.jpg";
import dual_slip from "./img/dual_slip.jpg"
import ankle_prosthesis from "./img/IROS23_1579_graphical_abstract.jpg"
import personal_webpage from "./img/personal_webpage.png"
import {Link} from "react-router-dom";

function Projects () {
    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <h1 className="fw-bold">Projects</h1>
                <div className="container d-flex flex-wrap justify-content-center">

                    <Link to="ankle-prosthesis" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={ankle_prosthesis} alt="Logo 1" className="section-logo m-2" style={{ width: 'auto', height: '250px'}}/>
                        <h4 className="fw-bold m-2">Ankle-foot Prosthesis</h4>
                        {/*<span className="m-2">2020-2023</span>*/}
                    </Link>

                    <Link to="dual-slip" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={dual_slip} alt="Logo 1" className="section-logo m-2" style={{ width: 'auto', height: '250px'}}/>
                        <h4 className="fw-bold m-2" style={{ textAlign: 'center' }}>3D Dual-Spring Loaded<br />Inverted Pendulum (SLIP)</h4>
                        {/*<span className="m-2">2020-2023</span>*/}
                    </Link>

                    <Link to="f-vespa" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={foot_strike} alt="Logo 1" className="section-logo m-2" style={{ width: 'auto', height: '250px'}}/>
                        <h4 className="fw-bold m-2" style={{ textAlign: 'center' }}>Foot-strike Detection<br /> Algorithm (F-VESPA)</h4>
                        {/*<span className="m-2">2021</span>*/}
                    </Link>

                    <Link to="vst-architecture" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={vst} alt="Logo 1" className="section-logo m-2" style={{ width: 'auto', height: '250px'}}/>
                        <h4 className="fw-bold m-2">Variable Stiffness Treadmill (VST)</h4>
                        {/*<span className="m-2">2019-2023</span>*/}
                    </Link>

                    <Link to="master-thesis" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={laelaps} alt="Logo 2" className="section-logo m-2" style={{ width: 'auto', height: '250px'}}/>
                        {/*,  objectFit: 'cover'*/}
                        <h4 className="fw-bold m-2" style={{ textAlign: 'center' }}>SoC FPGA Architecture<br /> for Quadruped Robot</h4>
                        {/*<span className="m-2">2018-2019</span>*/}
                    </Link>

                    <Link to="line-tracking-robot" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={line_tracking_robot} alt="Logo 1" className="section-logo m-2" style={{ width: 'auto', height: '250px'}}/>
                        <h4 className="fw-bold m-2" style={{ textAlign: 'center' }}>Line Tracking Robot</h4>
                        {/*<span className="m-2">2020-2023</span>*/}
                    </Link>

                    <Link to="personal-webpage" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={personal_webpage} alt="Logo 2" className="section-logo m-2" style={{ width: 'auto', height: '250px'}}/>
                        <h4 className="fw-bold m-2" style={{ textAlign: 'center' }}>Personal Webpage</h4>
                        {/*<span className="m-2">2018-2019</span>*/}
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Projects;