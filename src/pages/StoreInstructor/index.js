import React, { useState } from 'react';
import api from '../../../src/services/api';
import { Link} from 'react-router-dom';

import '../../../src/index.css';

function StoreInstructor() {

    const [name, setName] = useState('');
    const [avatar_url, setAvatar_url] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [services, setServices] = useState('');

    async function salvar() {
        try {
            await api.post('/instructors', {
                avatar_url: avatar_url,
                name: name,
                email: email,
                gender: gender,
                services: services
            });

        } catch (erro) {
        console.log('Erro no cadastro de instrutor')
        }
    }

    return (

        <form className="card">

        <div className="avatar">
        
            <div className="img-centro">
                <img src="https://source.unsplash.com/collection/3465564/300x300" alt="Foto do Instrutor"></img>
         </div>
        
        </div>
        <div className="details">
        <h3>Novo Instrutor</h3>
        <div className='item'>

        <div>Avatar URL</div>
            <div>
                <input type='url'
                    id='avatar_url'
                    placeholder='http://'
                    value={avatar_url}
                    onChange={event => setAvatar_url(event.target.value)}
                />
            </div>
        </div>


        <div className="item">
            <div>Instrutor</div>
            <div>
                <input id="instructor"
                    placeholder="Nome do Instrutor"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
            </div>
        </div>

        <div className="item">
            <div>Email</div>
            <div>
                <input type="email"
                    id="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
            </div>
        </div>

        <div className="item">
            <div>Sexo</div>
            <div>
            <input
                    id="gender" 
                    value={gender}
                    onChange={event => setGender(event.target.value)}
                />
            </div>
        </div>

        <div className="item">
            <div>Área de atuação</div>
            <div>
                <input
                    id="services" placeholder="Separe os serviços prestados por vírgula"
                    value={services}
                    onChange={event => setServices(event.target.value)}
                />
            </div>
        </div>

        {/* <button type="submit" onClick={salvar}>Salvar</button> */}
        <Link to={'/instructors'}  onClick={salvar} type="submit" className="btn">Salvar</ Link>
        </div>
    </form>
    )
};

export default StoreInstructor;