import * as React from "react";
import {PlasmicHome} from "./plasmic/fusion_lab/PlasmicHome";

function Home_(props, ref) {

    return <PlasmicHome
        root={{ref}}
        header={{
            onClick: () => {
                console.log("header clicked");
            }
        }}
        {...props}
    />;
}

const Home = React.forwardRef(Home_);

export default Home;
