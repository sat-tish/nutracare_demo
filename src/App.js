import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import BlogPage from './Components/Pages/BlogPage';
import SearchSelection from './Components/SearchSelection/SearchSelection';
import SelectionAllCenters from './Components/SelectionAllCenters/SelectionAllCenters';
import ProfessionalInfo from './Components/ProfessionalInfo/ProfessionalInfo';

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
       <Route path='/' element= {<Home/>}/>
       <Route path='/contact' element= {<Contact/>}/>
       <Route path='/about' element= {<About/>}/>
       <Route path='/blogs' element= {<BlogPage/>}/>
       <Route path='/search-selection' element= {<SearchSelection/>}/>
       <Route path='/selection-all-centers' element= {<SelectionAllCenters/>}/>
       <Route path='/professional-info' element= {<ProfessionalInfo/>}/>
    </Routes>
    <Footer/>
    </>

  );
}

export default App;
