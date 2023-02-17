import React from "react";

function Loader(props) {
  return (
    <div style={{ background: `${props.background}` }} className="Overlay">
      <span class="loader"></span>
    </div>
  );
}

export default Loader;
