import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import "./portfolio.css";
import { useState } from "react";

function HeaderComp() {
  const [menu, setMenu] = useState<boolean>(true);

  const goToMyProject = () => {
    const project = document.getElementById("myProject");
    if (project) {
      setMenu(false);
      project.scrollIntoView({ behavior: "smooth" });
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
            <p style={{ cursor: "pointer" }} onClick={goToMyProject}>
              My Project
            </p>
          </div>
        </div>
      )}
    </>
  );
}
export default HeaderComp;
