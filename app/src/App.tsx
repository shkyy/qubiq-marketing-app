import Hero from "./components/Landing page/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Features from "./components/Landing page/Features/Features";
import KeyFeatures from "./components/Landing page/Features/KeyFeatures";
import Services from "./components/Landing page/Services/Services";
import Services_2 from "./components/Landing page/Services/Services_2";
import ComingSoon from "./components/Landing page/ComingSoon/ComingSoon";

const App = () => {
  return (
    <div className=" bg-gradient-to-t from-primary via-white ">
      <NavBar/>
      <Hero/>
      <Features/>
      <Services_2/>
      <Services/>
      <KeyFeatures/>
      <ComingSoon/>
    </div>
  )
}

export default App;