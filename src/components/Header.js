import React from 'react'

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className='header'>
            <h1>Notify</h1>
            <button onClick={() =>
                handleToggleDarkMode(
                    (previousDarkMode) => !previousDarkMode)
            }
                className='toggle-button'>Toggle Theme</button>
        </div>
    )
}

export default Header