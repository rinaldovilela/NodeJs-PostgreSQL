"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Tutor {
  id: number; 
  nome: string;
  telefone: number;
  email: string; 
  
}

const Tutores: React.FC = () => {
  const [tutores, setTutores] = useState<Tutor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTutores = async () => {
      try {
        const response = await axios.get('http://localhost:3001/tutores');
        setTutores(response.data);
      } catch (err) {
        setError('Erro ao buscar tutores');
      } finally {
        setLoading(false);
      }
    };

    fetchTutores();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className='font-extralight  text-center text-cyan-50 bg-orange-400 '>Tutores</h1>
      <ul className='font-light border py-3 px-3'>
        {tutores.map(tutor => (
          <li className='flex flex-col gap-1 px-3 py-3 border border-amber-600 rounded-md' key={tutor.id}>
            <p>{tutor.nome}</p>
            <section className='flex flex-row gap-2'>
              <p>Contatos : </p>
            <p>Telefone: {tutor.telefone}</p>
            <p>E-mail: {tutor.email}</p>
            </section>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Tutores;
