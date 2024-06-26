import React from "react";
import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TailSpin color="black" width="120" height="120" radius="2" />
    </div>
  );
}

export default Loader;
