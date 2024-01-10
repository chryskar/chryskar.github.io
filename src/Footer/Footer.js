import './Footer.css'
import GithubLogo from './img/github-mark.png'
import LinkedinLogo from './img/LI-In-Bug.png'
import MailLogo from './img/mail_FILL0_wght400_GRAD-25_opsz24.svg'
import GoogleScholarLogo from './img/google-scholar.svg'
function Footer() {
    return (
        <div>
            <div className={"d-flex justify-content-center align-items-center my-5"}>
                <a href="mailto:chryskarak@outlook.com" target="_blank" rel="noopener noreferrer">
                    <img src={MailLogo} alt="Mail logo" className="footer-logo mx-2 clickable"></img>
                </a>
                <a href="https://github.com/chryskar" target="_blank" rel="noopener noreferrer">
                    <img src={GithubLogo} alt="Github logo" className="footer-logo mx-2 clickable"></img>
                </a>
                <a href="https://www.linkedin.com/in/chrys-karakasis" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedinLogo} alt="Linkedin logo" className="footer-logo mx-2 clickable"></img>
                </a>
                <a href="https://scholar.google.com/citations?user=hFi0LsIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                    <img src={GoogleScholarLogo} alt="GoogleScholar logo" className="footer-logo mx-2 clickable"></img>
                </a>
            </div>
        </div>
    )
}

export default Footer;