// import minimag from "../assets/projects/minimag.mp4";
import comfiable from "../assets/projects/confiable-Home.mp4";

function MyProjectComp() {
  return (
    <div>
      <div>
        <h1>MY PROJECT</h1>
        <p>Each one is unique, check them out.</p>
      </div>
      <div>
        <h2>Comfiable Home</h2>
        <video className="comfiable-Vid" src={comfiable}></video>
      </div>
    </div>
  );
}

export default MyProjectComp;
