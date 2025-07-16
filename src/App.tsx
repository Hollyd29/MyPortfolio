import "./App.css";
import HeaderComp from "./component/headercomp";
import MyStoryComp from "./component/MyStorycomp";
import Profilecomp from "./component/Profilecomp";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <HeaderComp />
      <Profilecomp />
      <MyStoryComp />
    </div>
  );
}

export default App;
