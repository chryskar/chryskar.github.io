import {Link} from "react-router-dom";

function Diploma() {
    return (
        <div>
            <div className="container d-flex flex-column">

                <h2 className="fw-bold m-3">Diploma (B.Sc. & M.Sc.) in Electrical and Computer Engineering</h2>

                <span className="text-body mx-3 my-2">
                    I received my diploma degree (B.Sc. & M.Sc.) from the School of Electrical and Computer Engineering (ECE) of the National Technical University of Athens (NTUA), in Greece, in 2019.
               </span>
                <span className="text-body mx-3 my-2">
                    During the first three years of my diploma studies, I explored the interdisciplinary curriculum of ECE, which equipped me with all the essential background to pursue any germane career.
                    Later on, I was captivated by the fields of Automatic Control and Computer Science, which led me to major in Electronics and Systems, where I acquainted myself with Computer Systems, Signal Processing, Control System Design and, of course, Robotics.
                </span>
                <span className="text-body mx-3 my-2">
                    In the end, I graduated with the highest honors (9.02/10 - Top 5%), after excelling in an extensive course load (64 courses in total), including four additional to my degree courses that further broadened my education.
                    I ranked 19th among the 290 ECE graduates of 2019 (Top 6%), while I was ranked 136th among the 250 ECE admitted students of 2013 (Top 55%).
                </span>
                <h3 className="fw-medium m-3">Selected Coursework</h3>

                <span className="text-body m-3">
                    <ul className="">
                        <li>Control Systems Design</li>
                        <li>Advanced Methods for Control Systems</li>
                        <li>Nonlinear Control systems</li>
                        <li>Neuro-Fuzzy Control</li>
                        <li>Robotics I: Analysis & Control</li>
                        <li>Robotics II: Intelligent Robotic Systems</li>
                        <li>Digital Signal Processing</li>
                        <li>Neural Networks</li>
                        <li>Embedded Systems Design</li>
                        <li>Digital VLSI Systems</li>
                        <li>Computer Architecture</li>
                        <li>Operating Systems</li>
                    </ul>
                 </span>

                <h3 className="fw-medium m-3">Master Thesis</h3>

                <span className="text-body m-3">
                    Amongst all the aforementioned courses, I would have to distinguish "Digital VLSI Systems" (Dimitrios Soudris & Kiamal Pekmestzi) of the
                    <a href="https://microlab.ntua.gr/" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> MicroLab</a>
                    , not only due to the fact that it introduced me to the intriguing and innovative concept of the FPGAs, but also for the reason that within its context,
                    I had the privilege to be selected from a pool of applicants for the workshop "Object oriented methods for the modeling of kinematical chains with
                    application to robotic and human walking", held in the University of Duisburg-Essen, Germany (2017).

                    Through this collaboration, I decided to realize my master thesis
                    <Link to="../projects/master-thesis" className="mb-3 clickable" style={{marginRight: '0px'}}>
                        <span className="fw-medium"> "Implementation of Quadruped Robot's Motion Control on SoC FPGA"</span>
                    </Link>
                    , in the context of a cooperation between the <a href="https://microlab.ntua.gr/" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px' }}> (MicroLab)</a> and the Control Systems Lab <a href="https://csl-ep.mech.ntua.gr/" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px' }}> (CSL-EP)</a>.
                </span>

            </div>
        </div>
    )
}

export default Diploma;