import React, { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(0);
  const end = 10;
  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => {
        if (prev + 1 >= end) {
          clearInterval(id);
        }
        return prev + 1;
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div>
      <h1>Timer</h1>
      <h4>Timer will start at 0 and timer will end at 10</h4>
      {time}
    </div>
  );
};
