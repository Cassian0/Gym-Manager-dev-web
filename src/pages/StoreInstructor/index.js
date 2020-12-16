import React, { useState } from 'react';
import api from '../../../src/services/api';

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


        <form className="details">

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
                <span><input type="radio" id="instructor-gender" value={gender} checked={this.state.gender==='Masculino'} onChange={event => setGender(event.target.value)} />Masculino</span>
                <span><input type="radio" id="instructor-gender" value={gender} checked={this.state.gender==='Feminino'} onChange={event => setGender(event.target.value)} />Feminino</span>
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

        <button type="submit" onClick={salvar}>Salvar</button>

    </form>
    )
};

export default StoreInstructor;