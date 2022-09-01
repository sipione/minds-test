import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComponentHeader from "./components/header";
import ComponentSideBar from "./components/sideBar";
import PageUser from "./pages/user";

function App() {
  return (
    <BrowserRouter>
      <ComponentHeader/>
      <ComponentSideBar/>
      <Routes>
        <Route path="/" element={<PageUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
