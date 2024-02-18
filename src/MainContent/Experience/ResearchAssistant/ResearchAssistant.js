function ResearchAssistant() {
    return (
        <div>
            <div className="container d-flex flex-column">

                <h2 className="fw-bold m-3">Graduate Research Assistant</h2>

                <h3 className="fw-medium m-3">Research Projects</h3>

                <span className="text-body m-3">
                    My research focuses on achieving stable and robust bipedal locomotion over compliant terrains, with applications to lower-limb prostheses and bipedal robots.
                    Overall, my research has produced excellent results and led to five publications at prestigious conferences (IEEE IROS, IEEE MED) and journals (Journal of Biomechanics, ASME Journal of Dynamic Systems, Measurement, and Control).
                    <ol className="m-3">
                        <li className="mb-3"><span className="fw-medium">Improving Walking Stability of Ankle-Foot Prostheses across Compliant Terrains</span>
                            <br />
                            Conducted gait experiments with three subjects to test the effect of adjusting the quasi-stiffness of an ankle-foot prosthesis across various compliant terrains.
                        </li>
                        <li className="mb-3"><span className="fw-medium">The Variable Stiffness Treadmill (VST) 2.0: Development and Validation of a Unique Tool to Investigate Locomotion on Compliant Terrains</span>
                            <br />
                            Analyzed the system response of the new VST 2 treadmill to extract an accurate mapping between the position of Variable Stiffness Mechanism (VSM) and the effective stiffness of the treadmill.
                            Implemented the F-VESPA foot-strike algorithm in OOP C++, as part of the new software architecture for VST 2.
                        </li>
                        <li className="mb-3"><span className="fw-medium">An Energy-Based Framework for Robust Dynamic Bipedal Walking Over Compliant Terrain</span>
                            <br />
                            Proposed a novel energy-based framework utilizing a 3D bipedal model that allows the dynamic locomotion of bipeds across a wide range of compliant surfaces.
                        </li>
                        <li className="mb-3"><span className="fw-medium">Adjusting the Quasi-Stiffness of an Ankle-Foot Prosthesis Improves Walking Stability during Locomotion over Compliant Terrain</span>
                            <br />
                            Designed a continuous admittance controller that adjusts the ankle quasi-stiffness of a powered ankle-foot prosthesis and improves gait stability during locomotion over compliant terrain.
                        </li>
                        <li className="mb-3"><span className="fw-medium">Robust Dynamic Walking for a 3D Dual-SLIP Model under One-Step Unilateral Stiffness Perturbations: Towards Bipedal Locomotion over Compliant Terrain</span>
                            <br />
                            Proposed a novel biomechanics-inspired controller that adjusts the stiffness of the legs in support for robust and dynamic bipedal locomotion over compliant terrains.
                        </li>
                        <li className="mb-3"><span className="fw-medium">F-VESPA: A Kinematic-based Algorithm for Real-time Foot-strike Detection During Walking</span>
                            <br />
                            Developed and implemented a novel kinematic data-based algorithm for real-time foot-strike detection.
                        </li>
                    </ol>
                </span>

                <h3 className="fw-medium m-3">Mentoring and Research Advising</h3>

                <span className="text-body m-3">
                    <ul>
                      <li>
                        <strong>Camryn Scully</strong> (Master's in Robotics) <span style={{ float: 'right' }}>Feb. 2023 - Present</span>
                        <br />
                        Development of an inline bypass adapter for an ankle-foot prosthesis based on the iWALK3.0 Hands Free Crutch. Conducting gait experiments with able-bodied subjects using a lower-limb prosthesis via a side adapter on VST 2.
                      </li>

                      <li>
                        <strong>Robert Salati</strong> (Master's in Robotics) <span style={{ float: 'right' }}>Sep. 2022 - Aug. 2023</span>
                        <br />
                        Development of an admittance controller for the adjustment of the quasi-stiffness of an ankle-foot prosthesis.
                      </li>

                      <li>
                        <strong>Allysa Mae Tuano</strong> (Senior) <span style={{ float: 'right' }}>Feb. 2020 - Sep. 2020</span>
                        <br />
                        Platform development aiming to recreate human leg motion via a KUKA industrial robotic arm for the testing purposes of lower limb ankle prostheses.
                      </li>

                      <li>
                        <strong>Matthew Balbierer</strong> (Sophomore) <span style={{ float: 'right' }}>Dec. 2019 - Aug. 2020</span>
                        <br />
                        Development of a user-friendly interface and implementation of trajectory tracking via forward kinematics for the xArm5 Robotic Arm.
                      </li>
                    </ul>
                </span>

                <h3 className="fw-medium m-3">Professional Service</h3>

                <span className="text-body m-3">
                    Throughout my Ph.D., I have been acting as a reviewer for journal and conference submissions:
                    <ul className="">
                        <li>American Control Conference (ACC), 2023 - present</li>
                        <li>IEEE International Conference on Rehabilitation Robotics (ICORR), 2023 - present</li>
                        <li>IEEE Robotics and Automation Letters (RA-L), 2022 - present</li>
                        <li>IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2022 - present</li>
                        <li><a href="https://www.frontiersin.org/articles/10.3389/frobt.2021.740927/full" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px' }}> Frontiers in Robotics and AI</a>
                            , 2021 - present</li>
                        <li>International Journal of Robotics Research (IJRR), 2021 - present</li>
                        <li>Robotica, 2021 - present</li>
                        <li>Wearable Technologies, 2020 - present</li>
                        <li>IEEE Transactions on Neural Systems \& Rehabilitation Engineering (TNSRE), 2020 - present</li>
                        <li>ASME Journal of Mechanisms and Robotics (JMR), 2019 - present</li>
                        <li>IEEE International Conference on Robotics and Automation (ICRA), 2019 - present</li>

                    </ul>
                </span>


            </div>
        </div>
    )
}

export default ResearchAssistant;