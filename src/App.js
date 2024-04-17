import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from "./Template";
import Dashboard from "./Pages/Dashboard/Index";

function App() {
  return (
    <>
    <Template content={
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    } />
    </>
  );
}

export default App;
