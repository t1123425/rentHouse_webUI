import { useState } from 'react';
import createUseContext from 'constate';

const MenuToggle = () => {
    const [status, setStatus] = useState(false);
    const toggleStatus = () => {setStatus(current => !current)}
    return {
        status,
        toggleStatus 
    }
}

export const menuToggleContext = createUseContext(MenuToggle);