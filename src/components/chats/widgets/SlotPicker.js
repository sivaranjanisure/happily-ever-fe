/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import prevIcon from "../../../assets/prev.png";
import nextIcon from "../../../assets/next.png";

const SlotPicker = ({ children, actions }) => {
  const slots = [
    {
      date: "4 MAY",
      day: "THU",
    },
    {
      date: "5 MAY",
      day: "FRI",
    },
    {
      date: "6 MAY",
      day: "SAT",
    },
    {
      date: "7 MAY",
      day: "SUN",
    },
    {
      date: "8 MAY",
      day: "MON",
    },
    {
      date: "9 MAY",
      day: "TUE",
    },
  ];
  const periods = [
    {
      strip: "MORNING",
      time: ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"],
    },
    {
      strip: "NOON",
      time: ["02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"],
    },
    {
      strip: "EVENING",
      time: ["06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM"],
    },
  ];

  const [selectedSlot, setSelectedSlot] = useState();
  const [selectedPeriod, setSelectedPeriod] = useState();
  const [startIndex, setStartIndex] = useState(0);
  const [showPicker, setShowPicker] = useState(true);
  const slotsPerPage = 3;

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handlePeriodClick = (period) => {
    setSelectedPeriod(period);
  };

  const handleNextClick = () => {
    const nextIndex = startIndex + slotsPerPage;
    if (nextIndex < slots.length) {
      setStartIndex(nextIndex);
    }
  };

  const handlePrevClick = () => {
    const prevIndex = startIndex - slotsPerPage;
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
    }
  };

  useEffect(() => {
    if (selectedSlot && selectedPeriod) {
      let date = `${
        selectedSlot.date + "," + selectedSlot.day + " " + selectedPeriod
      }`;
      console.log(date, "date");
      setShowPicker(false);
      actions.handleSlotSelection(date);
    }
  }, [selectedPeriod]);

  useEffect(() => {
    setSelectedSlot(slots[0]);
  }, []);

  return (
    <div>
      {showPicker && (
        <div>
          <div className="grid grid-cols-5 text-[12px] font-medium mb-6">
            <button
              className="border border-grey text-center  w-6 h-6"
              onClick={handlePrevClick}
            >
              <img src={prevIcon} alt="prev" />
            </button>
            {slots.slice(startIndex, startIndex + slotsPerPage).map((s) => (
              <div key={s.date}>
                <button
                  className={`grid grid-rows-2 border border-grey text-center w-10 ${
                    selectedSlot?.day === s?.day
                      ? `bg-blue text-white`
                      : " text-blue"
                  }`}
                  onClick={() => handleSlotClick(s)}
                >
                  <span className="">{s.date}</span>
                  <span className="text-black">{s.day}</span>
                </button>
              </div>
            ))}
            <button
              className="border border-grey text-center w-6 h-6"
              onClick={handleNextClick}
            >
              <img src={nextIcon} alt="next" />
            </button>
          </div>
          {periods.map((p) => (
            <div className="grid grid-rows-2  font-medium" key={p.strip}>
              <span className="text-xs mt-3 mb-2">{p.strip}</span>
              <div className="flex justify-around">
                {p.time.map((t) => (
                  <button
                    className="border border-grey rounded-md text-[12px] w-12 text-black"
                    key={t}
                    onClick={() => handlePeriodClick(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SlotPicker;
