import * as React from "react";
import {PlasmicComment} from "./plasmic/fusion_lab/PlasmicComment";

function Comment_({comment, lookAt, like, ...props}, ref) {
    const {likes, text, username, cameraPosition, commentPosition} = comment;
    return <PlasmicComment
        likes={likes}
        text={text}
        likeButton={{
            onClick: () => like(comment)
        }}
        showLocation={{
            onClick: () => lookAt(cameraPosition, commentPosition)
        }}
        username={username}
        root={{ref}}
        {...props}
    />;
}

const Comment = React.forwardRef(Comment_
    )
;

export default Comment;
