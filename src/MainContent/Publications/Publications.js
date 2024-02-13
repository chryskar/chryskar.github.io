import React, { useState, useEffect } from "react";
import BibtexParser from "bibtex-parse-js";

function Publications() {
    const [journalCounter, setJournalCounter] = useState(3);
    const [conferenceCounter, setConferenceCounter] = useState(4);
    const [citations, setCitations] = useState([]);

    useEffect(() => {
        fetch("bibtex.bib")
            .then((response) => response.text())
            .then((bibTeXString) => {
                console.log("Raw BibTeX Data:", bibTeXString);

                const parsedData = BibtexParser.toJSON(bibTeXString);
                console.log("Parsed Data:", parsedData);

                // Sort citations by year (latest to oldest, if needed)
                // parsedData.sort((a, b) => b.fields.year - a.fields.year);
                console.log("Sorted Data:", parsedData);

                setCitations(parsedData);
            })
            .catch((error) => {
                console.error("Error fetching or parsing BibTeX data:", error);
                // Handle errors appropriately, e.g., display an error message
            });
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
