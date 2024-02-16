import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { analytics } from "./Helper/index"
import { logEvent } from "firebase/analytics";
import Chat from "./pages/Chat";
import Quiz from "./pages/Quiz";
import Dementia from "./pages/Dementia";
import Depression from "./pages/Depression";
import Ptsd from "./pages/Ptsd";
import Bipolar from "./pages/Bipolar";
import Schizophrenia from "./pages/Schizophrenia";
import Anxiety from "./pages/Anxiety";
import Loginpage from "./pages/Loginpage";
import About from "./pages/About";
import Books from "./Component/Books";
import Signin from "./pages/Signin";
import Navbar1 from "./Component/Navbar1";
import Therapy from "./pages/Therapy";
import Types from "./pages/Types";
import Yoga from "./Component/Yoga";
import Music from "./Component/Music";



<source />;

export default function App() {
  if (analytics) {
    logEvent(analytics, "Init...")
  }
  return (
    <div>
       <Navbar1/>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/therapy" element={<Therapy />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/types" element={<Types/>} />
        <Route path="/Depression" element={<Depression/>} />
        <Route path="/yoga" element={<Yoga/>} />
        <Route path="/Anxiety" element={<Anxiety/>} />
        <Route path="/ptsd" element={<Ptsd/>} />
        <Route path="/bipolar" element={<Bipolar/>} />
        <Route path="/schizophrenia" element={<Schizophrenia/>} />
        <Route path="/dementia" element={<Dementia/>} />
        <Route path="/book" element={<Books/>} />
        <Route path="/music" element={<Music/>} />

      </Routes>

      <Footer />
    </div>
  )
}