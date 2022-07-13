import React from "react";
import Article from "./Article"
function ArticleList (props)
{
    // console.log(props);

    const Articles = props.posts.map( ( post ) =>
    {
        return (
          <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
            minutes={post.minutes}
          />
        );
    })
    return (
        <main>
            {Articles}

        </main>
    )
}
export default ArticleList;