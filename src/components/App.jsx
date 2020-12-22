import React, {useState, useEffect} from "react";
import EmojiList from "./emoji-list";
import emojipedia from "../emojipedia";
import SearchBox from "./search-box.component";


function App() {

  const [emojis, setEmojis] = useState(emojipedia);
  const [searchField, setSearchField] = useState('');

  

  function handleChange(e) {
    setSearchField(e.target.value); 
  
  }
  useEffect(() => {
    const results = emojipedia.filter(emoji => 
          emoji.name.toLowerCase().includes(searchField.toLowerCase())
        );
    setEmojis(results)
  },[searchField]);
 

  return (
  
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <SearchBox placeholder="search emoji"
        handleChange= {handleChange}
        value={searchField} />
      <dl className="dictionary">
       <EmojiList emojiArr = {emojis}/>
      </dl>
    </div>
  );
}


export default App;
