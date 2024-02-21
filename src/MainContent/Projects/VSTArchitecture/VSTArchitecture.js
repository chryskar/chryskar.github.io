import terminals from "./img/terminals_VST_software.png";
import flow_chart from "./img/Presentation_Horc_Lab_VST_Architecture1.jpg"
import vst_video from "./img/experiment_video_vaughn.mov"
function VSTArchitecture() {
    return (
        <div>
            <div className="container d-flex flex-column px-5">

                <h2 className="fw-bold my-3">Software Architecture for Variable Stiffness Treadmill 1</h2>

                <h3 className="fw-medium mυ-3">Project Scope and Achievements</h3>

                <span className="text-body my-3">
                    During the first year of my Ph.D., Dr. Artemiadis and I developed a user-friendly interface on Linux for performing human-gait experiments with the Variable Stiffness Treadmill (VST) using C++ and Bash.
                    In short, the VST is a split-belt treadmill that can induce repeatable unilateral stiffness perturbations to the user walking on it, by dynamically decreasing the vertical ground stiffness of the left belt.
                </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                    <img src={terminals} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={flow_chart} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                </div>

                <span className="text-body my-3">
                    For each experiment that we want to conduct, a .txt file is created first that will describe each gait cycle of our experiment (desired stiffness of treadmill and timing/duration of perturbation).
                    Next, the user only has to execute a bash script and provide the names/locations of the input/output files.
                </span>

                <span className="text-body my-3">
                    In short, the bash scripts initiate all necessary commands for a Gait Experiment in separate evenly spaced terminals. Depending on the number of commands to be executed, equal number of terminals will be opened, evenly spaced throughout the monitor.
                    Meanwhile, the C++ code, along with a Makefile, encompasses various functionalities—user communication, linear track control, shared memory management, heel-strike detection, treadmill speed control, and datastream reception from Vicon.
                    The Makefile serves to compile and link all the C++ codes, ensuring the proper functioning of the system.
                </span>

                <span className="text-body my-3">
                    The video below demonstrates a typical gait experiment on the VST 1, where the analyzed software architecture
                    allows the experimenter to induce timely ground stiffness perturbations during walking.
                </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'  }}>
                    <video controls width="560" height="315" style={{ maxWidth: '100%', height: 'auto' }}>
                        <source src={vst_video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>


                <h3 className="fw-medium my-3">Impact:</h3>

                <span className="text-body my-3">
                   Although this project did not directly lead to any publications, it allowed multiple researchers in HORC lab to complete their gait experiments on the VST 1,
                    which are analyzed in the following publications:

                        <ul className="my-3">
                            <li>Chrysostomos Karakasis, Ioannis Poulakakis and Panagiotis Artemiadis, “An Energy-based Framework for Robust Dynamic Bipedal Walking over Compliant Terrain,” in ASME Journal of Dynamic Systems, Measurement, and Control, March 2024; 146(2): 021008. <a href="https://doi.org/10.1115/1.4064094" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> https://doi.org/10.1115/1.4064094</a> </li>
                            <li>Vaughn Chambers, Madison Johnson and Panagiotis Artemiadis, “Robot-assisted Targeted Gait Training,” in Journal of Kinesiology and Exercise Sciences, 105 (34): 11-22, 2024. <a href="https://jkes.eu/resources/html/article/details?id=614540&language=en" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> 10.5604/01.3001.0053.9679</a></li>
                            <li>Charikleia Angelidou and Panagiotis Artemiadis, “On Intuitive Control of Ankle-Foot Prostheses: A Sensor Fusion-based Algorithm for Real-Time Prediction of Transitions to Compliant Surfaces,” In the Proc. of the 2023 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), Detroit, MI, USA, pp. 2122-2127, 2023. <a href="https://doi.org/10.1109/IROS55552.2023.10341783" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> https://doi.org/10.1109/IROS55552.2023.10341783</a></li>
                            <li>Chrysostomos Karakasis, Robert Salati and Panagiotis Artemiadis, “Adjusting the Quasi-Stiffness of an Ankle-Foot Prosthesis Improves Walking Stability during Locomotion over Compliant Terrain,” In the Proc. of the 2023 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), Detroit, MI, USA, pp. 2140-2145, 2023. <a href="https://doi.org/10.1109/IROS55552.2023.10342344" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> https://doi.org/10.1109/IROS55552.2023.10342344</a></li>
                            <li>Charikleia Angelidou and Panagiotis Artemiadis, “On Predicting Transitions to Compliant Surfaces in Human Gait via Neural and Kinematic Signals,” in IEEE Transactions on Neural Systems and Rehabilitation Engineering, 31:2214-2223, 2023. <a href="https://doi.org/10.1109/TNSRE.2023.3272355" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> 10.1109/TNSRE.2023.3272355</a></li>
                            <li>Vaughn Chambers, Panagiotis Artemiadis, “A Model-Based Analysis of The Effect of Repeated Unilateral Low Stiffness Perturbations on Human Gait: Toward Robot-Assisted Rehabilitation,” IEEE International Conference on Robotics and Automation (ICRA), London, United Kingdom, pp. 12631-12637, 2023. <a href="https://doi.org/10.1109/ICRA48891.2023.10160224" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> https://doi.org/10.1109/ICRA48891.2023.10160224</a></li>
                            <li>Vaughn Chambers and Panagiotis Artemiadis, “Using robot-assisted stiffness perturbations to evoke aftereffects useful to post-stroke gait rehabilitation,” in Frontiers in Robotics and AI, 9, 2023. <a href="https://doi.org/10.3389/frobt.2022.1073746" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> https://doi.org/10.3389/frobt.2022.1073746</a></li>
                            <li>Bradley Hobbs and Panagiotis Artemiadis, “A Systematic Method for Outlier Detection in Human Gait Data,” in the 2022 IEEE 17th International Conference on Rehabilitation Robotics (ICORR), p. 1-6, 2022. <a href="https://doi.org/10.1109/ICORR55369.2022.9896411" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> 10.1109/ICORR55369.2022.9896411</a></li>
                            <li>Vaughn Chambers and Panagiotis Artemiadis, “Repeated Robot-assisted Unilateral Stiffness perturbations Result in Significant Aftereffects Relevant to Post-Stroke Gait Rehabilitation,” in 2022 IEEE International Conference on Robotics and Automation (ICRA), p. 5426-5433, 2022. <a href="https://doi.org/10.1109/ICRA46639.2022.9812323" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> 10.1109/ICRA46639.2022.9812323</a></li>
                        </ul>
                  </span>

                <h3 className="fw-medium my-3">Detailed Information:</h3>

                <span className="text-body my-3">
                    A github repository exists, but remains private for the moment.
                    {/*<a href="https://github.com/HORC-Lab/VST_architecture/tree/main" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> here</a>.*/}
                </span>

            </div>
        </div>
    )
}

export default VSTArchitecture;