import React from "react";

function GridPattern() {
  return (
    <div
      style={{
        backgroundPosition: "10px 10px",
      }}
      className="absolute -z-10 inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#ffffff7b,rgba(255,255,255,0.6))] 
        dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
    ></div>
  );
}

export { GridPattern };
