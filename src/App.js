
import { Routes, Route } from "react-router-dom";
import Soda from "./Soda";
import Chips from "./Chips";
import FreshSardines from "./FreshSardines";
import VendingMachine from "./VendingMachine";
import NavBar from "./NavBar"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route  element={ <NavBar/> } />
        <Route path="/" element={ <VendingMachine/> } />
        <Route path="soda" element={ <Soda/> } />
        <Route path="chips" element={ <Chips/> } />
        <Route path="sardines" element={ <FreshSardines/> } />
    </Routes>
</div>
  );
}

export default App;
