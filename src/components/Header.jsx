import * as React from "react";
import {PlasmicHeader} from "./plasmic/fusion_lab/PlasmicHeader";
import UserAuth from "./UserAuth";
import {useCallback} from "react";

function Header_({props}, ref) {
    const [auth, showAuth] = React.useState(false);
    return <PlasmicHeader
        participateButton={{
            onClick: () => {
                console.log("participate");
                showAuth(true)
            }
        }}
        auth={{
            children: <UserAuth open={auth} showAuth={showAuth}/>
        }}
        intro={{ref}}
        {...props}
    />;
}

const Header = React.forwardRef(Header_);

export default Header;
