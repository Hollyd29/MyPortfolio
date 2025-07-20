// import minimag from "../assets/projects/minimag.mp4";
import comfiable from "../assets/projects/confiable-Home.mp4";

function MyProjectComp() {
  return (
    <div style={{ backgroundColor: "black", color: "#ffffff", padding: 20 }}>
      <div>
        <h1>MY PROJECT</h1>
        <p>Each one is unique, check them out.</p>
      </div>
      <div>
        <h2>Comfiable Home</h2>
        <div
          style={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <video
            className="comfiable-Vid"
            src={comfiable}
            controls
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
}

export default MyProjectComp;
