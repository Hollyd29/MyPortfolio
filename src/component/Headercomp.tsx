import { FaBars } from "react-icons/fa";
import "./portfolio.css";
import { useState } from "react";

function HeaderComp() {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <>
      <div className="headerCon">
        <div>
          <h3 className="logo">PORTFOLIO</h3>
        </div>
        <div className="iconCon">
          <FaBars className="headerIcon" />
        </div>
      </div>
      {menu && (
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "black",
            position: "absolute",
            top: 0,
          }}
        ></div>
      )}
    </>
  );
}
export default HeaderComp;
