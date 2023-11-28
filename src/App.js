import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from "./MainContent/Home/Home";
import Experiences from "./MainContent/Experiences/Experiences";
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./MainContent/Projects/Projects";
import Hobbies from "./MainContent/Hobbies/Hobbies";
import GlobalEngineeringAcademy from "./MainContent/Experiences/GlobalEngineeringAcademy/GlobalEngineeringAcademy";
import TechInstitute from "./MainContent/Experiences/TechInstitute/TechInstitute";
import MechroboticsSolutions from "./MainContent/Experiences/MechroboticsSolutions/MechroboticsSolutions";
import GoldenSpanEngineering from "./MainContent/Projects/GoldenSpanEngineering/GoldenSpanEngineering";
import VoltLogicSolutions from "./MainContent/Projects/VoltLogicSolutions/VoltLogicSolutions";
import JazzSaxophone from "./MainContent/Hobbies/JazzSaxophone/JazzSaxophone";
import Layout from "./Layout";
import GlobalJokingAcademy from "./MainContent/Experiences/GlobalJokingDirectory/GlobalJokingDirectory";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="site-container">
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/experiences" element={<Experiences />} />
                            <Route path="/experiences/global-engineering-academy" element={<GlobalEngineeringAcademy />} />
                            <Route path="/experiences/tech-institute" element={<TechInstitute />} />
                            <Route path="/experiences/mechrobotics-solutions" element={<MechroboticsSolutions />} />
                            <Route path="/experiences/global-joking-academy" element={<GlobalJokingAcademy />} />
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
