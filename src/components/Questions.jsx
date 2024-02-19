import * as React from "react";
import {PlasmicQuestions} from "./plasmic/fusion_lab/PlasmicQuestions";
import MyContext from "../MyContext";
import {useContext} from "react";
import supabaseClient from "../supabaseClient";

function Questions_(props, ref) {
    const {state} = useContext(MyContext);

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
            onClick: async (e) => {
                e.preventDefault();

                try {
                    // Call the Supabase function to add a survey
                    const {error} = await supabaseClient
                        .from('surveys')
                        .insert([{
                            postalCode: postCode,
                            country: country,
                            bridgeUse: bridgeUse,
                            commute: commute,
                            howOften: howOften,
                            userId: state.userId
                        }]);

                    if (error) {
                        console.error('Error adding survey:', error);
                        // Handle error accordingly
                    } else {
                        console.log('Survey added successfully.');
                        // Handle success accordingly
                    }

                    // Reset the form
                    setPostCode("");
                    setCountry("");
                    setHowOften("");
                    setBridgeUse("");
                    setCommute("");
                } catch (error) {
                    console.error('Error:', error.message);
                    // Handle error accordingly
                }
            }
        }}

        root={{ref}}
        {...props}
    />;
}

const Questions = React.forwardRef(Questions_);

export default Questions;
