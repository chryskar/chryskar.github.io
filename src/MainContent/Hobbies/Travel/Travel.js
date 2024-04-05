import polignano from "./img/polignano.jpg";
import poland from "./img/poland.jpg"
import lithuania from "./img/lithuania_nida_cross.jpg"
import lithuania_raganu from "./img/lithuania_raganu_kalnas.jpg"
import berlin_erasmus_plus from "./img/berlin_erasmus_plus.jpg"
import chrys_backpack from "./img/chrys_backpack.jpeg"
import amsterdam from "./img/amsterdam.jpg"
function Travel() {
    return (
        <div>
            <div className="container d-flex flex-column px-5">

                <h2 className="fw-bold mY-3">Travelling</h2>

                <span className="text-body my-3">
                    Throughout my life, I have been fortunate enough to travel quite a lot around the world. Basides travelling for pleasure, I also managed to discover
                    new cultures and boost my social skills, through non-formal education oriented activities, during my participation in two Erasmus Plus Youth Exchanges in Latvia and Poland (2017).
                    Through these memorable experiences, I managed to visit four foreign countries, where above all I made some great friends from all around the world,
                    while stepping out of my comfort zone made me independent and broadminded.

                    <br/>
                    So far, I have been to eleven countries in total (France, Italy, Spain, Austria, Germany, Netherlands, Poland, Lithuania, Latvia, Tynissia), counting the USA, but I am always eager to explore new places.

               </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                    <img src={polignano} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={poland} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={lithuania} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={lithuania_raganu} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={berlin_erasmus_plus} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={chrys_backpack} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={amsterdam} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />

                </div>

            </div>
        </div>
    )
}

export default Travel;