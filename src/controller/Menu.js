import React, { useState } from 'react'

function Menu() {
    const [menu, setMenu] = useState("TEST");
    
    function getMenu() {
        return menu;
    }
}

export default Menu