import refugee_photo from "./img/refugee_camp.jpg";
import unicycle from "./img/unicyle.jpg"
import juggling from "./img/ethnikos_kipos_circus.jpg"
// import acrobatics from "./img/acrobatics.jpg"
function Circus() {
    return (
        <div>
            <div className="container d-flex flex-column px-5">

                <h2 className="fw-bold mY-3">Circus, Clowning and Acrobatics</h2>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <iframe className="m-3" width="560" height="315" src="https://www.youtube.com/embed/on04rI9Si7A?si=5SEHXWJP9qwj_f8j" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <span className="text-body my-3">
                    During the second year of my undergraduate studies, I felt a strong urge to focus on aspects of my life besides higher education and
                    as a result I decided to enroll in the circus school of Athens <a href="https://www.instagram.com/circusdayz/" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px'}}> "Circus Dayz"</a>, where I studied for three years the circus arts of juggling,
                    acrobatics and equilibristics (unicycling, rola bola). Soon after, I became a member of the school's exhibition group and as a result I participated
                    in numerous circus performances and workshops mainly for children. Additionally, I volunteered in the Athens Circus Festival 2015/2016 and Santorini
                    Circus Festival 2016, aiming to familiarize myself with the arduousness of organizing such a massive international event.
                    Concurrently, I personally coordinated and conducted a juggling workshop for amateur actors as part of a Theater Festival in Crete 2016, where I
                    also instructed them how to build juggling props using everyday items. Undoubtedly, the most mesmerizing experience of all would be when I was part
                    of a circus performance in a refugee camp, where I had the honor to entertain refugees and briefly alleviate their stress.
                    That experience stigmatized my life, as I witnessed the true impact I could make to someone's life, and hence encouraged me to attend a
                    Hospital Clowning Workshop, as well as a three-month Theatrical Clowning Workshop, in order to delve into clowning techniques.

                    {/*In parallel, I was fortunate enough to discover new cultures and boost my social skills, through non-formal education oriented activities, during my participation in two Erasmus Plus Youth Exchanges in Latvia and Poland (2017). */}
                    {/*In addition, I took part in an educational course of the Board of European Students of Technology (BEST), held at the Delft University of Technology in Netherlands (2018), which provided me with valuable insights on current research and engineering in swarm robotics. */}
                    {/*Through these memorable experiences, I managed to visit four foreign countries, where above all I made some great friends from all around the world, while stepping out of my comfort zone made me independent and broadminded.                */}
                </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                    <img src={refugee_photo} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={unicycle} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={juggling} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <iframe className="m-3" width="560" height="315" src="https://www.youtube.com/embed/pksRYbJR4BM?si=ftfsD0tzC-En4Kq9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Circus;