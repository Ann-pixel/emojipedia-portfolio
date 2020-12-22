import React, {useState} from "react";
import EmojiList from "./emoji-list";
import emojipedia from "../emojipedia";
import SearchBox from "./search-box.component";


function App() {

  const [emojis, setEmojis] = useState(emojipedia);
  const [searchField, setSearchField] = useState('');
  const handleChange = (e) => {
    setSearchField(e.target.value); 
    updateEmojis(searchField);
  }

  function updateEmojis(searchField){
    setEmojis( emojis.filter(emoji => 
      emoji.name.toLowerCase().includes(searchField.toLowerCase())
    )); 
  }

  
 

  return (
  
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <SearchBox placeholder="Search Emojis.."
        handleChange= {handleChange} />
      <dl className="dictionary">
       <EmojiList emojiArr = {emojis}/>
      </dl>
    </div>
  );
}


export default App;
