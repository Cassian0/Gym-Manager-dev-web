import React, { useState } from 'react';

import '../../../src/index.css';

function StoreInstructor() {
    const [name, setName] = useState('');
    const [avatar_url, setAvatar_url] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [services, setServices] = useState('');

    return (
            <div className='item'>
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
                <div htmlFor="instructor">Instrutor</div>
                <div>
                    <input id="instructor"
                        placeholder="Nome do Instrutor"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </div>
            </div>

            <div className="item">
                <div htmlFor="date-birth">Data de Nascimento</div>
                <div>
                    <input type="date"
                        id="date-birth"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>
            </div>

            <div className="item">
                <div htmlFor="instructor-gender">Sexo</div>
                <div>
                    <span><input type="radio" id="instructor-gender" value={gender} checked="checked" onChange={event => setGender(event.target.value)} />Masculino</span>
                    <span><input type="radio" id="instructor-gender" value={gender} checked="checked" onChange={event => setGender(event.target.value)} />Feminino</span>
                </div>
            </div>

            <div className="item">
                <div htmlFor="services">Área de atuação</div>
                <div>
                    <input
                        id="services" placeholder="Separe os serviços prestados por vírgula"
                        value={services}
                        onChange={event => setServices(event.target.value)}
                    />
                </div>
            </div>

            <button type="submit"> Salvar </button>
            
    )
};

export default StoreInstructor;