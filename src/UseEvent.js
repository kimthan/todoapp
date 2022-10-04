import React, { useEffect, useState } from "react";

function UseEvent() {
  const [enterPressed, setEnterPressed] = useState(false);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setEnterPressed(true);
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return [enterPressed, setEnterPressed];
}

export default UseEvent;
