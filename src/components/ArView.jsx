import * as React from "react";
import {PlasmicArView} from "./plasmic/fusion_lab/PlasmicArView";

function ArView_(props, ref) {
    return <PlasmicArView
        root={{ref}}
        {...props}
        ar={{
            onClick: () => {
                const usdzFile = `${window.location.protocol}//${window.location.host}/asset.usdz`;
                window.location.href = usdzFile;
            }
        }}
        apple={[
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)}
    />;
}

const ArView = React.forwardRef(ArView_);

export default ArView;
