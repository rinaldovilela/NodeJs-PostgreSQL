"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Pets {
  id: number; 
  nome: string;
  especie: string;
  raca: string;
  idade: number;
  sexo: string;
  proprietario_id: number; 
  
}

const Pets: React.FC = () => {
  const [ pets, setPets] = useState<Pets[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:3001/pets');
        setPets(response.data);
      } catch (err) {
        setError('Erro ao buscar pets');
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className='font-extralight  text-center text-cyan-50 bg-orange-400 '>Tutores</h1>
      <ul className='font-light border py-3 px-3'>
        {pets.map(pets => (
          <li className='flex flex-col gap-1 px-3 py-3 border border-amber-600 rounded-md font' key={pets.id}>
            <p className='font-bold border border-collapse'>{pets.nome}</p>
            <section className='flex flex-row gap-2'>
              <p>Especie : {pets.especie} </p>
            <p>Raça: {pets.raca}</p>
            <p>Idade: {pets.idade}</p>
            </section>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Pets;
