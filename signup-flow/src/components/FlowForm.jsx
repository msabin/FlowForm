import { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { PersonalInfo } from "./pages/PersonalInfo";
import { SelectPlan } from "./pages/SelectPlan";
import { AddOns } from "./pages/AddOns";

import { PLANS } from "../utils/constants.js";
import { ADD_ONS } from "../utils/constants.js";

import "../styles/components/flowform.scss";


export function FlowForm() {
  const [currPage, setCurrPage] = useState(0);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    tel: "",
    plan: PLANS[0],
    monthly: true,
    addOns: new Set()
  });

  function handleUpdateUserData(newData) {
    setUserData({ ...userData, ...newData });
  }

  const handleGoBack = () => {
    setCurrPage(currPage - 1);
  };

  const handleNextStep = () => {
    console.log(currPage);
    setCurrPage(currPage + 1);
  };

  // Array of all our pages that FlowForm routes to
  const pages = [
    <PersonalInfo
      userData={userData}
      onUpdateUserData={handleUpdateUserData}
      onGoBack={handleGoBack}
      onNextStep={handleNextStep}
    />,
    <SelectPlan
      userData={userData}
      onUpdateUserData={handleUpdateUserData}
      onGoBack={handleGoBack}
      onNextStep={handleNextStep}
    />,
    <AddOns
      userData={userData}
      onUpdateUserData={handleUpdateUserData}
      onGoBack={handleGoBack}
      onNextStep={handleNextStep}
    />
  ];

  return (
    <div id="flow-form">
      <ProgressBar></ProgressBar>

      {pages[currPage]}
    </div>
  );
}
