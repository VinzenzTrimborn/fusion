import * as React from "react";
import { PlasmicQuestions } from "./plasmic/fusion_lab/PlasmicQuestions";

function Questions_(props, ref) {
  return <PlasmicQuestions root={{ ref }} {...props} />;
}

const Questions = React.forwardRef(Questions_);

export default Questions;
