function HeaderComp() {
  return (
    <div
      style={{
        backgroundColor: "#b0e0feff",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        borderBottom: "1px solid #80808099",
      }}
    >
      <div>
        <h3
          style={{
            marginLeft: 10,
            padding: -10,
            color: "#0062FF",
            fontSize: 30,
            lineHeight: 1,
          }}
        >
          PORTFOLIO
        </h3>
      </div>
    </div>
  );
}
export default HeaderComp;
