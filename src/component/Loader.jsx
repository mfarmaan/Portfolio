import React from "react";

function Loader(props) {
  return (
    <div style={{ background: `${props.background}` }} className="Overlay">
      <span className="loader"></span>
    </div>
  );
}

export default Loader;
