import './Home.css'
import ChrisakosImage from './PXL_20220918_013608740.jpg'

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
                            My expected graduation date is in May-June of 2024 and I am excited to explore job opportunities in industry or research centers. </span>
                        <br />
                        <span> Currently, I am working as a research assistant at the Human-Oriented Robotics and Control Lab{' '}
                          <a href="https://sites.udel.edu/horclab/" target="_blank" rel="noopener noreferrer" style={{ color: '#FF5733' }}
                          >
                             (HORC Lab)
                            </a>
                            , where my main research goal is the development of a controller for an ankle-foot prosthesis that can adjust to multiple surfaces with variable compliance.
                            My research interests include rehabilitation robotics, bipedal robots, prosthetics, and dynamical systems.
                            Please feel welcome to look around and feel free to reach out via the contact links below.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;