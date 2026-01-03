import { useEffect } from "react";

const INSTAGRAM_POSTS = [
    "https://www.instagram.com/p/DPEuq6xD4PB/",
    "https://www.instagram.com/p/DNOm54lIrZS/",
    "https://www.instagram.com/p/DM7XBx9tuPR/",
    "https://www.instagram.com/p/DLTz593Ovga/",
    "https://www.instagram.com/p/DLFyi-3x-5w/",
    "https://www.instagram.com/p/DLDIU0buyUT/",
    "https://www.instagram.com/p/DLAjhqGt7yB/",
    "https://www.instagram.com/p/DK_GCCdttlL/",
    "https://www.instagram.com/p/C1o2OR-idbk/",
];

function Ranking() {
    useEffect(() => {
        if (!window.instgrm) {
            const script = document.createElement("script");
            script.src = "https://www.instagram.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
        } else {
            window.instgrm.Embeds.process();
        }
    }, []);

    return (
        <div>
            <div className="container d-flex flex-column px-5">
                <h2 className="fw-bold my-3">Eating and Ranking Food</h2>

                {/* Fun foodie intro */}
                <p className="text-body my-2">
                    I’m a certified foodie who <strong>ranks literally everything I eat</strong>.
                    If there’s food involved, chances are it’s already been judged, rated,
                    and mentally compared to something else. I use{" "}
                    <a
                        href="https://beliapp.co/app/chryskarak"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fw-bold text-decoration-none"
                    >
                        Beli
                    </a>{" "}
                    to keep my rankings honest (and my standards high).
                </p>

                {/* Instagram posts */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "1rem",
                    }}
                >
                    {INSTAGRAM_POSTS.map((url, index) => (
                        <div
                            key={index}
                            dangerouslySetInnerHTML={{
                                __html: `
                  <blockquote
                    class="instagram-media"
                    data-instgrm-permalink="${url}"
                    data-instgrm-version="14"
                    style="max-width:320px;width:100%;"
                  ></blockquote>
                `,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Ranking;
