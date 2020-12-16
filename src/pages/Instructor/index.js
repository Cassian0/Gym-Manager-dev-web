import React, { useEffect, useState } from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import api from '../../../src/services/api';

import '../../../src/index.css';

function Instructor() {
    const [instructors, setInstructors] = useState([]);
    const { params } = useRouteMatch();

    

    useEffect(async () => {
        const response = await api.get(`/instructors/${params.id}`);
        setInstructors(response.data);
    }, [])

    async function excluir(id) {
        try {
            await api.delete(`/instructors/${id}`);
        } catch (erro) {
            console.log('Erro ao deletar instrutor')
        }
    }

    return (
        <div className="card">
            <section className="avatar">

            {
                    instructors.map(instructor => (
                       
                    <div className="img-centro">
                       <img src={instructor.avatar_url} />
                    </div>
                        
                    ))}
                
            

            </section>


            <section className="details">

                <h3>Detalhes</h3>

                {
                    instructors.map(instructor => (
                        <div className="item">
                            <div key={instructor.id}>Instrutor</div>
                            <div>{instructor.name}</div>
                        </div>
                    ))}

                {
                    instructors.map(instructor => (
                        <div className="item">
                            <div key={instructor.id}>Email</div>
                            <div>{instructor.email}</div>
                        </div>
                    ))}

                {
                    instructors.map(instructor => (
                        <div className="item">
                            <div key={instructor.id}>Sexo</div>
                            <div>{instructor.gender}</div>
                        </div>
                    ))}

                {
                    instructors.map(instructor => (
                        <div className="item">
                            <div key={instructor.id}>Acompanhamento</div>
                            <div>

                                <span>{instructor.services}</span>

                            </div>
                        </div>
                    ))}

                {
                    instructors.map(instructor => (
                        <div className="item">
                            <div>Desde</div>
                            <div>{instructor.createdAt}</div>
                        </div>

                    ))}

                    {
                    instructors.map(instructor => (
                        <Link to={`/update-instructors/${instructor.id}`}
                            className="button">Editar </Link>
                    ))
                }
                    {
                    instructors.map(instructor => (
                        <Link onClick={() => excluir(instructor.id)}
                            className="button">Deletar</Link>
                    ))
}
                

            </section>
        </div>
    )
};

export default Instructor;