import React, { useState } from "react";

const Overview = ({ children, actions }) => {
  const [showButton, setShowButton] = useState(true);
  return (
    <div>
      {showButton && (
        <button
          className="bg-blue01 p-2 rounded-lg shadow-buttonShadow cursor-pointer float-right"
          onClick={() => {
            setShowButton(false);
            actions.handleGotIt();
          }}
        >
          Got it!
        </button>
      )}
    </div>
  );
};

export default Overview;
