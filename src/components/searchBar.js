import React, { useState } from "react";

const SearchBar = ({onSearch})=>{
    const [inputValue, setInputValue]=useState('');
    const handleSearch =()=>{
        onSearch(inputValue);
    }
    return(
        <div className="search-bar">
            <input type="text" placeholder="nhập tên phim..."
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
           onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        handleSearch();
                    }
                }}
            ></input>
            <button onClick={handleSearch}>Tìm kiếm</button>
        </div>
    );
};
export default SearchBar;