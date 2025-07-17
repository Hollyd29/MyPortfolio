import "./App.css";
import ContactMeComp from "./component/ContactMecomp";
import HeaderComp from "./component/Headercomp";

import MyStoryComp from "./component/MyStorycomp";
import Profilecomp from "./component/Profilecomp";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <HeaderComp />
      <Profilecomp />
      <MyStoryComp />
      <ContactMeComp />
    </div>
  );
}

export default App;
