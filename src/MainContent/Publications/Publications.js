import React, { useState, useEffect } from "react";
import BibtexParser from "bibtex-parse-js";

function Publications() {
    const [journalCounter, setJournalCounter] = useState(3);
    const [conferenceCounter, setConferenceCounter] = useState(4);
    const [citations, setCitations] = useState([]);

    useEffect(() => {
        // Define your BibTeX string here
        const bibTeXString = `
@article{chambers2023variable,
  author={Vaughn Chambers, Bradley Hobbs, William Gaither, Zachary The, Anthony Zhou, Chrysostomos Karakasis, and Panagiotis Artemiadis},
  booktitle={ASME Journal of Mechanisms and Robotics},
  title={The Variable Stiffness Treadmill (VST) 2.0: Development and Validation of a Unique Tool to
Investigate Locomotion on Compliant Terrains},
  volume={},
  year={2023},
  note={Under Review}
}

@inproceedings{karakasis2023f,
  author={Chrysostomos Karakasis, Robert Salati, and Panagiotis Artemiadis},
  booktitle={2023 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  title={Adjusting the Quasi-Stiffness of an Ankle-Foot Prosthesis Improves Walking Stability during Locomotion over Compliant Terrain},
  year={2023},
  volume={},
  number={},
  pages={2140-2145},
  keywords={Legged locomotion;Instruments;Green products;Robustness;Safety;Admittance;Standards},
  doi={10.1109/IROS55552.2023.10342344}}

@article{karakasis2023energy,
  author = {Chrysostomos Karakasis, Ioannis Poulakakis, and Panagiotis Artemiadis},
  title = "An Energy-Based Framework for Robust Dynamic Bipedal Walking Over Compliant Terrain",
  booktitle = {Journal of Dynamic Systems, Measurement, and Control},
  pages = {1-12},
  year = {2023},
  month = {11},
  abstract = "{Bipedal locomotion over compliant terrain is an important and largely underexplored problem in the robotics community. Although robot walking has been achieved on some non-rigid surfaces with existing control methodologies, there is a need for a systematic framework applicable to different bipeds that enables stable locomotion over various compliant terrains. In this work, a novel energy-based framework is proposed that allows the dynamic locomotion of bipeds across a wide range of compliant surfaces. The proposed framework utilizes an extended version of the 3D Dual Spring-Loaded Inverted Pendulum (Dual-SLIP) model that supports compliant terrains, while a bioinspired controller is employed to regulate expected perturbations of extremely low ground-stiffness levels. An energy-based methodology is introduced for tuning the bioinspired controller to enable dynamic walking with robustness to a wide range of low ground-stiffness one-step perturbations. The proposed system and controller are shown to mimic the vertical Ground Reaction Force (GRF) responses observed in human walking over compliant terrains. Moreover, they succeed in handling repeated unilateral stiffness perturbations under specific conditions. This work can advance the field of biped locomotion by providing a biomimetic method for generating stable human-like walking trajectories for bipedal robots over various compliant surfaces. Furthermore, the concepts of the proposed framework could be incorporated into the design of controllers for lower-limb prostheses with adjustable stiffness to improve their robustness over compliant surfaces.}",
  issn = {0022-0434},
  doi = {10.1115/1.4064094},
  url = {https://doi.org/10.1115/1.4064094},
  eprint = {https://asmedigitalcollection.asme.org/dynamicsystems/article-pdf/doi/10.1115/1.4064094/7060193/ds-23-1181.pdf},
}

@inproceedings{karakasis2022,
  author={Chrysostomos Karakasis, Ioannis Poulakakis, and Panagiotis Artemiadis},
  booktitle={2022 30th Mediterranean Conference on Control and Automation (MED)},
  title={Robust Dynamic Walking for a 3D Dual-SLIP Model under One-Step Unilateral Stiffness Perturbations: Towards Bipedal Locomotion over Compliant Terrain},
  year={2022},
  volume={},
  number={},
  pages={969-975},
  doi={10.1109/MED54222.2022.9837236}
}

@article{karakasis2021real,
  title={Real-time kinematic-based detection of foot-strike during walking},
  author={Chrysostomos Karakasis and Panagiotis Artemiadis},
  booktitle={Journal of Biomechanics},
  pages={110849},
  year={2021},
  publisher={Elsevier}
}

@inproceedings{karakasis2021f,
  title={F-VESPA: A Kinematic-based Algorithm for Real-time Heel-strike Detection During Walking},
  author={Chrysostomos Karakasis and Panagiotis Artemiadis},
  booktitle={2021 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  pages={5098--5103},
  year={2021},
  organization={IEEE}
}


@inproceedings{karakasis2020exploiting,
  title={Exploiting the SoC FPGA Capabilities in the Control Architecture of a Quadruped Robot},
  author={Chrysostomos Karakasis, Konstantinos Machairas, Charalampos Marantos, Iosif S. Paraskevas, Evangelos Papadopoulos, and Dimitrios Soudris},
  booktitle={2020 IEEE/ASME International Conference on Advanced Intelligent Mechatronics (AIM)},
  pages={501--507},
  year={2020},
  organization={IEEE},
  url={https://ieeexplore.ieee.org/document/9159012}
}
      // Add more BibTeX entries as needed
    `;

        console.log("Raw BibTeX Data:", bibTeXString);

        const parsedData = BibtexParser.toJSON(bibTeXString);
        console.log("Parsed Data:", parsedData);

        // Sort citations by year (latest to oldest)
        // parsedData.sort((a, b) => b.fields.year - a.fields.year);
        console.log("Sorted Data:", parsedData);

        setCitations(parsedData);
        // Add this line to log the updated citations array
        console.log("Updated Citations:", citations);
    }, []);

    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <h1 className="fw-bold">Publications</h1>
                <div style={{ marginBottom: "1em" }} /> {/* Empty line */}

                <div className="container d-flex flex-wrap justify-content-center">
                    {/* Display Journal Publications */}
                    <div>
                        <h2 className="text-center">Journal Publications</h2>
                        <div style={{ marginBottom: "1em" }} /> {/* Empty line */}

                        {citations
                            .filter((citation) => citation.entryType === "article")
                            .map((citation, index) => (
                                <div key={citation.citationKey}>
                                    <p> {`[J${journalCounter - index}] `} <span dangerouslySetInnerHTML={{ __html: citation.entryTags.author.replace(/Chrysostomos Karakasis/g, '<strong>Chrysostomos Karakasis</strong>') }} />, "<strong>{citation.entryTags.title}</strong>", in {citation.entryTags.booktitle}, {citation.entryTags.year}. </p>
                                    {/*<p>Title: {citation.entryTags.title}</p>*/}
                                    {/*<p>Year: {citation.entryTags.year}</p>*/}
                                    {/* Add more fields as needed */}
                                </div>
                            ))}
                    </div>
                    <div style={{ marginBottom: "1em" }} /> {/* Empty line */}

                    {/* Display Conference Publications */}
                    <div>
                        <h2 className="text-center">Conference Publications</h2>
                        <div style={{ marginBottom: "1em" }} /> {/* Empty line */}

                        {citations
                            .filter((citation) => citation.entryType === "inproceedings")
                            .map((citation,index) => (
                                <div key={citation.citationKey}>
                                    <p> {`[C${conferenceCounter - index}] `} <span style={{ fontWeight: 500 }} dangerouslySetInnerHTML={{ __html: citation.entryTags.author.replace(/Chrysostomos Karakasis/g, '<strong>Chrysostomos Karakasis</strong>') }} />, "<strong>{citation.entryTags.title}</strong>", in {citation.entryTags.booktitle}. </p>
                                    {/*<p>Title: {citation.entryTags.title}</p>*/}
                                    {/*<p>Year: {citation.entryTags.year}</p>*/}
                                    {/* Add more fields as needed */}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Publications;
