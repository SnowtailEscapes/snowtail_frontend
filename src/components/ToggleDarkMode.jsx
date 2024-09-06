// src/components/DarkModeToggle.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/slice/darkModeSlice';
import dark from "../../public/dark.png";
import light from "../../public/white.png";

const DarkModeToggle = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

    const handleToggle = () => {
        dispatch(toggleDarkMode());
    };

    return (
        <div onClick={handleToggle}>
            {isDarkMode ? <button className='btn bg-white'>
                <img width={30} height={30} src={dark} /> Dark
            </button> :
                <button className='btn bg-black text-white'>
                    <img width={30} height={20} src={light} /> Light
                </button>
            }
        </div>
    );
};

export default DarkModeToggle;
