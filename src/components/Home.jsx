import * as React from "react";
import {PlasmicHome} from "./plasmic/fusion_lab/PlasmicHome";

function Home_(props, ref) {

    return <PlasmicHome
        root={{ref}}
        header={{
            onClick: () => {
                const usdzFile = `${window.location.protocol}//${window.location.host}/asset.usdz`;
                console.log("header clicked");
                window.location.href = usdzFile;
            }
        }}
        {...props}
    />;
}

const Home = React.forwardRef(Home_);

export default Home;
