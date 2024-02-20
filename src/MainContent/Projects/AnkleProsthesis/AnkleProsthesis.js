import ankle_prosthesis from "./img/IROS23_1579_graphical_abstract.jpg";
import ankle_moment from "./img/angle_moment.png";
import control_diagram from "./img/control_diagram.png";
import experiment_video from "./img/IROS23_1579_VI_i.mp4";
import presentation from "./img/IROS23_1579.mp4";
import results from "./img/results_lyap_highlight_long_10_15_20Nmdeg_VT.png";
function AnkleProsthesis() {
    return (
        <div>
            <div className="container d-flex flex-column">

                <h2 className="fw-bold m-3">Adjusting the Quasi-Stiffness of an Ankle-Foot Prosthesis Improves Walking Stability during Locomotion over Compliant Terrain</h2>

                <h3 className="fw-medium m-3">Project Scope and Achievements</h3>

                <span className="text-body m-3">
                    Despite significant advances in the design of robotic lower-limb prostheses for individuals with impaired mobility, there is a need for further
                    progress in improving the robustness, safety, and stability of these devices in a wide range of activities of daily living. Although powered prostheses
                    have been able to adapt to different speeds, conditions, and rigid terrains, no control strategies have been proposed for addressing walking over
                    compliant surfaces. This work proposes a continuous admittance controller that adjusts the ankle quasi-stiffness of a powered ankle-foot prosthesis
                    and improves gait stability during locomotion over compliant terrain. The proposed controller is evaluated with walking experiments on an instrumented
                    treadmill that can accurately change the walking surface stiffness. In these experiments, the proposed controller accurately changes the prosthesis
                    ankle quasi-stiffness across a wide range of 10−20Nm/deg, while improving local dynamic stability compared to a standard phase-variable controller.
                    The proposed controller can significantly improve the performance of lower-limb prostheses in dynamic and compliant environments frequently encountered
                    in daily activities, resulting in improved quality of life for people with lower-limb amputation.
                </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <img src={ankle_prosthesis} alt="Logo 2" className="section-logo m-2" style={{ height: '300px', width: 'auto' }} />
                    <img src={control_diagram} alt="Logo 2" className="section-logo m-2" style={{ height: '300px', width: 'auto' }} />
                </div>

                <span className="text-body m-3">
                    For this study, a healthy non-disabled human subject (male, age: 22, height: 1.62m, weight: 56.7kg) tested the prosthetic device.
                    A carbon fiber ankle bypass adapter was fitted around the left shank of the subject to allow walking with the prosthesis, whilst maintaining knee
                    movement. Walking trials were performed on a unique robotic device, the VST.
                    <br/>
                    In our experiment, the subject completed four walking trials at a self-selected speed of
                    0.6m/s. In the first trial, the standard tibia controller was utilized, while in the next three trials, the proposed admittance controller was employed with three
                    different desired stiffness levels (10, 15 and 20 Nm/deg). For all trials, the subject experienced consecutive one-step unilateral stiffness perturbations of 30kN/m on the left leg (prosthesis
                    side) for 200 gait cycles. During the perturbations, the left belt of the VST emulates a surface similar to a foam pad, while the right side is kept rigid.
                </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <img src={ankle_moment} alt="Logo 2" className="section-logo m-2" style={{ height: '300px', width: 'auto' }} />
                    <img src={results} alt="Logo 2" className="section-logo m-2" style={{ height: '300px', width: 'auto' }} />
                </div>

                <span className="text-body m-3">
                    The proposed controller exhibited accurate quasi-stiffness tracking across the wide range of 10-20Nm/deg, whilst significantly improving local dynamic
                    stability compared to a standard controller. The video below demonstrates the subject walking with the ankle prosthesis on the VST 1 using the four different controllers.
                </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <video controls width="560" height="315" style={{ maxWidth: '100%', height: 'auto' }}>
                        <source src={experiment_video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <h3 className="fw-medium m-3">Detailed Information:</h3>

                <span className="text-body m-3">
                    Although the github repository for this work is private for now, you can still watch the accompanying presentation video of this work in IROS 2023, held in Detroit.
                    {/*<a href="https://gitfront.io/r/user-3868622/553762832d805371ce1b53ac150586e2b40c5bc1/karakasis-MED-2022/" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> here</a>.*/}
                </span>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <video controls width="560" height="315" style={{ maxWidth: '100%', height: 'auto' }}>
                        <source src={presentation} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>


                <h3 className="fw-medium m-3">References:</h3>

                <span className="text-body mx-3">
                        <ul className="mx-3">
                            <li>Chrysostomos Karakasis, Robert Salati and Panagiotis Artemiadis, “Adjusting the Quasi-Stiffness of an Ankle-Foot Prosthesis Improves Walking Stability during Locomotion over Compliant Terrain,” In the Proc. of the 2023 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), Detroit, MI, USA, pp. 2140-2145, 2023. <a href="https://doi.org/10.1109/IROS55552.2023.10342344" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> https://doi.org/10.1109/IROS55552.2023.10342344</a></li>
                        </ul>
                  </span>

            </div>
        </div>
    )
}

export default AnkleProsthesis;