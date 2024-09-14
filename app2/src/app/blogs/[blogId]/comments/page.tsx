import React from "react";

const Comments = ({ params }: { params: { blogId: string } }) => {
  return <div>Showing Comments for blog: {params.blogId}</div>;
};

export default Comments;
