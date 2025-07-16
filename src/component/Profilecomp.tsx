import image from "../assets/image.jpeg";

function Profilecomp() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginTop: 70, textAlign: "center" }}>Oladimeji .E.O.</h1>
      <p style={{ textAlign: "center", fontSize: 18 }}>
        I am a{" "}
        <span
          style={{
            fontWeight: 800,
            color: "#0062FF",
            textTransform: "capitalize",
          }}
        >
          professional mobile app developer
        </span>{" "}
        with strong expertise in{" "}
        <span
          style={{
            fontWeight: 800,
            color: "#0062FF",
            textTransform: "capitalize",
          }}
        >
          React Native and TypeScript
        </span>{" "}
        .{" "}
        <p>
          {" "}
          I specialize in {""}
          <span
            style={{
              fontWeight: 800,
              color: "#0062FF",
              textTransform: "capitalize",
            }}
          >
            building responsive, high-performance mobile applications for both
            iOS and Android
          </span>
          . With a solid background in{" "}
          <span
            style={{
              fontWeight: 600,
              color: "#0062FF",
              textTransform: "capitalize",
            }}
          >
            API integration
          </span>{" "}
          and a passion for clean, scalable code, I deliver seamless user
          experiences that meet client goals. Whether working on business tools
          or consumer apps, I bring precision, speed, and reliability to every
          project. I'm always learning and committed to building modern,
          impactful solutions.
        </p>
      </p>
      <div
        style={{
          width: "50%",
          height: 350,
          marginBlock: 50,
          marginInline: "auto",
        }}
      >
        <img
          style={{ width: "100%", height: "100%", borderRadius: 10 }}
          src={image}
          alt=""
        />
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
