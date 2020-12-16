import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import api from '../../services/api.js';

import '../../../src/index.css';

function ListInstructors() {
    const [instructors, setInstructors] = useState([]);

    useEffect(async () => {
        const response = await api.get('/instructors');
        setInstructors(response.data);
    }, 
    []);

    return (
        
        <div className="table-container">
            <Link to="/store-instructor">Novo</Link>
            <table width="100%">
                <thead>
                    <tr>
                        <th>Instructor</th>
                        <th>Atendimento</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        instructors.map(instructor => (

                            <tr key={instructor.id}>

                                <td>
                                    <img src={ instructor.avatar_url } alt="Foto do Instrutor" />
                                    {instructor.name}</td>
                                <td>
                                    {instructor.services}
                                </td>

                                <td>
                                    <Link to={`/instructors/${instructor.id}`}>ver</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
};

export default ListInstructors;
