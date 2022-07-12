import React from "react"
import CurrentDate from "./CurrentDate";

const Calender = () => {
    const date = Date().toLocaleString();
   
    return (
    <>
     <h3>What date is it?</h3>
     <CurrentDate date = {date} />
    </>
    );
  }

export default Calender;