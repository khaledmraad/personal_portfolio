import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import ItsMe from './Components/ItsMe/ItsMe';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
import Interests from './Components/Intrests/Interests';
import Projects from './Components/Projects/Projects';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <div className=" flex justify-center items-center">
      <div className="w-2/5	">
      <Header></Header>
      <ItsMe></ItsMe>
      <Skills></Skills>
      <Education></Education>
      <Interests></Interests>
      <Projects></Projects>
      <ContactMe></ContactMe>
      <Footer></Footer>
      </div>
    </div>
    </>
  );
}

export default App;
