import { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { PersonalInfo } from "./pages/PersonalInfo";
import { SelectPlan } from "./pages/SelectPlan";

import "../styles/components/flowform.scss";

export function FlowForm() {
  const [currPage, setCurrPage] = useState(0);
  const [userData, setUserData] = useState({});

  function handleUpdateUserData() {}

  function handleGoBack() {}

  function handleNextStep() {}

  const props = {
    userData,
    handleUpdateUserData,
    handleGoBack,
    handleNextStep,
  };

  const pages = [<PersonalInfo />, <SelectPlan />];

  return (
    <div id="flow-form">
      <ProgressBar></ProgressBar>

      {pages[currPage]}
    </div>
  );
}
