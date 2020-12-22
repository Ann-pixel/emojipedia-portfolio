import React from "react";
import EmojiCard from "./emoji-cards";

function EmojiList(props) {

return (  
    props.emojiArr.map(emojiTerm => 
       (
      <EmojiCard emojiTerm= {emojiTerm} key= {emojiTerm.id} />
      )
    
    ))
  


}

export default EmojiList;
