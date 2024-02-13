// import Logo1 from './img/5e0faf21-4fe7-4397-a0bb-4ef2e2cb2723.webp'
import JnJ from './img/jjmedtech-logo-header.svg'
import NTUA from './img/NTUA.png'
import UD from './img/University of Delaware.png'
import HORC from './HORC_Logo_LightBG.png'
import MLAB from './img/cropped-mlab_logo_white-1.jpg'

import {Link} from "react-router-dom";

function Experience () {
    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <h1 className="fw-bold">Experience</h1>
                <div className="container d-flex flex-wrap justify-content-center">

                    <Link to={"global-engineering-academy"} className="d-flex flex-column align-items-center m-5 clickable">
                        <img src={HORC} alt="HORC" className="section-logo m-2"/>
                        <h4 className="fw-bold m-2">University of Delaware</h4>
                        <span className="m-2">2019-2024</span>
                    </Link>

                    <Link to={"tech-institute"} className="d-flex flex-column align-items-center m-5 clickable">
                        <img src={JnJ} alt="JnJ" className="section-logo m-2"/>
                        <h4 className="fw-bold m-2">Johnson & Johnson Medtech</h4>
                        <span className="m-2">June 2022- August 2022</span>
                    </Link>

                    <Link to={"global-engineering-academy"} className="d-flex flex-column align-items-center m-5 clickable">
                        <img src={UD} alt="UD" className="section-logo m-2"/>
                        <h4 className="fw-bold m-2">University of Delaware</h4>
                        <span className="m-2">2019-2024</span>
                    </Link>

                    <Link to={"mechrobotics-solutions"} className="d-flex flex-column align-items-center m-5 clickable">
                        <img src={MLAB} alt="MLAB" className="section-logo m-2"/>
                        <h4 className="fw-bold m-2">National Technical University of Athens</h4>
                        <span className="m-2">2013-2019</span>
                    </Link>

                    <Link to={"mechrobotics-solutions"} className="d-flex flex-column align-items-center m-5 clickable">
                        <img src={NTUA} alt="NTUA" className="section-logo m-2"/>
                        <h4 className="fw-bold m-2">National Technical University of Athens</h4>
                        <span className="m-2">2013-2019</span>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Experience;