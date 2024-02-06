import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { analytics } from "./Helper/index"
import { logEvent } from "firebase/analytics";
import Chat from "./pages/Chat";
import Quiz from "./pages/Quiz";

import Loginpage from "./pages/Loginpage";
import About from "./pages/About";
import Types from "./pages/Types";
import Signin from "./pages/Signin";


<source />;

export default function App() {
  if (analytics) {
    logEvent(analytics, "Init...")
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/types" element={<Types />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>

      <Footer />
    </div>
  )
}