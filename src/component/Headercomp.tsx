import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import "./portfolio.css";
import { useState } from "react";

function HeaderComp() {
  const [menu, setMenu] = useState<boolean>(true);

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
          <button onClick={() => setMenu(false)}>
            <MdClose color="red" />
          </button>
        </div>
      )}
    </>
  );
}
export default HeaderComp;
