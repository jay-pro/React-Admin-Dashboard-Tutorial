import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
//import Home from "./components/home/Home";
import Coursemanage from "./components/coursemanage/Coursemanage";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        {/* thay ở dưới bằng Home hoặc các Function trong System Admin */}
        <Coursemanage />
      </div>
    </div>
  );
}

export default App;
