import './Footer.css'
import PdfCV from './CV_Karakasis_2024.pdf';  // Provide the correct path to your CV PDF file
import 'academicons/css/academicons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    return (
        <div>
            <div className={"d-flex justify-content-center align-items-center my-5"}>
                <a href="mailto:chryskarak@outlook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                    <i className="fas fa-envelope huge-icon" style={{ fontSize: '60px' }} ></i>
                </a>
                <a href="https://github.com/chryskar" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                    <i className="fab fa-github big-icon" style={{ fontSize: '60px' }} ></i>
                </a>
                <a href="https://www.linkedin.com/in/chrys-karakasis" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                    <i className="fab fa-linkedin huge-icon" style={{ fontSize: '60px' }} ></i>
                </a>
                <a href="https://scholar.google.com/citations?user=hFi0LsIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                    <i className="fab fa-google-scholar huge-icon" style={{ fontSize: '60px' }} ></i>
                    {/*<img src={GoogleScholarLogo} alt="GoogleScholar logo" className="footer-logo mx-2 clickable"></img>*/}
                </a>
                <a href={PdfCV} aria-label="cv" style={{ color: 'black' }}>
                    <i className="ai ai-cv-square huge-icon" style={{ fontSize: '60px' }} ></i>
                </a>
            </div>
        </div>
    )
}

export default Footer;