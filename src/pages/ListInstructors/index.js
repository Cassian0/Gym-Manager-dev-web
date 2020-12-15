import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import api from '../../services/api';

import '../../../src/index.css';

function ListInstructors() {
    const [instructors, setInstructors] = useState([]);

    useEffect(async () => {
        const response = await api.get('/instructors');
        setInstructors(response.data);
    }, []);

    return (
        
        <div class="card table-container">
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
                                    <img src="" alt="Foto do Instrutor" />
                                    {instructor.name}</td>
                                <td>
                                    {instructor.services}
                                </td>

                                <td>
                                    <Link to={`/instructor/${instructor.id}`}>ver</Link>
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
