import * as React from "react";
import {PlasmicQuestionsForm} from "./plasmic/fusion_lab/PlasmicQuestionsForm";

function QuestionsForm_({close, ...props}, ref) {
    const [email, setEmail] = React.useState("");
    const [postCode, setPostCode] = React.useState("");
    const [howOften, setHowOften] = React.useState("");
    const [bridgeUse, setBridgeUse] = React.useState("");
    const [commute, setCommute] = React.useState("");
    const [bridgeActivities, setBridgeActivities] = React.useState("");

    return <PlasmicQuestionsForm
        form={{
            onSubmit: (e) => {
                e.preventDefault();
                const object = {
                    email: email,
                    postCode: postCode,
                    howOften: howOften,
                    bridgeUse: bridgeUse,
                    commute: commute,
                    bridgeActivities: bridgeActivities
                };
                console.log(object);
                // ToDo Koray: Create a user in the database
                // Save the data about the user in the database
                // Close the form if the user filled in everything
                close();
            }
        }}
        root={{
            ref
        }}
        close={{
            onClick: () => {
                close();
            }
        }}
        email={{
            value: email,
            onChange(e) {
                setEmail(e.target.value);
            }
        }}
        postalCode={{
            value: postCode,
            onChange(e) {
                setPostCode(e);
            }
        }}
        howOften={{
            value: howOften,
            onChange(e) {
                setHowOften(e);
            }
        }}
        bridgeUse={{
            value: bridgeUse,
            onChange(e) {
                setBridgeUse(e);
            }
        }}
        commute={{
            value: commute,
            onChange(e) {
                setCommute(e);
            }
        }}
        bridgeActivities={{
            value: bridgeActivities,
            onChange(e) {
                setBridgeActivities(e);
            }
        }}
        {...props}
    />;
}

const QuestionsForm = React.forwardRef(QuestionsForm_);

export default QuestionsForm;
