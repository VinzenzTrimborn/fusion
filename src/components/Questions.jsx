import * as React from "react";
import {PlasmicQuestions} from "./plasmic/fusion_lab/PlasmicQuestions";
import MyContext from "../MyContext";
import {useContext} from "react";

function Questions_(props, ref) {
    const {state, updateState} = useContext(MyContext);

    const [postCode, setPostCode] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [howOften, setHowOften] = React.useState("");
    const [bridgeUse, setBridgeUse] = React.useState("");
    const [commute, setCommute] = React.useState("");

    return <PlasmicQuestions
        postalCode={{
            value: postCode,
            onChange(e) {
                setPostCode(e);
            }
        }}
        countrySelect={{
            value: country,
            onChange(e) {
                setCountry(e);
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
        submitButton={{
            onClick: (e) => {
                e.preventDefault();
                const object = {
                    postalCode: postCode,
                    country: country,
                    howOften: howOften,
                    bridgeUse: bridgeUse,
                    commute: commute
                };
                console.log(object);
                if (state.userID) {
                    //ToDo Koray: Save the data in the database and associate it with the userID
                } else {
                    //ToDo Koray: Save the data in the database and return a userID
                    const newValue = "1234";
                    updateState({ userID: newValue });
                }
                setPostCode("");
                setCountry("");
                setHowOften("");
                setBridgeUse("");
                setCommute("");
            }
        }}

        root={{ref}}
        {...props}
    />;
}

const Questions = React.forwardRef(Questions_);

export default Questions;
