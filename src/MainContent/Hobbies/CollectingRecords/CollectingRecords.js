import LeftRight from './img/left_right_evans.jpg';
import ForYou from './img/tatsuro_for_you.jpg';
import Sextet from './img/sextet.jpg';
import Bridge from './img/bridge_rollins.jpg';

function CollectingRecords() {
    return (
        <div>
            <div className="container d-flex flex-column">

                <h2 className="fw-bold m-3">Collecting Vinyl Records</h2>

                {/*<iframe className="m-3" width="560" height="315" src="https://www.youtube.com/embed/5OgnfzQ01m4?si=GT9JYG4CR1_YUuHA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>*/}

                <span className="text-body m-3">
                    Like many, I also believe in the superior quality of vinyl records, so you will often find me scavenging in record stores or low-balling people on Ebay.
                    <br />
                    <br />
                    Check out my collection on Discogs:
                    <a href="https://www.discogs.com/user/chrisfyt/collection" target="_blank" rel="noopener noreferrer" style={{marginRight: '0px' }}> https://www.discogs.com/user/chrisfyt/collection</a>.
                </span>

                <div className="container d-flex justify-content-center">
                    <div className="m-3">
                        <img src={LeftRight} alt="Record 1" style={{ height: '300px' }} />
                    </div>
                    <div className="m-3">
                        <img src={ForYou} alt="Record 2" style={{ height: '300px' }} />
                    </div>
                    <div className="m-3">
                        <img src={Sextet} alt="Record 3" style={{ height: '300px' }} />
                    </div>
                    <div className="m-3">
                        <img src={Bridge} alt="Record 3" style={{ height: '300px' }} />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CollectingRecords;