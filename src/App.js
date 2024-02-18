import './App.css';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from "./MainContent/Home/Home";
import Experience from "./MainContent/Experience/Experience";
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./MainContent/Projects/Projects";
import Hobbies from "./MainContent/Hobbies/Hobbies";
import Diploma from "./MainContent/Experience/Diploma/Diploma";
import TeachingAssistant from "./MainContent/Experience/TeachingAssistant/TeachingAssistant";
import JnJIntern from "./MainContent/Experience/JnJIntern/JnJIntern"
import ResearchAssistant from "./MainContent/Experience/ResearchAssistant/ResearchAssistant";
import GoldenSpanEngineering from "./MainContent/Projects/GoldenSpanEngineering/GoldenSpanEngineering";
import VoltLogicSolutions from "./MainContent/Projects/VoltLogicSolutions/VoltLogicSolutions";
import JazzSaxophone from "./MainContent/Hobbies/JazzSaxophone/JazzSaxophone";
import Layout from "./Layout";
import Publications from "./MainContent/Publications/Publications";
import CollectingRecords from "./MainContent/Hobbies/CollectingRecords/CollectingRecords";
import PhdUD from "./MainContent/Experience/PhdUD/PhdUD";

function App() {
    return (
        <>
            <HashRouter>
                <div className="site-container">
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/experience/research-assistant" element={<ResearchAssistant />} />
                            <Route path="/experience/jnj-intern" element={<JnJIntern />} />
                            <Route path="/experience/phd-ud" element={<PhdUD />} />
                            <Route path="/experience/teaching-assistant" element={<TeachingAssistant />} />
                            <Route path="/experience/diploma" element={<Diploma />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/projects/goldenspan-engineering" element={<GoldenSpanEngineering />} />
                            <Route path="/projects/voltlogic-solutions" element={<VoltLogicSolutions />} />
                            <Route path="/hobbies" element={<Hobbies />} />
                            <Route path="/hobbies/jazz-saxophone" element={<JazzSaxophone />} />
                            <Route path="/hobbies/collecting-records" element={<CollectingRecords />} />
                            <Route path="/publications" element={<Publications />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </Layout>
                </div>
            </HashRouter>

        </>
    );
}

export default App;
