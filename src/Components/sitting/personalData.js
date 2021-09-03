import './sitting.css';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function PersonalData() {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    console.log(name, cpf)

    const { idFilme, idSessao } = useParams();


    return (
        <form className="buyerData">
                <label for="name">Nome do comprador:</label>
                <input className="data" type="text" id="name" name="name" placeholder="Digite seu nome..." value={name} onChange={(event) => setName(event.target.value)}  />
                <label for="cpf">CPF do comprador:</label>
                <input className="data" type="text" id="cpf" name="cpf" placeholder="Digite seu CPF" value={cpf} onChange={(event) => setCpf(event.target.value)} />
                <Link to={`/sessoes/${idFilme}/assentos/${idSessao}/sucesso`}><input className="submit" type="submit" value="Reservar assento(s)" /></Link>
        </form>
    )
}