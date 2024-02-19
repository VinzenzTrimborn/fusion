import * as React from "react";
import {PlasmicActivityQuestions} from "./plasmic/fusion_lab/PlasmicActivityQuestions";
import {useContext} from "react";
import MyContext from "../MyContext";
import supabaseClient from "../supabaseClient";

function ActivityQuestions_(props, ref) {


    const [grade, setGrade] = React.useState("");
    const [often, setOften] = React.useState("");
    const [notLike, setNotLike] = React.useState("");
    const [improvementComment, setImprovementComment] = React.useState("");

    const {state} = useContext(MyContext);

    const sendToServer = async (e, activityName) => {
        e.preventDefault();

        try {
            // Call the Supabase function to add an activity question
            const {error} = await supabaseClient
                .from('activityQuestions')
                .insert([{
                    activityName: activityName,
                    grade: grade,
                    often: often,
                    notLike: notLike,
                    improvementComment: improvementComment,
                    userId: state.userId
                }]);

            if (error) {
                console.error('Error adding activity survey', error);
                // Handle error accordingly
            } else {
                console.log('Activity question added successfully.');
            }

            // Clear the form
            setGrade("");
            setOften("");
            setNotLike("");
            setImprovementComment("");
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return <PlasmicActivityQuestions
        grade={{
            value: grade,
            onChange(e) {
                setGrade(e);
            }
        }}

        often={{
            value: often,
            onChange(e) {
                setOften(e);
            }
        }}

        notLikeComment={{
            value: notLike,
            onChange(e) {
                setNotLike(e.target.value);
            }
        }}

        improvementComment={{
            value: improvementComment,
            onChange(e) {
                setImprovementComment(e.target.value);
            }
        }}

        climbingSubmit={{
            onClick: (e) => {
                sendToServer(e, "climbing");
            }
        }}

        platformSubmit={{
            onClick: (e) => {
                sendToServer(e, "platform");
            }
        }}

        skateSubmit={{
            onClick: (e) => {
                sendToServer(e, "skate");
            }
        }}

        openNorthSubmit={{
            onClick: (e) => {
                sendToServer(e, "openNorth");
            }
        }}

        openSouthSubmit={{
            onClick: (e) => {
                sendToServer(e, "openSouth");
            }
        }}

        root={{ref}}
        {...props}
    />;
}

const ActivityQuestions = React.forwardRef(ActivityQuestions_);

export default ActivityQuestions;
