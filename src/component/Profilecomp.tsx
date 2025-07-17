import image from "../assets/image.jpeg";

function Profilecomp() {
  return (
    <div className="profileCon">
      <h1 className="name">Oladimeji .E.O.</h1>
      <p className="aboutMe">
        I am a{" "}
        <span className="colorText">professional mobile app developer</span>{" "}
        with strong expertise in{" "}
        <span className="colorText">React Native and TypeScript</span> .{" "}
        <p>
          {" "}
          I specialize in {""}
          <span className="colorText">
            building responsive, high-performance mobile applications for both
            iOS and Android
          </span>
          . With a solid background in{" "}
          <span className="colorText">API integration</span> and a passion for
          clean, scalable code, I deliver seamless user experiences that meet
          client goals. Whether working on business tools or consumer apps, I
          bring precision, speed, and reliability to every project. I'm always
          learning and committed to building modern, impactful solutions.
        </p>
      </p>
      <div className="imgCon">
        <img className="img" src={image} alt="" />
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>A Developer with curious mind.</h2>
        <p>
          I develop high quality human centered products with outstanding
          digital experience.
        </p>
        <h2 style={{ marginTop: 50 }}>I understand the language of the App.</h2>
        <p>
          With this understanding, I provide strategic solution for the user
          experience.
        </p>
      </div>
    </div>
  );
}

export default Profilecomp;
