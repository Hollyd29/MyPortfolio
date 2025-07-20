import minimag from "../assets/projects/minimag.mp4";
import comfiable from "../assets/projects/confiable-Home.mp4";
import type { ProjectProp } from "../type/project.type";

function MyProjectComp() {
  const data: ProjectProp[] = [
    {
      id: "1",
      title: "Comfiable Home",
      video: comfiable,
      about:
        "ComfiableHomes is an e-commerce web app that allows visitors of the web app to check all available products, filter by brand, price, category, etc. It also allows visitors to add products to cart and check the aggregate amount. Cart can also be cleared.",
      tools:
        " React Native, Typescript, CSS, Context API, Express.js(for Backend), MongoDB (DB Management), Git",
    },
    {
      id: "2",
      title: "Minimag",
      video: minimag,
      about:
        "Minimag is a URL shortener web based application that helps to shorten and customize URLs, and provides QR Codes for respective shortened or customized URLs. Minimag also has a database management system where previously shortened or customized URLs can be viewed and regenerate new QR Codes for. You can demo this application before deciding to sign up.",
      tools:
        " React Native, Styled-components, TailwindCSS, Express.js(for Backend), MongoDB (DB Management), Git",
    },
  ];

  console.log(data);

  //   const [project, setProject] = useState(data)

  return (
    <div className="projectCon">
      <div>
        <h1>MY PROJECT</h1>
        <p>Each one is unique, check them out.</p>
      </div>
      {data.map((each, index) => (
        <div key={index}>
          <h2>
            {each.id}. {each.title}
          </h2>
          <video
            className="video"
            src={each.video}
            controls
            autoPlay
            // loop
            muted
            playsInline
          ></video>
          <p>{each.about}</p>
          <p>
            {" "}
            <span style={{ fontWeight: 800 }}>Stack/Tools:</span> {each.tools}
          </p>
          <p>Github available upon request</p>
        </div>
      ))}
    </div>
  );
}

export default MyProjectComp;
