import React from "react";

function EmojiCard ({emojiTerm}) {

    return(
        <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label={emojiTerm.name}>
            {emojiTerm.emoji}
          </span>
          <span>{emojiTerm.name}</span>
        </dt>
        <dd>{emojiTerm.meaning}</dd>
      </div>
    );
}
export default EmojiCard;