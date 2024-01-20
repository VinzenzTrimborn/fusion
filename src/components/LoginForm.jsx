import * as React from "react";
import { PlasmicLoginForm } from "./plasmic/fusion_lab/PlasmicLoginForm";

function LoginForm_(props, ref) {

  return <PlasmicLoginForm root={{ ref }} {...props} />;
}

const LoginForm = React.forwardRef(LoginForm_);

export default LoginForm;
