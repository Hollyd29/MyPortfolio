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
        "ComfiableHomes is an e-commerce application with a colaboration of backend developer that allows visitors of the web app to check all available products, filter by brand, price, category, etc. It also allows visitors to add products to cart and check the aggregate amount. Cart can also be cleared.",
      tools: " React Native, CSS, Context API, Styled-components, Git",
    },
    {
      id: "2",
      title: "Minimag",
      video: minimag,
      about:
        "Minimag is a URL shortener application that helps to shorten and customize URLs, and provides QR Codes for respective shortened or customized URLs. Minimag also has a database management system where previously shortened or customized URLs can be viewed and regenerate new QR Codes for. You can demo this application before deciding to sign up.",
      tools:
        " React Native, Typescript, CSS, Context API, Styled-components, Git",
    },
  ];

  console.log(data);

  //   const [project, setProject] = useState(data)

  return (
    <div className="projectCon">
      <div className="myProject">
        <h1>MY PROJECT</h1>
        <p>Each one is unique, check them out.</p>
      </div>
      {data.map((each, index) => (
        <div key={index} className="eachProject">
          <h2>
            {each.id}. {each.title}
          </h2>
          <div className="videoCon">
            <video
              className="video"
              src={each.video}
              controls
              autoPlay
              loop
              muted
              playsInline
            ></video>
            <div className="videoText">
              <p className="pra">{each.about}</p>
              <p className="pra">
                {" "}
                <span style={{ fontWeight: 800 }}>Stack/Tools:</span>{" "}
                {each.tools}
              </p>
            </div>
          </div>
          <p className="pra">Github available upon request</p>
        </div>
      ))}
    </div>
  );
}

export default MyProjectComp;
