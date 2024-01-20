import supabase from "../utils/supabase";

// Function for toggling comment like
export async function toggleCommentLike(userId, commentId) {
  try {
    // Make a request to the PostgreSQL function toggle_comment_like
    const { data, error } = await supabase.rpc("toggle_comment_like", {
      p_user_id: userId,
      p_comment_id: commentId,
    });

    if (error) {
      console.error("Error toggling comment like:", error.message);
    } else {
      console.log("Toggle successful:", data);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Function for toggling proposal vote
export async function toggleProposalVote(userId, proposalId) {
  try {
    // Make a request to the PostgreSQL function toggle_proposal_vote
    const { data, error } = await supabase.rpc("toggle_proposal_vote", {
      p_user_id: userId,
      p_proposal_id: proposalId,
    });

    if (error) {
      console.error("Error toggling proposal vote:", error.message);
    } else {
      console.log("Toggle successful:", data);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}
export async function addComment(createdByUserId, commentText, modelLocation) {
  try {
    // Make a request to insert a new comment into the comments table
    const { data, error } = await supabase.from("comments").upsert([
      {
        createdByUserId,
        likesCount: 0, // Default value for likesCount
        commentText,
        modelLocation,
      },
    ]);

    if (error) {
      console.error("Error adding comment:", error.message);
    } else {
      console.log("Comment added successfully:", data);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}
