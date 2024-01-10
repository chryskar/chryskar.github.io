import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from "./MainContent/Home/Home";
import Experience from "./MainContent/Experience/Experience";
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./MainContent/Projects/Projects";
import Hobbies from "./MainContent/Hobbies/Hobbies";
import GlobalEngineeringAcademy from "./MainContent/Experience/GlobalEngineeringAcademy/GlobalEngineeringAcademy";
import TechInstitute from "./MainContent/Experience/TechInstitute/TechInstitute";
import MechroboticsSolutions from "./MainContent/Experience/MechroboticsSolutions/MechroboticsSolutions";
import GoldenSpanEngineering from "./MainContent/Projects/GoldenSpanEngineering/GoldenSpanEngineering";
import VoltLogicSolutions from "./MainContent/Projects/VoltLogicSolutions/VoltLogicSolutions";
import JazzSaxophone from "./MainContent/Hobbies/JazzSaxophone/JazzSaxophone";
import Layout from "./Layout";
import GlobalJokingAcademy from "./MainContent/Experience/GlobalJokingDirectory/GlobalJokingDirectory";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="site-container">
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/experience/global-engineering-academy" element={<GlobalEngineeringAcademy />} />
                            <Route path="/experience/tech-institute" element={<TechInstitute />} />
                            <Route path="/experience/mechrobotics-solutions" element={<MechroboticsSolutions />} />
                            <Route path="/experience/global-joking-academy" element={<GlobalJokingAcademy />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/projects/goldenspan-engineering" element={<GoldenSpanEngineering />} />
                            <Route path="/projects/voltlogic-solutions" element={<VoltLogicSolutions />} />
                            <Route path="/hobbies" element={<Hobbies />} />
                            <Route path="/hobbies/jazz-saxophone" element={<JazzSaxophone />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </Layout>
                </div>
            </BrowserRouter>

        </>
    );
}

export default App;
