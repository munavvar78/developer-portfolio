import React, { createContext, useState } from 'react'

import { themeData, themeDataLight } from '../data/themeData'
import './ThemeContext.css'
import sun from '../assets/svg/sun.png';
import moon from '../assets/svg/moon.png'

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    console.log(sun)
    // eslint-disable-next-line
    const [theme, setTheme] = useState(themeData.theme)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const changeTheme = () => {
        if (theme === themeData.theme) {
            setTheme(themeDataLight.theme);
        }
        else {
            setTheme(themeData.theme);
        }
    }

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const value = { theme, drawerOpen, setHandleDrawer }
    return (
        <>
            <div className='LightDarkButton'>
                <input type="checkbox" class="checkbox" id="checkbox" onClick={changeTheme} />
                <label for="checkbox" class="label">
                    <img src={sun} alt="" className='w-sun' />
                    <img src={moon} alt="" className='w-moon' />
                    <div class='ball'> </div>
                </label>
            </div>
            <ThemeContext.Provider value={value}>
                {props.children}
            </ThemeContext.Provider>
        </>
    )
}


export default ThemeContextProvider