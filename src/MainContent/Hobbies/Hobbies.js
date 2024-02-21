import Sax from "./img/sax.png";
import Record from "./img/record.jpg";
import Circus from "./Circus/img/refugee_camp.jpg"
import {Link} from "react-router-dom";

function Hobbies () {
    return (
        <div>
            <div className="d-flex flex-column align-items-center justify-content-center">

                <h1 className="fw-bold">Hobbies</h1>

                <div className="container d-flex flex-wrap justify-content-center">

                    <Link to="Circus" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={Circus} alt="Sax img" className="section-logo m-2" style={{ width: 'auto', maxHeight: '250px', maxWidth: '100%'}}/>
                        <h4 className="fw-bold m-2">Circus, Clowning and Acrobatics</h4>
                    </Link>

                    <Link to="jazz-saxophone" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={Sax} alt="Sax img" className="section-logo m-2"/>
                        <h4 className="fw-bold m-2">Jazz Saxophone</h4>
                    </Link>

                    <Link to="collecting-records" className="d-flex flex-column align-items-center m-5 clickable" style={{ color: 'black' }}>
                        <img src={Record} alt="Record img" className="section-logo m-2"/>
                        <h4 className="fw-bold m-2">Collecting Records</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hobbies;