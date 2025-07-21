import "./App.css";
import ContactMeComp from "./component/ContactMecomp";
import HeaderComp from "./component/Headercomp";
import MyProjectComp from "./component/MyProjectComp";

import MyStoryComp from "./component/MyStorycomp";
import Profilecomp from "./component/Profilecomp";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <div id="header">
        <HeaderComp />
      </div>
      <div id="profile">
        <Profilecomp />
      </div>
      <div id="myStory">
        <MyStoryComp />
      </div>
      <div id="myProject">
        <MyProjectComp />
      </div>
      <div id="contact">
        <ContactMeComp />
      </div>
    </div>
  );
}

export default App;
