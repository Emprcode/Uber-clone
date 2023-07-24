import './App.css';
import { Footer } from './pages/Footer';
import { Header } from './pages/Header';
import { Hero } from './pages/Hero';
import { Hero1 } from './pages/Hero1';
import { Page3 } from './pages/Page3';
import { Page4 } from './pages/Page4';
import { Page5 } from './pages/Page5';
import { Page6 } from './pages/Page6';
// import { Page7 } from './pages/Page7';

function App() {
  return (
    <div className="">
   <Header/> 
   <Hero/>
   <Hero1/>
   <Page3/>
   <Page4/>
   <Page5/>
   <Page6/>
   {/* <Page7/> */}
   <Footer/>
    </div>
  );
}

export default App;
