import Logo1 from './img/5e0faf21-4fe7-4397-a0bb-4ef2e2cb2723.webp'
import Logo2 from './img/571cc9f0-c184-4edc-bb45-3041958b018e.webp'
import Logo3 from './img/b7b82bf6-fd6e-4a3f-9ed1-d03398e17a27.webp'
import Logo4 from './img/b7b82bf6-fd6e-4a3f-9ed1-d03398e17a27.webp'

import {Link} from "react-router-dom";

function Experience () {
    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <h1 className="fw-bold">Experience</h1>
                <div className="container d-flex flex-wrap justify-content-center">

                    <Link to={"global-engineering-academy"} className="d-flex flex-column align-items-center m-5 clickable">
                        <img src={Logo1} alt="Logo 1" className="section-logo m-2"/>
                        <h4 className="fw-bold m-2">University of Delaware</h4>
                        <span className="m-2">2019-2024</span>
                    </Link>

                    <Link to={"tech-institute"} className="d-flex flex-column align-items-center m-5 clickable">
                        <img src={Logo2} alt="Logo 2" className="section-logo m-2"/>
                        <h4 className="fw-bold m-2">Tech Institute</h4>
                        <span className="m-2">2020-2021</span>
                    </Link>

                    <Link to={"mechrobotics-solutions"} className="d-flex flex-column align-items-center m-5 clickable">
                        <img src={Logo3} alt="Logo 3" className="section-logo m-2"/>
                        <h4 className="fw-bold m-2">Internship</h4>
                        <span className="m-2">2022</span>
                    </Link>

                    <Link to={"global-joking-academy"} className="d-flex flex-column align-items-center m-5 clickable">
                        <img src={Logo4} alt="Logo 1" className="section-logo m-2"/>
                        <h4 className="fw-bold m-2">Global Joking Academy</h4>
                        <span className="m-2">Delapopo</span>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Experience;