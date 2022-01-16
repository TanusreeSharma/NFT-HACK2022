import {
  Routes,
  Route
} from "react-router-dom";
import Home1 from './Components/Page1/Home1/Home1';
import Nav from './Components/Nav/Nav';
import Home2 from './Components/Page2/Home2/Home2';
import ItemsDetails1 from './Components/Page1/Items/ItemsDetails1/ItemsDetails1';
import ItemsDetails2 from './Components/Page1/Items/ItemsDetails2/ItemsDetails2';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home1/>}/>
        <Route path="/home1" element={<Home1/>}/>
        <Route path="/home2" element={<Home2/>}/>
        <Route path="/itemsDetails1" element={<ItemsDetails1/>}/>
        <Route path="/itemsDetails2" element={<ItemsDetails2/>}/>
      </Routes>
    </div>
  );
}

export default App;
