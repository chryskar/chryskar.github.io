import me from "./img/DSC_0714.JPG";
import manipulator from "./img/DSC_0956.JPG"
import group_photo from "./img/DSC_0948.JPG"
function Duisburg() {
    return (
        <div>
            <div className="container d-flex flex-column px-5 px-md-0">

                <h2 className="fw-bold my-3">Object-oriented methods for the modeling of kinematical chains with application to robotic and human walking (2017 Workshop at University of Duisburg-Essen (UDE))</h2>

                <h3 className="fw-medium my-3">Project Scope and Achievements</h3>

                <span className="text-body my-3">
                    In 2017, I had the privilege to be selected from a pool of applicants for a two-parts robotics workshop held in the University of Duisburg-Essen, in Germany, and in the National Technical University of Athens (NTUA), in Greece.
                    The workshop was part of the three-year DAAD HPG-Project “Theoretical and Experimental Perspectives for the Control of Complex Robotic Systems with Application to Advanced Walking Devices”, organized by
                    <a href="https://microlab.ntua.gr/" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px' }}> Prof. Dimitrios Soudris</a>, <a href="https://csl-ep.mech.ntua.gr/" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px' }}> Prof. Evangelos Papadopoulos (NTUA)</a>.
                    and
                    <a href="https://www.uni-due.de/mechanikb/organisation/kecskemethy.php" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> Prof. Andrés Kecskeméthy (UDE)</a>.

                    Besides attending lectures, we also had to chance to visit the motion analysis laboratory of the University of Duisburg-Essen, where I was introduced to the fascinating world of rehabilitation robotics.

                    <br/>
                    During the workshop, we attended lectures covering the following topics:
                    <ul className="m-3">
                        <li>parametrizations of rotations (rotation matrices, Euler angles, angle and axis of rotation, quaternions) and their differential relationships</li>
                        <li>kinematics of serial kinematical chains of position, velocity and acceleration level</li>
                        <li>introduction in the kinematics of closed chains including different types of closure conditions</li>
                        <li>inverse and direct dynamics of multibody systems using minimal coordinates</li>
                        <li>introduction to human-gait analysis using marker-based systems</li>
                        <li>kinematics and multibody dynamics using the object-oriented multibody simulation library MOBILE.</li>
                    </ul>
                     On the last day, we also had the chance to have a fun ride with the Robocoaster shown below.
                </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                    <img src={manipulator} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={me} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={group_photo} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                </div>



                {/*<span className="text-body my-3">*/}
                {/*    Although our robot didn't achieve the highest speed in the class (ranking as the second fastest), it demonstrated exceptional consistency by successfully completing all three trials.*/}
                {/*    Despite the potential to increase speed, we prioritized avoiding slipping as a key objective, opting for a "medium" speed. You can watch how we did in the attached video.*/}
                {/*</span>*/}

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <iframe className="m-3" width="560" height="315" src="https://www.youtube.com/embed/PQ9qM3JjMS8?si=JSeHzHpusfuU_Zj2" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </div>

                {/*<h3 className="fw-medium my-3">Detailed Information:</h3>*/}

                {/*<span className="text-body my-3">*/}
                {/*    You can find information about the course*/}
                {/*    <a href="https://www.tudelft.nl/onderwijs/voorlichting-en-ervaren/student-stories/best-delft-spring-course-nine-days-learning-about-robotics" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> here</a>.*/}
                {/*</span>*/}

            </div>
        </div>
    )
}

export default Duisburg;