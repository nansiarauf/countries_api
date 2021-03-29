import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Countries from "./pages/Countries"
import Details from "./pages/Details"
import Footer from "./components/Footer";



function App() {
  return (
        <main>
        <Navbar/>
        <Switch>
        <Route path="/" component={Home} exact/>

        <Route path="/countries" component={Countries} exact />
        
        <Route path="/details/:name" component={Details}/>
      
      </Switch>
      <Footer/>
        </main>

  );
}

export default App;
