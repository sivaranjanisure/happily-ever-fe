import React, { useState } from "react";
import dropIcon from "../../../assets/dropIcon.png";

const AgePicker = ({ actions }) => {
  const [selectedAge, setSelectedAge] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showPicker, setShowPicker] = useState(true);

  const handleAgeChange = (age) => {
    setShowPicker(false);
    actions.handleAgePicker(age);
    setSelectedAge(age);
    setIsDropdownOpen(false);
  };

  const generateAgeOptions = () => {
    const ageOptions = [];
    for (let age = 18; age <= 40; age++) {
      ageOptions.push(
        <div
          key={age}
          className="text-center hover:bg-blue02"
          onClick={() => handleAgeChange(age)}
        >
          {age}
        </div>
      );
    }
    return ageOptions;
  };

  return (
    <div>
      {showPicker && (
        <div className="h-44 relative float-right">
          <div className="cursor-pointer inline-block shadow-buttonShadow">
            <div
              className="h-8 leading-8 px-2 flex bg-blue01 rounded "
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedAge || "Select age"}
              <img className="w-4 h-4 mt-2 ml-1" src={dropIcon} alt="" />
            </div>
            {isDropdownOpen && (
              <div className="max-h-44 overflow-y-auto ">
                {generateAgeOptions()}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AgePicker;
