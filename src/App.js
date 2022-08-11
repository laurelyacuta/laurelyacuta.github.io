import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Home from './pages/home';
import CV from './pages/cv';
import Publications from './pages/research/publications';
import ResearchApplied from "./pages/research/research-applied";
import Teaching from './pages/teaching';
import AboutMe from "./pages/about-me";
import Footer from "./components/footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <HashRouter>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/cv" element={<CV/>}/>
          <Route exact path="/publications" element={<Publications/>}/>
          <Route exact path="/research-applied" element={<ResearchApplied/>}/>
          <Route exact path="/teaching" element={<Teaching/>}/>
          <Route exact path="/about-me" element={<AboutMe/>}/>
        </Routes>
      </HashRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
