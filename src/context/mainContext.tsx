import { useState } from 'react';
import constate from 'constate';

const MenuToggle = () => {
    const [status, setStatus] = useState(false);
    const [num,setNum] = useState(0);
    const toggleStatus = () => {setStatus(current => !current)}
    return {
        status,
        num,
        toggleStatus 
    }
}

export const [MenuToggleProvider,menuToggleContext] = constate(MenuToggle);