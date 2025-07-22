import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import "./portfolio.css";
import { useState } from "react";

function HeaderComp() {
  const [menu, setMenu] = useState<boolean>(true);

  const handleScroll = (screen: string) => {
    const project = document.getElementById("myProject");
    const about = document.getElementById("myStory");
    const contact = document.getElementById("contact");

    if (screen === "project" && project) {
      setMenu(false);
      project.scrollIntoView({ behavior: "smooth" });
    }
    if (screen === "about" && about) {
      setMenu(false);
      about.scrollIntoView({ behavior: "smooth" });
    }
    if (screen === "contact" && contact) {
      setMenu(false);
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="headerCon">
        <div>
          <h3 className="logo">PORTFOLIO</h3>
        </div>
        <button onClick={() => setMenu(true)} className="iconCon">
          <FaBars className="headerIcon" />
        </button>
      </div>
      {menu && (
        <div className="menuCon">
          <button onClick={() => setMenu(false)} className="closeCon">
            <MdClose color="red" className="closeIcon" />
          </button>
          <div>
            <div className="meetMe">
              <h1>Meet Me</h1>
              <FaHandshake color="#f6ff00ff" size={40} />
            </div>
            <p className="pp" onClick={() => handleScroll("project")}>
              My Project
            </p>
            <p
              style={{ cursor: "pointer" }}
              onClick={() => handleScroll("about")}
            >
              About Me
            </p>
            <p
              style={{ cursor: "pointer" }}
              onClick={() => handleScroll("contact")}
            >
              Contact Me
            </p>
          </div>
        </div>
      )}
    </>
  );
}
export default HeaderComp;
