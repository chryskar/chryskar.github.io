import basque from "./img/basque_cheesecake.jpg";
import steaks from "./img/steaks.jpg"
import ribeye from "./img/ribeye.jpg"
// import steak_closeup from "./img/steak_cut_tahoe.jpg"
import steak_tahoe from "./img/steak_tahoe.jpg"
import strip_closeup from "./img/strip_closeup.jpg"
import strip from "./img/strip.jpg"
import basque_closeup from "./img/basque_cheesecake_closeup.jpg"
import basque_lemon from "./img/basque_cheesecake_lemon.jpg"
import pizza_dough from "./img/pizza_dough.jpg"
import pizza_margherita from "./img/pizza_margherita.jpg"
import pizza_mortadela from "./img/pizza_mortadela.jpg"
import ramen from "./img/ramen.jpg"
import duck from "./img/thanksgiving_duck.jpg"
import ducks from "./img/thanksgiving_ducks.jpg"

function Travel() {
    return (
        <div>
            <div className="container d-flex flex-column px-5">

                <h2 className="fw-bold mY-3">Cooking</h2>

                <span className="text-body my-3">
                    In my free time I enjoy cooking for myself and friends. When I am not meal-prepping and measuring calories, you can find me cook steaks, pizza, pasta, basque cheesecake, etc., as well as traditional Greek dishes.

                    <br />

                </span>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                    <img src={steaks} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    {/* <img src={steak_closeup} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} /> */}
                    <img src={ribeye} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={steak_tahoe} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={strip} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={strip_closeup} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />

                    <img src={basque} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={basque_closeup} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={basque_lemon} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />

                    <img src={pizza_dough} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={pizza_margherita} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={pizza_mortadela} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />

                    <img src={ducks} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />
                    <img src={duck} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />

                    <img src={ramen} alt="Logo 2" className="section-logo m-2" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%' }} />



                </div>

            </div>
        </div>
    )
}

export default Travel;