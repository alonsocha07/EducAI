import "../css/App.css";
import { Header } from "../components/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Chatgpt } from "./Chatgpt";
import { Dalle2 } from "./Dalle2";
import Footer from "../components/Footer";
import {PLaygroundContainer} from "../components/PLaygroundContainer";
function App() {
  return (
    <>
      <HashRouter>
        <Header></Header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/chatgpt" element={<Chatgpt />} >
              <Route path=":slug" element={<PLaygroundContainer/>} />  
            </Route>
            
            <Route path="/dalle2" element={<Dalle2 />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
