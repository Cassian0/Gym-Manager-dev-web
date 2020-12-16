import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';



function Header() {
    return (
        <div className="head">
                <div className="links">
                    <h1>Just Gym</h1>
                    <div className="links-page">
                        <Link to="/instructors">Instrutores</Link>
                        <Link to="/members">Membros</Link>
                    </div>
                </div>
        </div>
    )
};

export default Header;