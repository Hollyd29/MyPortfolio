import "./App.css";
import ContactMeComp from "./component/ContactMecomp";
import HeaderComp from "./component/Headercomp";
import MyProjectComp from "./component/MyProjectComp";

import MyStoryComp from "./component/MyStorycomp";
import Profilecomp from "./component/Profilecomp";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <HeaderComp />
      <Profilecomp />
      <MyStoryComp />
      <MyProjectComp />
      <ContactMeComp />
    </div>
  );
}

export default App;
