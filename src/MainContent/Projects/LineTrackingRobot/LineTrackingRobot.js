import track from "./img/track2.png";
import side_view_robot from "./img/side_view_robot.jpg"
import flow_chart from "./img/FlowChart.png"
function LineTrackingRobot() {
    return (
        <div>
            <div className="container d-flex flex-column">

                <h2 className="fw-bold m-3">Line Tracking Robot (MEEG 667: Digital Control)</h2>

                <h3 className="fw-medium m-3">Project Scope and Achievements</h3>

                <span className="text-body m-3">
                    For the final project of the graduate class "MEEG 667: Digital Control", we had to build and program a line-following robot to track the black line trajectory shown in the figure below.
                    We built our robot using the two-wheeled turtle bot chassis fitted with three line tracking sensors to detect the black line trajectory.
                    We selected the RomeoV2 as our choice of microcontroller.
                    In addition to that, we also describe the control logic that we used to program the microcontroller, using Arduino, such that the robot reaches the destination by following the black line trajectory.
                    The robot's control logic involves LED state changes in response to sensor detection of black lines and white spaces.
                    Specific movements, such as straight motion, right turns, and considerations for crossroads and gaps, are determined based on the sensor inputs in a scenario-dependent manner.
                </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <img src={track} alt="Logo 2" className="section-logo m-2" style={{ height: '300px', width: 'auto' }} />
                    <img src={side_view_robot} alt="Logo 2" className="section-logo m-2" style={{ height: '300px', width: 'auto' }} />
                    <img src={flow_chart} alt="Logo 2" className="section-logo m-2" style={{ height: '300px', width: 'auto' }} />
                </div>



                <span className="text-body m-3">
                    Although our robot didn't achieve the highest speed in the class (ranking as the second fastest), it demonstrated exceptional consistency by successfully completing all three trials.
                    Despite the potential to increase speed, we prioritized avoiding slipping as a key objective, opting for a "medium" speed. You can watch how we did in the attached video.
                </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <iframe className="m-3" width="560" height="315" src="https://www.youtube.com/embed/Ckq6fkE4RpM?si=usBS4MNPxgI5Q7ab" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <h3 className="fw-medium m-3">Detailed Information:</h3>

                <span className="text-body m-3">
                    The github repository can be found
                    <a href="https://github.com/chryskar/digital_control_final_project" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> here</a>.
                </span>

            </div>
        </div>
    )
}

export default LineTrackingRobot;