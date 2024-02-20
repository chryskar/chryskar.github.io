import personal_webpage from "../img/personal_webpage.png";

function PersonalWebpage() {
    return (
        <div>
            <div className="container d-flex flex-column">

                <h2 className="fw-bold m-3">Personal Webpage</h2>

                <img src={personal_webpage} alt="Logo 2" className="sd-block mx-auto section-logo m-2" style={{ width: '600px', height: 'auto', display: 'block', margin: 'auto'}}/>

                <span className="text-body m-3">
                    I collaborated with my good friend
                    <a href="https://github.com/damik3" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> Michalis Vargiamis </a>
                    to bring my personal webpage to life, and it has been an exciting journey.
                    We utilized a combination of HTML, CSS, and JavaScript to design and structure the webpage, ensuring a visually appealing and user-friendly experience.
                    GitHub Pages became our chosen hosting platform, allowing seamless integration with the Git repository for version control.
                    The simplicity and efficiency of Jekyll, a static site generator, streamlined the content management process.
                    Additionally, we incorporated responsive design principles to ensure the webpage's adaptability across various devices.
                    The collaborative effort between Michalis and me, along with the utilization of these tools, has not only made the development process enjoyable but has also resulted in a personalized and professional online presence at
                    <a href="https://chryskar.github.io/" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> https://chryskar.github.io/</a>.
                </span>

                <span className="text-body m-3">
                    The github repository can be found
                    <a href="https://github.com/chryskar/chryskar.github.io" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> here</a>.
                </span>

            </div>
        </div>
    )
}

export default PersonalWebpage;