import './Home.css'
import ChrisakosImage from './karakasis_2022.jpg'

function Home () {
    return (
        <div>
            <div className="d-flex justify-content-center mx-5">
                <div className="d-flex flex-column flex-xl-row justify-content-center align-items-center" style={{maxWidth:  '1536px'}}>
                    {/* Image */}
                    <img src={ChrisakosImage} alt="Chrisakos img" className="main-image m-3"></img>
                    {/* Details */}
                    <div className="d-flex flex-column justify-content-center m-3">
                        <h1 className="fw-bold">Chrysostomos Karakasis</h1>
                        <span>To les? consectetur adipiscing elit. Sed pharetra et leo in auctor. Sed dolor purus, dignissim a porttitor quis, fermentum eget diam. Duis sed neque eu nisi gravida dictum. Duis cursus lacinia purus ut varius. Pellentesque leo arcu, laoreet in luctus vel, posuere non elit. Nunc condimentum id lectus in varius. Ut nec quam vel mi blandit vehicula at at ex. Etiam luctus porttitor sapien, non hendrerit erat efficitur id. Praesent rhoncus eget arcu in consequat. Sed posuere tincidunt magna, non mattis diam pretium nec. Vestibulum nec feugiat turpis, et consequat nibh. </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;