import { AddOns } from "./pages/AddOns";
import { Finishing } from "./pages/Finishing";
import { PersonalInfo } from "./pages/PersonalInfo"
import { SelectPlan } from "./pages/SelectPlan"
import { useState } from "react"
import { ThankYou } from "./pages/ThankYou";
import '../styles/components/flowform.scss';
import { ProgressPanel } from "./ProgressPanel";



export function FlowForm() {
  const [currPage, setCurrPage] = useState(0);
  const [userData, setUserData] = useState(
    {
      name: "",
      email: "",
      phone: "",
      plan: 0,
      monthly: true
    }
  );

  
  const handleUpdateUserData = (newUserData) => {
    setUserData({ ...userData, ...newUserData });
  }

  const handleGoBack = () => {
    setCurrPage(currPage-1);
  }
  const handleNextStep = (newUserData) => {
    handleUpdateUserData(newUserData)
    setCurrPage(currPage+1);
  }

  const pages = [
    <PersonalInfo 
      userData={userData}
      onGoBack={handleGoBack}
      onNextStep={handleNextStep}
    />,
    <SelectPlan
      userData={userData}
      onGoBack={handleGoBack}
      onNextStep={handleNextStep}
      onUpdateUserData={handleUpdateUserData} 
    />,
    <AddOns
      userData={userData}
      onGoBack={handleGoBack}
      onNextStep={handleNextStep}
      onUpdateUserData={handleUpdateUserData} 
    />,
    <Finishing
      userData={userData}
      onGoBack={handleGoBack}
      onConfirm={""}
    />,
    <ThankYou/>
  ]

  return (
    <div id="flow-form">
      <ProgressPanel currStep={currPage}/>


      <div id="page-step">
        { pages[currPage] }
      </div>
     
    </div>
  )
};