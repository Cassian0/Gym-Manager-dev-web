import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

function Header() {
    return (
        <div class="container">
            <header>
                <div class="links">
                    <h1>Just Gym</h1>
                    <div class="links-page">
                        <Link to="/list-instructor">Instrutores</Link>
                        <Link to="/list-member">Membros</Link>
                    </div>
                </div>
            </header>
        </div>
    )
};

export default Header;