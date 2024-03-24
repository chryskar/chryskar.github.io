import dual_slip from "./img/dual_slip.jpg";
import bioinspired from "./img/Fig_4_outline.png";
import gait_events from "./img/MED22_gait_events_final.png"
import snapshots from "./img/snapshots_30kN_transp_crop.png"
function FVESPA() {
    return (
        <div>
            <div className="container d-flex flex-column justify-content-center px-5">

                <h2 className="fw-bold my-3">3D Dual Spring-Loaded Inverted Pendulum (SLIP) Model</h2>

                <h3 className="fw-medium my-3">Project Scope and Achievements</h3>

                <span className="text-body my-3">
                    Bipedal locomotion over compliant terrain is an important and largely underexplored problem in the robotics community.
                    Although robot walking has been achieved on some non-rigid surfaces with existing control methodologies, there is a need for a systematic
                    framework applicable to different bipeds that enables stable locomotion over various compliant terrains.
                    In this work, a novel energy-based framework is proposed that allows the dynamic locomotion of bipeds across a wide range of compliant surfaces.
                    The proposed framework utilizes an extended version of the 3D Dual Spring-loaded Inverted Pendulum (Dual-SLIP) model that supports compliant terrains,
                    while a bio-inspired controller is employed to regulate expected perturbations of extremely low ground-stiffness levels.
                    An energy-based methodology is introduced for tuning the bio-inspired controller to enable dynamic walking with robustness to a wide range of low
                    ground-stiffness one-step perturbations. The proposed system and controller are shown to mimic the vertical ground reaction force (GRF) responses
                    observed in human walking over compliant terrains. Moreover, they succeed in handling repeated unilateral stiffness perturbations under specific
                    conditions. This work can advance the field of biped locomotion by providing a biomimetic method for generating stable human-like walking trajectories
                    for bipedal robots over various compliant surfaces. Furthermore, the concepts of the proposed framework could be incorporated into the design of
                    controllers for lower-limb prostheses with adjustable stiffness to improve their robustness over compliant surfaces.
                </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                    <img src={dual_slip} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={gait_events} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                </div>

                <span className="text-body m-3">
                A nonlinear optimization approach and a
                Linear-Quadratic Regulator (LQR) controller similar to those
                proposed for rigid terrains are implemented to achieve
                periodic walking gaits over stiff terrains. However, the LQR
                controller is shown to be inadequate for stable walking over
                a moderate ground stiffness level of 200 kN/m or less.
                For this reason, a new biomechanics-inspired controller is
                introduced that adjusts the stiffness of the legs in support.
                The proposed controller is tested on very soft terrains and
                results in stable walking after one-step unilateral stiffness
                perturbations at stiffness levels as low as 30 kN/m, which
                resembles the stiffness of a foam pad. It is shown that on
                such soft terrains, the leg sinks into the soft ground up to
                11.49 cm, which is significant for the rest length of the
                legs (1 m). Despite that, the proposed framework achieves
                stable walking and a fast recovery (less than 10 steps) after
                the 1-step perturbation.
                </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                    <img src={bioinspired} alt="Logo 2" className="section-logo m-2" style={{ height: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={snapshots} alt="Logo 2" className="section-logo m-2" style={{ height: '300px', width: 'auto', maxWidth: '100%' }} />
                </div>

                <span className="text-body m-3">
                    The videos below demonstrate the 3D Dual-SLIP model experiencing single and repeated one-step unilateral stiffness perturbations in simulation.
                </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                    <iframe className="m-3" width="560" height="315" src="https://www.youtube.com/embed/xKRRyGAfvzs?si=EXV3EYcBvhv6w4cX" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe className="m-3" width="560" height="315" src="https://www.youtube.com/embed/IfyqaeqL3dc?si=h1nMp8-Ev5lV-jsp" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>


                <h3 className="fw-medium m-3">Detailed Information:</h3>

                <span className="text-body m-3">
                    The github repository for the MED 2022 work can be found
                    <a href="https://github.com/HORC-Lab/MED_2022" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> here</a>.
                </span>

                <h3 className="fw-medium m-3">References:</h3>

                <span className="text-body mx-3">
                        <ul className="mx-3">
                            <li>Chrysostomos Karakasis, Ioannis Poulakakis and Panagiotis Artemiadis, “An Energy-based Framework for Robust Dynamic Bipedal Walking over Compliant Terrain,” in ASME Journal of Dynamic Systems, Measurement, and Control, March 2024; 146(2): 021008. <a href="https://doi.org/10.1115/1.4064094" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> https://doi.org/10.1115/1.4064094</a></li>
                            <li>Chrysostomos Karakasis, Ioannis Poulakakis, and Panagiotis Artemiadis, “Robust Dynamic Walking for a 3D Dual-SLIP Model under One-Step Unilateral Stiffness Perturbations: Towards Bipedal Locomotion over Compliant Terrain,” in the 30th Mediterranean Conference on Control and Automation (MED), p. 969-975, 2022. <a href="https://doi.org/10.1109/MED54222.2022.9837236" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> 10.1109/MED54222.2022.9837236</a></li>
                        </ul>
                  </span>

            </div>
        </div>
    )
}

export default FVESPA;