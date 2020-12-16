import React, { useState } from 'react';
import api from '../../../src/services/api';

import '../../../src/index.css';

function StoreMember() {
    const [name, setName] = useState('');
    const [avatar_url, setAvatar_url] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    async function salvar() {
        try {
            await api.post('/instructors/:instructor_id/members', {
                avatar_url: avatar_url,
                name: name,
                email: email,
                gender: gender,
                height: height,
                weight: weight
            });

        } catch (erro) {
        console.log('Erro no cadastro de membro')
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
            <div>Membro</div>
            <div>
                <input id="membro"
                    placeholder="Nome do Membro"
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
                <span><input type="radio" id="instructor-gender" value={gender} checked="checked" onChange={event => setGender(event.target.value)} />Masculino</span>
                <span><input type="radio" id="instructor-gender" value={gender} checked="checked" onChange={event => setGender(event.target.value)} />Feminino</span>
            </div>
        </div>

        <div className="item">
            <div>Altura (cm)</div>
            <div>
                <input
                    id="height" placeholder=""
                    value={height}
                    onChange={event => setHeight(event.target.value)}
                />
            </div>
        </div>

        <div className="item">
            <div>Peso (kg)</div>
            <div>
                <input
                    id="weight" placeholder=""
                    value={weight}
                    onChange={event => setWeight(event.target.value)}
                />
            </div>
        </div>

        <button type="submit" onClick={salvar}>Salvar</button>

    </form>
    )
};

export default StoreMember;