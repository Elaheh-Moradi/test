import {createContext} from 'react';
import './style.css'

export const theme = {
    light:{
        color: 'var(--blue)',
        background:'blue',
    },
    dark:{
        color:'pink',
        background:'#222222'
    }
}

const ThemeContext=createContext();

export default ThemeContext;