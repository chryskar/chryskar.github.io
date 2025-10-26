import './Home.css'
import ChrisakosImage from './chrys_2025_prof_crop.jpg'

function Home () {
    return (
        <div>
            <div className="d-flex justify-content-center mx-5">
                <div className="d-flex flex-column flex-xl-row justify-content-center align-items-center"
                     style={{maxWidth: '1536px'}}>
                    {/* Image */}
                    <img src={ChrisakosImage} alt="Chrisakos img" className="main-image m-3"></img>
                    {/* Details */}
                    <div className="d-flex flex-column justify-content-center m-3">
                        <h1 className="fw-bold">Chrysostomos (Chrys) Karakasis</h1>
                        <span> I am a Senior Robotics and Controls Engineer at Johnson and Johnson Medtech working on the multi-specialty soft-tissue surgery robot OTTAVA.</span>
                        <br/>
                        <span> Previously, I was a research assistant at the Human-Oriented Robotics and Control Lab
                            <a href="https://sites.udel.edu/horclab/" target="_blank" rel="noopener noreferrer"
                               style={{marginRight: '0px'}}> (HORC Lab)</a>
                            , where my main research focused on achieving <strong>robust and stable locomotion over compliant terrains</strong>, with applications to lower-limb prostheses and bipedal robots.
                            Please feel welcome to look around and feel free to reach out via the contact links below.
                        </span>
                        <div className="row">
                            <div className="col-md mt-5">
                                <h3 className="fw-bold">Interests</h3>
                                <ul className="ul-interests mb-0">
                                    <li>Rehabilitation & Medical Robotics</li>
                                    <li>Legged Locomotion</li>
                                    <li>Dynamics and Control</li>
                                    <li>Embedded Systems Design</li>
                                </ul>
                            </div>
                            <div className="col-md mt-5">
                                <h3 className="fw-bold">Education</h3>
                                <ul className="ul-edu fa-ul mb-2">
                                    <li>
                                        <i className="fa-li fas fa-graduation-cap"></i>
                                        <div className="description">
                                            <p className="course" style={{fontWeight: 500, marginBottom: '0px'}}>
                                                Ph.D., Mechanical Engineering, 2024
                                            </p>
                                            <p className="institution" style={{fontWeight: 300, marginBottom: '2px'}}>
                                                University of Delaware
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa-li fas fa-graduation-cap"></i>
                                        <div className="description">
                                            <p className="course" style={{fontWeight: 500, marginBottom: '0px'}}>
                                                M.Sc., Mechanical Engineering, 2023
                                            </p>
                                            <p className="institution" style={{fontWeight: 300, marginBottom: '2px'}}>
                                                University of Delaware
                                            </p></div>
                                    </li>
                                    <li>
                                        <i className="fa-li fas fa-graduation-cap"></i>
                                        <div className="description">
                                            <p className="course" style={{fontWeight: 500, marginBottom: '0px'}}>
                                                B.Sc. & M.Sc., Electrical and Computer Engineering, 2019
                                            </p>
                                            <p className="institution" style={{fontWeight: 300, marginBottom: '2px'}}>
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