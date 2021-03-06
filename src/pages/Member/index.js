import React, { useEffect, useState } from 'react';

import { Link, useRouteMatch} from 'react-router-dom';

import api from '../../../src/services/api';

import '../../../src/index.css';

function Member() {
    const [members, setMembers] = useState([]);
    const {params} = useRouteMatch();

    useEffect(async () => {
        const response = await api.get(`/members/${params.id}`);
        setMembers(response.data);
    }, [])

    async function excluir(id) {
        try {
            await api.delete(`/members/${id}`);
        } catch (erro) {
            console.log('Erro ao deletar Membro')
        }
    }

    return (
        <div className="card">
            <section className="avatar">
            {
                    members.map(member => (
                       
                    <div className="img-centro">
                       <img src={member.avatar_url} />
                    </div>
                        
                    ))}
            </section>


            <section className="details">

                <h3>Detalhes</h3>

                {
                    members.map(member => (
                        <div className="item">
                            <div key={member.id}>Membro</div>
                            <div>{member.name}</div>
                        </div>
                    ))}

                {
                    members.map(member => (
                        <div className="item">
                            <div key={member.id}>Email</div>
                            <div>{member.email}</div>
                        </div>
                    ))}

                {
                    members.map(member => (
                        <div className="item">
                            <div key={member.id}>Sexo</div>
                            <div>{member.gender}</div>
                        </div>
                    ))}

                {
                    members.map(member => (
                        <div className="item">
                            <div key={member.id}>Peso (kg)</div>
                            <div>

                                <span>{member.weight}</span>

                            </div>
                        </div>
                    ))}
                {
                    members.map(member => (
                        <div className="item">
                            <div key={member.id}>Altura (cm)</div>
                            <div>

                                <span>{member.height}</span>

                            </div>
                        </div>
                    ))}

                {
                    members.map(member => (
                        <div className="item">
                            <div>Desde</div>
                            <div>{member.createdAt}</div>
                        </div>

                    ))}

                    {
                    members.map(member => (
                        <Link to={`/update-member/${member.id}`}
                            className="button">Editar</Link>
                    ))
                }
                {
                    members.map(member => (
                        <Link onClick={() => excluir(member.id)}
                            className="button delete" to="/members">Deletar</Link>
                    ))
}

            </section>
        </div>
    )
};

export default Member;