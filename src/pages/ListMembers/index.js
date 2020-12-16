import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import api from '../../services/api.js';

import '../../../src/index.css';

function ListMembers(){
    const [members, setMembers] = useState([]);

    useEffect(async () => {
        const response = await api.get('/members');
        setMembers(response.data);
    }, 
    []);

    return (
        
        <div className="table-container">
            <Link to="/store-member">Novo</Link>
            <table width="100%">
                <thead>
                    <tr>
                    <th>Membro</th>
                    <th>Email</th>
                    <th>Altura</th>
                    <th>Peso</th>
                    <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        members.map(member => (

                            <tr key={member.id}>

                                <td>
                                    <img src={ member.avatar_url } alt="Foto do Membro" />
                                    {member.name}</td>
                                <td>
                                    {member.email}
                                </td>
                                <td>
                                    {member.weight}
                                </td>
                                <td>
                                    {member.height}
                                </td>

                                <td>
                                    <Link to={`/members/${member.id}`}>ver</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
};

export default ListMembers;