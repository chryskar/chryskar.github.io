import './Home.css'
import ChrisakosImage from './chrys_back_blur.png'

function Home () {
    return (
        <div>
            <div className="d-flex justify-content-center mx-5">
                <div className="d-flex flex-column flex-xl-row justify-content-center align-items-center" style={{maxWidth:  '1536px'}}>
                    {/* Image */}
                    <img src={ChrisakosImage} alt="Chrisakos img" className="main-image m-3"></img>
                    {/* Details */}
                    <div className="d-flex flex-column justify-content-center m-3">
                        <h1 className="fw-bold">Chrysostomos (Chrys) Karakasis</h1>
                        <span> I am a fifth year Ph.D. Candidate in Mechanical Engineering at the University of Delaware.
                            My expected graduation date is in June of 2024 and I am excited to explore job opportunities in industry or research centers. </span>
                        <br />
                        <span> Currently, I am working as a research assistant at the Human-Oriented Robotics and Control Lab
                            <a href="https://sites.udel.edu/horclab/" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> (HORC Lab)</a>
                            , where my main research focuses on achieving <strong>robust and stable locomotion over compliant terrains</strong>, with applications to lower-limb prostheses and bipedal robots.
                            Please feel welcome to look around and feel free to reach out via the contact links below.
                        </span>
                        <div className="row mt-5">
                            <div className="col-md-5">
                                <h3 className="fw-bold">Interests</h3>
                                <ul className="ul-interests mb-0">
                                    <li>Rehabilitation & Medical Robotics</li>
                                    <li>Legged Locomotion</li>
                                    <li>Dynamics and Control</li>
                                    <li>Embedded Systems Design</li>
                                </ul>
                            </div>
                            <div className="col-md-7">
                                <h3 className="fw-bold">Education</h3>
                                <ul className="ul-edu fa-ul mb-2">
                                    <li>
                                        <i className="fa-li fas fa-graduation-cap"></i>
                                        <div className="description">
                                            <p className="course" style={{ fontWeight: 500, marginBottom: '0px' }}>
                                                Ph.D., Mechanical Engineering, 2024 (expected)
                                            </p>
                                            <p className="institution" style={{ fontWeight: 300, marginBottom: '2px' }}>
                                                University of Delaware
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa-li fas fa-graduation-cap"></i>
                                    <div className="description">
                                        <p className="course" style={{ fontWeight: 500, marginBottom: '0px' }}>
                                            M.Sc., Mechanical Engineering, 2023
                                        </p>
                                        <p className="institution" style={{ fontWeight: 300, marginBottom: '2px' }}>
                                            University of Delaware
                                        </p>                                    </div>
                                    </li>
                                    <li>
                                        <i className="fa-li fas fa-graduation-cap"></i>
                                    <div className="description">
                                        <p className="course" style={{ fontWeight: 500, marginBottom: '0px' }}>
                                            B.Sc. & M.Sc., Electrical and Computer Engineering, 2019
                                        </p>
                                        <p className="institution" style={{ fontWeight: 300, marginBottom: '2px' }}>
                                            National Technical University of Athens
                                        </p>
                                    </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;