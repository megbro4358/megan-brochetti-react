
import Top from "./components/Top.js";
import Hero from "./components/Hero.js";
import Hobbies from "./components/Hobbies.js";
import TechSupport from "./components/TechSupport.js";
import Copyright from "./components/Copyright";



function App() {
  return (
    <div>
      <main>
        <Top/>
        <Hero/>
        <Hobbies/>
        <TechSupport/>
      </main>
      <Copyright/>
    </div>
  );
}


export default App;
