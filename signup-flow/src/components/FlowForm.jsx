import { ProgressBar } from "./ProgressBar";
import { PersonalInfo } from "./pages/PersonalInfo";
import '../styles/components/flowform.scss';

export function FlowForm() {
  return (
    <div id="flow-form">
      <ProgressBar></ProgressBar>

      <PersonalInfo></PersonalInfo>
    </div>
  );
}
