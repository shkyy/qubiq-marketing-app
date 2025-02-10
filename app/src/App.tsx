import Hero from "./components/Landing page/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Features from "./components/Landing page/Features/Features";

const App = () => {
  return (
    <div className=" bg-gradient-to-t from-primary via-white ">
      <NavBar/>
      <Hero/>
      <Features/>
    </div>
  )
}

export default App;