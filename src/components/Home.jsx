import * as React from "react";
import {PlasmicHome} from "./plasmic/fusion_lab/PlasmicHome";

function Home_(props, ref) {
    const [auth, showAuth] = React.useState(false);

    return <PlasmicHome
        participateButton={{
            onClick: () => {
                console.log("participate");
                showAuth(true)

            }
        }}
        questions={{
            open: auth,
            close: () => {
                showAuth(false);
            }
        }}
        root={{ref}}
        {...props}
    />;
}

const Home = React.forwardRef(Home_);

export default Home;
