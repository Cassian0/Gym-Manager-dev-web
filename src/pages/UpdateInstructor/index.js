import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../../src/services/api';


import '../../../src/index.css';
import Instructor from '../Instructor';


function UpdateInstructor() {
    const [name, setName] = useState('');
    const [avatar_url, setAvatar_url] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [services, setServices] = useState('');
    const { params } = useRouteMatch();

    useEffect(async() => {
            if (params.id) {
            const response = await api.get(`/instructors/${params.id}`) //recebemos o id
            const { data } = response;// armazenamos no data 
            data.map(data => ( 
            setName(data.name),
            setAvatar_url(data.avatar_url),
            setEmail(data.email),
            setGender(data.gender),
            setServices(data.services)
             )) }
        
    }, []);

    async function salvar() {
        try {
            
            await api.put(`/instructors/${params.id}`, {
                avatar_url: avatar_url,
                name: name,
                email: email,
                gender: gender,
                services: services
            });
        

        } catch (erro) {
        console.log('Erro na edição do instrutor')
        }
    }
  
    return (
        <form className="card">
          <div className="avatar">
            <div className="img-centro">
                  <img src={avatar_url} alt="Foto do Instrutor"></img>
                </div>

            </div>
            <div className="details">
                <h3>Editar Instrutor</h3>
          <div className='item'>

        <div>Avatar URL</div>
            <div>
                <input type='url'
                    id='avatar_url'
                    placeholder='http://'
                    value={avatar_url}
                    onChange={event => setAvatar_url(event.target.value)}
                ></input>
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

        
        <Link to={`/instructors/${params.id}`}  onClick={salvar} type="submit" className="btn">Salvar</ Link>
        </div>
    </form>
    )}


export default UpdateInstructor;