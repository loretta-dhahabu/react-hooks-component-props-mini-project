import React from "react";
function Article ( { title, date = "January 1, 1970", minutes, preview } )
{
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} {minToRead(minutes)}
      </small>
      <p>{preview}</p>
    </article>
  );
}

function minToRead(minutes) {
  let numberOfEmojis = 0;
  if (minutes < 30) {
    numberOfEmojis = Math.round(minutes / 5);
    return "☕️".repeat(numberOfEmojis) + ` ${minutes} min read`;
  } else {
    numberOfEmojis = Math.round(minutes / 10);
    return "🍱 ".repeat(numberOfEmojis) + ` ${minutes} min read`;
  }
}

export default Article;