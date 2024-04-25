import { AddOns } from "./pages/AddOns";
import { Finishing } from "./pages/Finishing";
import { PersonalInfo } from "./pages/PersonalInfo"
import { SelectPlan } from "./pages/SelectPlan"
import { useState } from "react"
import { ThankYou } from "./pages/ThankYou";
import '../styles/components/FlowForm.scss';

const pages = [
  <PersonalInfo/>,
  <SelectPlan/>,
  <AddOns/>,
  <Finishing/>,
  <ThankYou/>
]



export function FlowForm() {
  const [currPage, setCurrPage] = useState(0);
  const [userData, setUserData] = useState({});

  const handleUpdateUserData = (newUserData) => {
    setUserData({ ...userData, ...newUserData });
    setCurrPage(currPage+1);
    console.log(userData);
  }

  return (
    <div id="flow-form">
      <div>Progress Panel</div>


      {/* <div id="page-step">
        { pages[currPage] }
      </div> */}

      <PersonalInfo onUpdateUserData={handleUpdateUserData}/>

    </div>
  )
};