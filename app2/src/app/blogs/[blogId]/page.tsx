import { notFound } from "next/navigation";
import React from "react";

const Blogs = ({
  params,
}: {
  params: {
    blogId: string;
  };
}) => {
  if (parseInt(params.blogId) > 1000) {
    notFound();
  }
  return <div>Blog : {params.blogId}</div>;
};

export default Blogs;
