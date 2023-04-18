import { Outlet } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Outlet />
        </BrowserRouter>
    </div>
  );
}

export default App;
