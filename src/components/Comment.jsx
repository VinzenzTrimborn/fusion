import * as React from "react";
import {PlasmicComment} from "./plasmic/fusion_lab/PlasmicComment";

function Comment_({comment, lookAt, changeLike, ...props}, ref) {
    const {likes, text, cameraPosition, commentPosition} = comment;
    return <PlasmicComment
        likes={likes}
        liked={comment.likedByUser}
        text={text}
        likeButton={{
            onClick: () => changeLike(comment)
        }}
        showLocation={{
            onClick: () => lookAt(cameraPosition, commentPosition)
        }}
        root={{ref}}
        {...props}
    />;
}

const Comment = React.forwardRef(Comment_
    )
;

export default Comment;
