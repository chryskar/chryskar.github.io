import boards from "./img/boards.jpg";
import robot_boards from "./img/robot_with_boards.jpg"
// import flow_chart from "./img/FlowChart.png"
function MasterThesis() {
    return (
        <div>
            <div className="container d-flex flex-column">

                <h2 className="fw-bold m-3">Exploiting the SoC FPGA Capabilities in the Control Architecture of a Quadruped Robot</h2>

                <h3 className="fw-medium m-3">Project Scope and Achievements</h3>

                <span className="text-body m-3">
                    During the final year of my diploma studies, I decided to realize my master thesis by initiating a collaboration between the
                    <a href="https://microlab.ntua.gr/" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px' }}> (MicroLab)</a> and the Control Systems Lab <a href="https://csl-ep.mech.ntua.gr/" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px' }}> (CSL-EP)</a>.
                    Both of my supervisors, Prof. Dimitrios Soudris and Prof. Evangelos Papadopoulos inspired me to conduct cross-disciplinary research between the two different scientific fields on an unprecedented venture.
                    The goal of my thesis was to introduce a centralized control scheme for the quadruped robot "Laelaps II", using a low-cost System on Chip device that comprises an ARM-Cortex A9 processor and an FPGA.
                </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <img src={boards} alt="Logo 2" className="section-logo m-2" style={{ height: '300px', width: 'auto' }} />
                    <img src={robot_boards} alt="Logo 2" className="section-logo m-2" style={{ height: '300px', width: 'auto' }} />
                </div>

                <span className="text-body m-3">
                    Specifically, a Hardware/Software Co-design architecture was proposed, where the management of the robot's motors and encoders was
                    handled on the FPGA at a very high frequency, leaving the embedded ARM processor free to allocate all its resources to motion control
                    and user interfacing tasks. In detail, a bare metal approach was adopted to efficiently deploy trajectory planning and inverse kinematics for driving the two-DoF legs of the robot in real-time.
                    {/*Moreover, this project allowed me to employ and enhance my skills in C/C++, MATLAB and hardware design.*/}
                    </span>

                <span className="text-body m-3">
                    The proposed system has real-time characteristics and is capable of controlling more than eight actuators at very high frequencies, outperforming most motion control platforms existing in the market, while keeping the total cost low.
                    The whole hardware/software architecture was analyzed and evaluated compared with state-of-the-art approaches, while a trotting experiment with the Laelaps II motion system is presented below for validation purposes.
                </span>
                {/*<span className="text-body m-3">*/}
                {/*A Hardware/ Software Co-design architecture is presented:*/}
                {/*    <ul className="m-3">*/}
                {/*        <li>FPGA handles the management of the motor control and encoder signals </li>*/}
                {/*        <li>ARM processor executes the higher-level motion planning and control</li>*/}
                {/*    </ul>*/}
                {/*  </span>*/}

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <iframe className="m-3" width="560" height="315" src="https://www.youtube.com/embed/7Io6hpUmc00?si=2UDiK0HyDcnlCuK5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <h3 className="fw-medium m-3">Publication and Recognition:</h3>

                <span className="text-body m-3">
                   This work led to a publication in a flagship conference focusing on mechatronics and intelligent systems: the
                    <a href="https://ieeexplore.ieee.org/document/9159012" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> IEEE/ASME International Conference on Advanced Intelligent Mechatronics (AIM) </a>
                    on 2020, where I presented the paper, as part of the ``Legged Robots II" Technical Session.

                    In addition, this work was also invited to be presented as part of the workshop of a DAAD HPG-Project on the control of complex robotic systems and the Euroavia's 2019 Satellite Symposium, both held in NTUA, Athens, in 2018 and 2019 respectively.
                </span>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <iframe className="m-3" src="https://drive.google.com/file/d/1xEWogmWNpEuPR-bF9t8tGTfFUzNKVGzq/preview" title="YouTube video replayer" width="640" height="360" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <h3 className="fw-medium m-3">Detailed Information:</h3>

                <span className="text-body m-3">
                    The github repository can be found
                    <a href="https://github.com/chryskar/karakasis2020exploiting" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> here</a>.
                </span>

                <h3 className="fw-medium m-3">References:</h3>

                <span className="text-body mx-3">
                        <ul className="mx-3">
                            <li>Karakasis, Chrysostomos, Konstantinos Machairas, Charalampos Marantos, Iosif S. Paraskevas, Evangelos Papadopoulos, and Dimitrios Soudris. "Exploiting the SoC FPGA Capabilities in the Control Architecture of a Quadruped Robot." In 2020 IEEE/ASME International Conference on Advanced Intelligent Mechatronics (AIM), pp. 501-507. IEEE, 2020. <a href="https://doi.org/10.1109/AIM43001.2020.9159012" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> 10.1109/AIM43001.2020.9159012</a></li>
                        </ul>
                  </span>

            </div>
        </div>
    )
}

export default MasterThesis;