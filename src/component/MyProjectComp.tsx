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
        <h2>1. Comfiable Home</h2>
        <video
          className="video"
          src={comfiable}
          controls
          autoPlay
          // loop
          muted
          playsInline
        ></video>
        <p>
          Minimag is a URL shortener web based application that helps to shorten
          and customize URLs, and provides QR Codes for respective shortened or
          customized URLs. Minimag also has a database management system where
          previously shortened or customized URLs can be viewed and regenerate
          new QR Codes for. You can demo this application before deciding to
          sign up.
        </p>
        <p>
          Stack/Tools: React.js, Typescript, Styled-components, TailwindCSS,
          Express.js(for Backend), MongoDB (DB Management), Git, Netlify.
        </p>
        <p>Github available upon request</p>
      </div>
    </div>
  );
}

export default MyProjectComp;
