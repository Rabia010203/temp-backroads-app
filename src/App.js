import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { Tours } from "./components/Tours";


function App() {
  return (
   <>
    <Navbar />
    <About/>
    <Services/>
    <Tours/>
   <Footer/>
   
   </>
  );
}

export default App;
