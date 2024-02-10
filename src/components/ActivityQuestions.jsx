import * as React from "react";
import {PlasmicActivityQuestions} from "./plasmic/fusion_lab/PlasmicActivityQuestions";
import {useContext} from "react";
import MyContext from "../MyContext";

function ActivityQuestions_(props, ref) {


    const [grade, setGrade] = React.useState("");
    const [often, setOften] = React.useState("");
    const [notLike, setNotLike] = React.useState("");
    const [improvementComment, setImprovementComment] = React.useState("");

    const {state} = useContext(MyContext);

    const sendToServer = (e, activityName) => {
        e.preventDefault();
        const object = {
            grade: grade,
            often: often,
            notLike: notLike,
            improvementComment: improvementComment
        }
        console.log(object);
        console.log(activityName);
        console.log("User ID: " + state.userID);
        //ToDo Koray: Save the answers in the database and associate it with the userID

        //clear the form
        setGrade("");
        setOften("");
        setNotLike("");
        setImprovementComment("");
    }


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
