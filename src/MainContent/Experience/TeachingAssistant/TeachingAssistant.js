function TeachingAssistant() {
    return (
        <div>
            <div className="container d-flex flex-column">

                <h2 className="fw-bold m-3">Teaching Assistant</h2>

                <span className="text-body m-3">
                During the last year of by diploma studies, I had the pleasure to act as a teaching assistant in two lab courses of the Microprocessors Laboratory and Digital Systems Lab
                <a href="https://microlab.ntua.gr/" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px' }}> (MicroLab)</a>
                , providing support in question resolving, as well as examining the students' assignments and comprehension of the theory lectured.
                </span>

                <span className="text-body m-1">
                    <ul className="">
                      <li>
                        <strong>Digital VLSI Systems</strong> <span>(Graduate level course)</span>
                      </li>
                      <li>
                        <strong>Microprocessors Laboratory</strong> <span>(Undergraduate level course)</span>
                      </li>
                    </ul>
                 </span>

                <span className="text-body m-3">
                    Moreover, I was involved as an assistant in numerous events of the H2020 Project FabSpace 2.0, organized by MicroLab in the National Technical University of Athens.
                </span>
            </div>
        </div>
    )
}

export default TeachingAssistant;