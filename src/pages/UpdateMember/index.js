import React, { useState, useEffect } from 'react';

import { useRouteMatch, Link } from 'react-router-dom';

import api from '../../../src/services/api';

import '../../../src/index.css';

function UpdateMember() {
    const { params } = useRouteMatch();
    const [avatar_url, setAvatar_url] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    useEffect(async () => {
        const response = await api.get(`/members/${params.id}`);
        const { data } = response;
        data.map(data => ( 
        setAvatar_url(data.avatar_url),
        setName(data.name),
        setEmail(data.email),
        setGender(data.gender),
        setHeight(data.height),
        setWeight(data.weight)
        )) 
    }, []);

    async function salvar() {
        try {
            await api.put(`/members/${params.id}`, {
                avatar_url: avatar_url,
                name: name,
                email: email,
                gender: gender,
                height: height,
                weight:weight,
            });

        } catch (erro) {
        console.log('Erro na edição do instrutor')
        }
    }


    return (

        <form className="card">
          <div className="avatar">
            <div className="img-centro">
                  <img src={avatar_url} alt="Foto do Membro"></img>
                </div>

            </div>
            <div className="details">
                <h3>Editar Membro</h3>
            <div class="item">
                <div>Avatar URL</div>
                <div>
                    <input type="url"
                        name="avatar_url" placeholder="http://"
                        value={avatar_url}
                        onChange={event => setAvatar_url(event.target.value)}
                    />
                </div>
            </div>

            <div class="item">
                <div>Nome</div>
                <div>
                    <input type="text"
                        name="name"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </div>
            </div>

            <div class="item">
                <div>Email</div>
                <div>
                    <input
                        name="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>
            </div>

            <div class="item">
                <div>Sexo</div>
                <div>
                <input
                    id="gender" 
                    value={gender}
                    onChange={event => setGender(event.target.value)}
                />
                </div>
            </div>

            <div class="item">
                <div>Peso (kg)</div>
                <div>
                    <input type="number"
                        name="weight"
                        value={weight}
                        onChange={event => setWeight(event.target.value)}
                    />
                </div>
            </div>

            <div class="item">
                <div>Altura (cm)</div>
                <div>
                    <input type="number"
                        name="height"
                        value={height}
                        onChange={event => setHeight(event.target.value)}
                    />
                </div>
            </div>

            {/* <button type="submit" onClick={salvar}>Salvar</button> */}
            <Link to={`/members/${params.id}`}  onClick={salvar} type="submit" className="btn" >Salvar</ Link>
            </div>
        </form>
    )
};

export default UpdateMember;