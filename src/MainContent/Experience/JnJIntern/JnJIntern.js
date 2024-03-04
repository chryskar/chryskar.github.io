function JnJIntern() {
    return (
        <div>
            <div className="container d-flex flex-column">

                <h2 className="fw-bold m-3">Robotics and Controls Engineer Intern</h2>

                <h3 className="fw-medium m-3">Project and Technical Contributions</h3>

                <span className="text-body m-3">
                    Over the summer of 2022, I was fortunate to complete an internship at Johnson & Johnson Robotics and Digital Solutions, under the mentorship of Michael Dermksian and the supervision of Douglas Spencer Maughan.

                    <br/><br/>
                    During my internship, I designed, implemented, and evaluated a hard-stop handling method to prevent overloading in cable-driven continuum wrists.
                    The algorithm operated in the configuration-space, where a pair of admittance controllers calculated an appropriate set of position offsets for the two available degrees of freedom of the wrist.
                    Specifically, the following contributions were made:
                    <ul className="m-3">
                        <li>Tuning the models of the admittance controllers and validating the algorithm in simulation using MATLAB.</li>
                        <li>Implementing the algorithm in OOP C++ and contributed code to production C++ robotics code-base.</li>
                        <li>Testing on an actual wrist, yielding the desired behavior of active back-driving.</li>
                    </ul>

                </span>

                <h3 className="fw-medium m-3">Professional Growth and Collaborative Experience</h3>

                <span className="text-body m-3">
                    The internship was not only about technical skills but also about understanding the dynamics of working in a professional team. Key aspects of my professional growth included:
                    <ul className="m-3">
                        <li className="mb-3"><span className="fw-medium">Team Collaboration:</span> Regularly participating in team meetings, I learned the importance of collaborative brainstorming, shared problem-solving approaches, and Agile development methodologies.</li>
                        <li className="mb-3"><span className="fw-medium">Technical Skill Enhancement:</span> Refined software skills in MATLAB, C++ and shell scripting, while acquiring hands-on experience with industry-standard tools and best practices such as unit testing and Git version control.</li>
                        <li className="mb-3"><span className="fw-medium">Theoretical Skill Enhancement:</span> Studied both the modeling and the control of a redundant cable-driven robotic manipulator, including forward and inverse kinematics, differential kinematics, and transitioning between the joint and configuration space through Jacobian matrices. Delved into admittance control, which was an integral part of this project. Actively attended group studies on state estimation, focusing on Bayes, Kalman and Extended Kalman filters.</li>
                    </ul>
                </span>

                <h3 className="fw-medium m-3">Impact and Reflection</h3>

                <span className="text-body m-3">
                    This experience at Johnson & Johnson Robotics and Digital Solutions was transformative, providing me with a robust foundation in principles of medical robotics, especially in surgical robotics and automation. It honed my practical skills and prepared me for tackling complex engineering challenges in my future career.
                    Throughout my internship, the entire RC team cultivated a positive and collaborative working atmosphere, making every aspect of this experience truly enjoyable.

                </span>

            </div>
        </div>
    )
}

export default JnJIntern;