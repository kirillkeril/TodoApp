import React from 'react';
import './menu.css'

const Menu = () => {
    return (
        <menu className="menu">
            <button className="menu-item"><i className="icofont-navigation-menu"></i></button>
            <button className="menu-item"><i className="add-todo icofont-plus-circle"></i></button>
            <button className="menu-item"><i className="icofont-search"></i></button>
        </menu>
    );
};

export default Menu;