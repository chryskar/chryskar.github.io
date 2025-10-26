import './App.css';
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from "./MainContent/Home/Home";
import Experience from "./MainContent/Experience/Experience";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hobbies from "./MainContent/Hobbies/Hobbies";
import Diploma from "./MainContent/Experience/Diploma/Diploma";
import TeachingAssistant from "./MainContent/Experience/TeachingAssistant/TeachingAssistant";
import JnJIntern from "./MainContent/Experience/JnJIntern/JnJIntern"
import JnJ from "./MainContent/Experience/JnJ/JnJ"
import ResearchAssistant from "./MainContent/Experience/ResearchAssistant/ResearchAssistant";
import JazzSaxophone from "./MainContent/Hobbies/JazzSaxophone/JazzSaxophone";
import Circus from "./MainContent/Hobbies/Circus/Circus";
import Layout from "./Layout";
import Publications from "./MainContent/Publications/Publications";
import CollectingRecords from "./MainContent/Hobbies/CollectingRecords/CollectingRecords";
import PhdUD from "./MainContent/Experience/PhdUD/PhdUD";
import Projects from "./MainContent/Projects/Projects";
import MasterThesis from "./MainContent/Projects/MasterThesis/MasterThesis";
import VSTArchitecture from "./MainContent/Projects/VSTArchitecture/VSTArchitecture";
import FVESPA from "./MainContent/Projects/FVESPA/FVESPA";
import DualSLIP from "./MainContent/Projects/DualSLIP/DualSLIP";
import AnkleProsthesis from "./MainContent/Projects/AnkleProsthesis/AnkleProsthesis";
import LineTrackingRobot from "./MainContent/Projects/LineTrackingRobot/LineTrackingRobot";
import BestZebroSwarm from "./MainContent/Projects/BestZebroSwarm/BestZebroSwarm";
import Duisburg from "./MainContent/Projects/Duisburg/Duisburg";
import PersonalWebpage from "./MainContent/Projects/PersonalWebpage/PersonalWebpage";
import Travel from "./MainContent/Hobbies/Travel/Travel";
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
                            <Route path="/experience/jnj" element={<JnJ />} />
                            <Route path="/experience/phd-ud" element={<PhdUD />} />
                            <Route path="/experience/teaching-assistant" element={<TeachingAssistant />} />
                            <Route path="/experience/diploma" element={<Diploma />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/projects/master-thesis" element={<MasterThesis />} />
                            <Route path="/projects/vst-architecture" element={<VSTArchitecture />} />
                            <Route path="/projects/f-vespa" element={<FVESPA />} />
                            <Route path="/projects/line-tracking-robot" element={<LineTrackingRobot />} />
                            <Route path="/projects/best-zebro-swarm" element={<BestZebroSwarm />} />
                            <Route path="/projects/duisburg" element={<Duisburg />} />
                            <Route path="/projects/personal-webpage" element={<PersonalWebpage />} />
                            <Route path="/projects/dual-slip" element={<DualSLIP />} />
                            <Route path="/projects/ankle-prosthesis" element={<AnkleProsthesis />} />
                            <Route path="/hobbies" element={<Hobbies />} />
                            <Route path="/hobbies/circus" element={<Circus />} />
                            <Route path="/hobbies/jazz-saxophone" element={<JazzSaxophone />} />
                            <Route path="/hobbies/collecting-records" element={<CollectingRecords />} />
                            <Route path="/hobbies/travelling" element={<Travel />} />
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
