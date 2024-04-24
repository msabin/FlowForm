import { AddOns } from "./pages/AddOns";
import { Finishing } from "./pages/Finishing";
import { PersonalInfo } from "./pages/PersonalInfo"
import { SelectPlan } from "./pages/SelectPlan"
import { useState } from "react"
import { ThankYou } from "./pages/ThankYou";
import '../stylings/FlowForm.scss';

const pages = [
  <PersonalInfo/>,
  <SelectPlan/>,
  <AddOns/>,
  <Finishing/>,
  <ThankYou/>
]



export function FlowForm() {
  const [currPage, setCurrPage] = useState(0);

  return (
    <div id="flow-form">
      <div>Progress Panel</div>


      <div id="page-step">
        { pages[currPage] }

        <div id="buttons">
          <div id="go-back" className="left flex">
            {currPage === 0 ? null :
              <button onClick={() => setCurrPage(currPage-1)}>
                Go Back
              </button>
            }
          </div>
          

          <div id="next-step" className="right flex">
            {currPage === pages.length-1 ? null :
              <button onClick={() => setCurrPage(currPage+1)}>
                Next Step
              </button>
            }
          </div>
        </div>
      </div>

    </div>
  )
};