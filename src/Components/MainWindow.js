import React from "react";
import Post from "./Post";

function MainWindow({ inputText, date, name, post }) {
  return (
    <div className="main-window">
      {
        post.map(card => (
            <Post inputText={card.advise} name={card.name} date={card.date} key={card.id} />
        ))
      }
    </div>
  );
}

export default MainWindow;
