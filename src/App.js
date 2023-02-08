import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/Header';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Newsletter } from './components/NewsLetter';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
