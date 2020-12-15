import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import api from '../../../src/services/api';

import '../../../src/index.css';

function Instructor() {
    const [instructors, setInstructors] = useState([]);

    useEffect(async () => {
        const response = await api.get('/instructors');
        setInstructors(response.data);
    }, []);

    return (
        <div className="card">
            <section className="avatar">
                <div className="img-centro">
                    <img src="" />
                </div>
            </section>


            <section className="details">

                <h3>Detalhes</h3>

                {
                    instructors.map(instructor => (
                        <div className="item">
                            <div key={instructor.id}>Instrutor</div>
                            <div>{instructor.name}</div>
                        </div>
                    ))};

                {
                    instructors.map(instructor => (
                        <div className="item">
                            <div key={instructor.id}>Idade</div>
                            <div>{instructor.age}</div>
                        </div>
                    ))};

                {
                    instructors.map(instructor => (
                        <div className="item">
                            <div key={instructor.id}>Sexo</div>
                            <div>{instructor.render}</div>
                        </div>
                    ))};

                {
                    instructors.map(instructor => (
                        <div className="item">
                            <div key={instructor.id}>Acompanhamento</div>
                            <div>

                                <span>{instructor.services}</span>

                            </div>
                        </div>
                    ))};

                {
                    instructors.map(instructor => (
                        <div className="item">
                            <div>Desde</div>
                            <div>{instructor}</div>
                        </div>

                    ))};

                    {
                    instructors.map(instructor => (
                        <Link to={`/store-instructor/${instructor.id}`}
                            className="button">Editar </Link>
                    ))
                };

            </section>
        </div>
    )
};

export default Instructor;