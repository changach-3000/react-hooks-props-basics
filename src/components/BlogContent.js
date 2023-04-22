import React from "react";

function BlogContent(props) {
  return <div id="blog-content">{props.articleText} {props.readers}</div>;
}

export default BlogContent;
