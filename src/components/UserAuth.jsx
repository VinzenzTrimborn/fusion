import * as React from "react";
import {PlasmicUserAuth} from "./plasmic/fusion_lab/PlasmicUserAuth";

function UserAuth_({showAuth, ...props}, ref) {
    const [email, setEmail] = React.useState("");
    return <PlasmicUserAuth
        root={{ref}}
        {...props}
        email={{
            value: email,
            onChange(e) {
                setEmail(e.target.value);
            }
        }}

        registerButton={{
            onClick() {

                console.log("register", email);
                showAuth(false);
                setEmail("");
            }
        }}
    />;
}

const UserAuth = React.forwardRef(UserAuth_);

export default UserAuth;
