import React from "react";

const Documents = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  return (
    <div>
      {params.slug.map((item, index) => (
        <span key={index}>{item}{" "}</span>
      ))}
    </div>
  );
};

export default Documents;
