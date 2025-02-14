import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./components/Landing page/LandingPage";
import AboutUsPage from "./components/AboutUs page/AboutUsPage";
import FeaturesPage from "./components/Features page/FeaturesPage";
import ContactUsPage from "./components/ContactUs page/ContactUsPage";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<LandingPage/>}/>
          <Route path="features" element={<FeaturesPage/>}/>
          <Route path="aboutus" element={<AboutUsPage/>}/>
          <Route path="contactus" element={<ContactUsPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>);

export default App;