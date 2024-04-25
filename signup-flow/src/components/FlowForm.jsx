import { AddOns } from "./pages/AddOns";
import { Finishing } from "./pages/Finishing";
import { PersonalInfo } from "./pages/PersonalInfo"
import { SelectPlan } from "./pages/SelectPlan"
import { useState } from "react"
import { ThankYou } from "./pages/ThankYou";
import '../styles/components/FlowForm.scss';
import { ProgressPanel } from "./ProgressPanel";





export function FlowForm() {
  const [currPage, setCurrPage] = useState(0);
  const [userData, setUserData] = useState({});

  
  const handleGoBack = () => {
    setCurrPage(currPage-1);
  }
  const handleUpdateUserData = (newUserData) => {
    setUserData({ ...userData, ...newUserData });
    setCurrPage(currPage+1);
  }

  const pages = [
    <PersonalInfo 
      onGoBack={handleGoBack}
      onUpdateUserData={handleUpdateUserData} 
    />,
    <SelectPlan
      onGoBack={handleGoBack}
      onUpdateUserData={handleUpdateUserData} 
    />,
    <AddOns
      onGoBack={handleGoBack}
      onUpdateUserData={handleUpdateUserData} 
    />,
    <Finishing
      onGoBack={handleGoBack}
      onUpdateUserData={handleUpdateUserData} 
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