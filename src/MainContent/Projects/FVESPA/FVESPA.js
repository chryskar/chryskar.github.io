import analysis_fvespa from "./img/analysis_FVESPA_REAL_HS_sub_01_speed_01.png";
// import analysis_grf from "./img/analysis_GRF_REAL_HS_sub_01_speed_01.png";
import pseudo_code from "./img/fvespa_pseudocode.jpg"
import fvespa_video from "./img/demo_FVESPA_OOP_CPP_comp.mp4"
function FVESPA() {
    return (
        <div>
            <div className="container d-flex flex-column">

                <h2 className="fw-bold m-3">Foot VErtical & Sagittal Position Algorithm (F-VESPA)</h2>

                <h3 className="fw-medium m-3">Project Scope and Achievements</h3>

                <span className="text-body m-3">
                    Detection of foot-strike events is an integral part of gait analysis, as it allows the temporal registration of gait cycles.
                    At the same time, it is necessary to register gait phases in real-time for applications such as wearable assistive devices and gait biofeedback that work synchronously with the human gait.
                    Although many algorithms have been proposed for detecting foot-strikes with either wearable (e.g. Inertial Measurement Units (IMUs)) or non-wearable (e.g. force plates) sensors, there is a great need for real-time algorithms that rely only on recording the kinematics of the leg motion.
                    This work proposes a novel and efficient kinematic algorithm, called the Foot VErtical & Sagittal Position Algorithm (F-VESPA), which has several advantages over existing methods. First, it accurately estimates foot-strike events using kinematic data without requiring access to future data points, hence achieving reduced latency during real-time implementation. Moreover, it does not require tuning of the utilized parameters, rendering it robust to different subjects and treadmill speeds. The algorithm is tested in a large set of subjects across various treadmill speeds, and it is shown to outperform even offline implementations of existing prominent kinematic algorithms.
                    Using a 150 Hz data collection system, the F-VESPA achieved a median of 33 ms for the total true errors in detecting foot-strike. The F-VESPA is a highly responsive kinematic algorithm that can detect foot-strike events in real-time, with high accuracy, robustness and reduced latency, enabling real-time temporal registration of gait cycles.                </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <img src={analysis_fvespa} alt="Logo 2" className="section-logo m-2" style={{ height: '300px', width: 'auto' }} />
                    <img src={pseudo_code} alt="Logo 2" className="section-logo m-2" style={{ height: '300px', width: 'auto' }} />
                </div>

                <span className="text-body m-3">
                    The video below demonstrates a real-time implementation of the F-VESPA for both feet during treadmill walking.
                </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <video controls width="560" height="315" style={{ maxWidth: '100%', height: 'auto' }}>
                        <source src={fvespa_video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <h3 className="fw-medium m-3">Impact:</h3>

                <span className="text-body m-3">
                   Despite leading to a conference and a journal publication, this work also allowed multiple researchers in HORC lab to complete their gait experiments on the VST 1,
                    which are analyzed in the following publications:

                        <ul className="m-3">
                            <li>Vaughn Chambers, Madison Johnson and Panagiotis Artemiadis, “Robot-assisted Targeted Gait Training,” in Journal of Kinesiology and Exercise Sciences, 105 (34): 11-22, 2024. <a href="https://jkes.eu/resources/html/article/details?id=614540&language=en" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> 10.5604/01.3001.0053.9679</a></li>
                            <li>Charikleia Angelidou and Panagiotis Artemiadis, “On Intuitive Control of Ankle-Foot Prostheses: A Sensor Fusion-based Algorithm for Real-Time Prediction of Transitions to Compliant Surfaces,” In the Proc. of the 2023 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), Detroit, MI, USA, pp. 2122-2127, 2023. <a href="https://doi.org/10.1109/IROS55552.2023.10341783" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> https://doi.org/10.1109/IROS55552.2023.10341783</a></li>
                            <li>Chrysostomos Karakasis, Robert Salati and Panagiotis Artemiadis, “Adjusting the Quasi-Stiffness of an Ankle-Foot Prosthesis Improves Walking Stability during Locomotion over Compliant Terrain,” In the Proc. of the 2023 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), Detroit, MI, USA, pp. 2140-2145, 2023. <a href="https://doi.org/10.1109/IROS55552.2023.10342344" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> https://doi.org/10.1109/IROS55552.2023.10342344</a></li>
                            <li>Charikleia Angelidou and Panagiotis Artemiadis, “On Predicting Transitions to Compliant Surfaces in Human Gait via Neural and Kinematic Signals,” in IEEE Transactions on Neural Systems and Rehabilitation Engineering, 31:2214-2223, 2023. <a href="https://doi.org/10.1109/TNSRE.2023.3272355" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> 10.1109/TNSRE.2023.3272355</a></li>
                            <li>Vaughn Chambers and Panagiotis Artemiadis, “Using robot-assisted stiffness perturbations to evoke aftereffects useful to post-stroke gait rehabilitation,” in Frontiers in Robotics and AI, 9, 2023. <a href="https://doi.org/10.3389/frobt.2022.1073746" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> https://doi.org/10.3389/frobt.2022.1073746</a></li>
                            <li>Bradley Hobbs and Panagiotis Artemiadis, “A Systematic Method for Outlier Detection in Human Gait Data,” in the 2022 IEEE 17th International Conference on Rehabilitation Robotics (ICORR), p. 1-6, 2022. <a href="https://doi.org/10.1109/ICORR55369.2022.9896411" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> 10.1109/ICORR55369.2022.9896411</a></li>
                            <li>Vaughn Chambers and Panagiotis Artemiadis, “Repeated Robot-assisted Unilateral Stiffness perturbations Result in Significant Aftereffects Relevant to Post-Stroke Gait Rehabilitation,” in 2022 IEEE International Conference on Robotics and Automation (ICRA), p. 5426-5433, 2022. <a href="https://doi.org/10.1109/ICRA46639.2022.9812323" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> 10.1109/ICRA46639.2022.9812323</a></li>
                        </ul>
                  </span>

                <h3 className="fw-medium m-3">Detailed Information and Versions:</h3>

                <span className="text-body m-3">
                    Originally, an offline version of F-VESPA was implemented in MATLAB for verification purposes.
                    Then, a real-time C++ version was completed as part of the VST 1 software architecture.
                    Recently, a real-time OOP C++ version was implemented as part of the software architecture for the newly designed VST 2.
                    <br/>
                    Below you can find a list of all versions of F-VESPA, paired with a link to the corresponding Github repository (rest will be added promptly).

                    <ul className="m-3">
                        {/*<li>Original offiline version in MATLAB <a href="https://jkes.eu/resources/html/article/details?id=614540&language=en" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> 10.5604/01.3001.0053.9679</a></li>*/}
                        {/*<li>Refined offiline version in MATLAB <a href="https://jkes.eu/resources/html/article/details?id=614540&language=en" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> 10.5604/01.3001.0053.9679</a></li>*/}
                        {/*<li>Real-time version in C++ for VST 1 <a href="https://jkes.eu/resources/html/article/details?id=614540&language=en" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> 10.5604/01.3001.0053.9679</a></li>*/}
                        <li>Real-time version in OOP C++ for VST 2 <a href="https://github.com/chryskar/OOP_CPP_F-VESPA" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> (repo)</a>.</li>
                    </ul>

                 </span>

                <h3 className="fw-medium m-3">References:</h3>

                <span className="text-body mx-3">
                        <ul className="mx-3">
                            <li>Chrysostomos Karakasis and Panagiotis Artemiadis, “Real-time kinematic-based detection of foot-strike during walking,” Journal of Biomechanics, vol. 129, p. 110849, 2021. <a href="https://doi.org/10.1016/j.jbiomech.2021.110849" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> 10.1016/j.jbiomech.2021.110849</a></li>
                            <li>Chrysostomos Karakasis and Panagiotis Artemiadis, “F-VESPA: A Kinematic-based Algorithm for Real-time Heel-strike Detection During Walking,” in 2021 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), pp. 5098-5103 2021. <a href="https://doi.org/10.1109/IROS51168.2021.9636335" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> 10.1109/IROS51168.2021.9636335</a></li>
                        </ul>
                  </span>

            </div>
        </div>
    )
}

export default FVESPA;