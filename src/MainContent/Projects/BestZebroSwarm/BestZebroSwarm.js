import zebro from "./img/zebro.jpg";
import group from "./img/csm_Copy of IMG_8006_f77a3c6f61.jpg"
import group_photo from "./img/group_photo.jpg"
function BestZebroSwarm() {
    return (
        <div>
            <div className="container d-flex flex-column px-5 px-md-0">

                <h2 className="fw-bold my-3">Global Swarming, a Robotic Revolution (2018 BEST Spring Course at TU Delft)</h2>

                <h3 className="fw-medium my-3">Project Scope and Achievements</h3>

                <span className="text-body my-3">
                    In 2018, I had the privilege to attend an educational course of the Board of European Students of Technology (BEST), held at the Delft University of Technology in Netherlands.
                    The course focused on the current research and engineering in swarm robotics, with lectures about the current research and engineering in swarm robotics, delivered by
                    <a href="https://ocw.tudelft.nl/teachers/c-j-m-verhoeven/" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> Professor C. J. M Verhoeven</a>.
                    Besides lectures, we also attended lab workshops on implementing swarm behavior with the Zebro robots (shown below), and visited robotic start-up companies at
                    <a href="https://robohouse.nl/" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> RoboValley</a>.

                    <br/>

                    As a final assignment, we tried to make the robots swarm. The Robotics Institute provided us with Zebro robots, and in the end, we managed to let the Zebros communicate, but not swarm.
                    Specifically, we managed to make the robots detect and autonomously navigate towards a designated leader robot, which was a significant achievement given the time constraints and the complexity of the task.
                </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                    <img src={zebro} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={group} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={group_photo} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                </div>



                {/*<span className="text-body my-3">*/}
                {/*    Although our robot didn't achieve the highest speed in the class (ranking as the second fastest), it demonstrated exceptional consistency by successfully completing all three trials.*/}
                {/*    Despite the potential to increase speed, we prioritized avoiding slipping as a key objective, opting for a "medium" speed. You can watch how we did in the attached video.*/}
                {/*</span>*/}

                {/*<div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>*/}
                {/*<iframe className="m-3" width="560" height="315" src="https://www.youtube.com/embed/Ckq6fkE4RpM?si=usBS4MNPxgI5Q7ab" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>*/}
                {/*</div>*/}

                <h3 className="fw-medium my-3">Detailed Information:</h3>

                <span className="text-body my-3">
                    You can find information about the course
                    <a href="https://www.tudelft.nl/onderwijs/voorlichting-en-ervaren/student-stories/best-delft-spring-course-nine-days-learning-about-robotics" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> here</a>.
                </span>

            </div>
        </div>
    )
}

export default BestZebroSwarm;