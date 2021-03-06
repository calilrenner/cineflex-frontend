import './sitting.css';
// import React, { useState, useEffect } from 'react';

export default function PersonalData( { setName, setCpf, name, cpf, index } ) {

    return (
        <form className="buyerData">
                <label for="name">Nome do comprador:</label>
                <input className="data" type="text" id={`name${index}`} name={`name${index}`} placeholder="Digite seu nome..." value={name} onChange={(event) => setName(event.target.value)}  />
                <label for="cpf">CPF do comprador:</label>
                <input className="data" type="text" id={`cpf${index}`} name={`cpf${index}`} placeholder="Digite seu CPF" value={cpf} onChange={(event) => setCpf(event.target.value)} />
        </form>
    )
}