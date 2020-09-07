import React from 'react'
import './search-box.styles.css'

export const SearchBox = ( {placeholder, handleChange }) => (
    <input className="search"
    type="search" 
    placeholder= {placeholder}
    onChange={handleChange}
    />
)


//no lifecycle methods, or internal state in functional component
//just gets props and returns html
