import NavBar from "../NavBar/NavBar"
import ComingSoon from "./ComingSoon/ComingSoon"
import Features from "./Features/Features"
import KeyFeatures from "./Features/KeyFeatures"
import Hero from "./Hero/Hero"
import Services from "./Services/Services"
import Services_2 from "./Services/Services_2"

const LandingPage = () => {
  return (
      <div className=" bg-gradient-to-t from-primary via-white ">
      <Hero/>
      <Features/>
      <Services_2/>
      <Services/>
      <KeyFeatures/>
      <ComingSoon/>
    </div>
  )
}

export default LandingPage
