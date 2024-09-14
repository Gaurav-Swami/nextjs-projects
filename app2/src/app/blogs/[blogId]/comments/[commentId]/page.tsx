import React from "react";

const showComment = ({
  params,
}: {
  params: { blogId: string; commentId: string };
}) => {
  return (
    <div>
      Showing comment no-{params.commentId} for blog: {params.blogId}
    </div>
  );
};

export default showComment;
