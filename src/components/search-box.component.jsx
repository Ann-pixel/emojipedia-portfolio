import React from "react";


export const SearchBox =({value, placeholder, handleChange})=>(  
<input 
    className="search"
    type="search" 
    value ={value}
    placeholder={placeholder} 
    onChange={handleChange}  
    />
    );
export default SearchBox;