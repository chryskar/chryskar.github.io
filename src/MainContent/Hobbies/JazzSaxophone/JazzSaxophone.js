function JazzSaxophone() {
    return (
        <div>
            <div className="container d-flex flex-column">

                <h2 className="fw-bold m-3">Jazz Saxophonist at the NTUA Conservatory</h2>

                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <iframe className="m-3" width="560" height="315" src="https://www.youtube.com/embed/5OgnfzQ01m4?si=GT9JYG4CR1_YUuHA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <span className="text-body m-3">
                    As a sophomore I started taking music lessons, despite my age and complete lack of experience. Today, I have learned how to play the saxophone and occasionally perform jazz pieces with friends privately or in jam sessions.
                </span>

            </div>
        </div>
    )
}

export default JazzSaxophone;