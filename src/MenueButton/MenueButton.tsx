import { useState } from "react";
import "./MenueButton.scss";

export default function () {
  const [showDetailView, setShowDetailView] = useState<boolean>(false);
  function showDetailMenue() {
    console.log("hello");
    setShowDetailView(true);
  }

  return (
    <div className="button_text" onClick={showDetailMenue}>
      Menue
    </div>
  );
}
