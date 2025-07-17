import { FaBars } from "react-icons/fa";
import "./portfolio.css";

function HeaderComp() {
  return (
    <div className="headerCon">
      <div>
        <h3 className="logo">PORTFOLIO</h3>
      </div>
      <div className="iconCon">
        <FaBars className="headerIcon" />
      </div>
    </div>
  );
}
export default HeaderComp;
