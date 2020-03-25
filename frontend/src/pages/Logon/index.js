import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import api from '../../services/api';

function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();
  async function handleLogin(e) {
    e.preventDefault();

    try {
      const respose = await api.post('session', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', respose.data.name);

      history.push('/profile');
    } catch (error) {
      alert('Falha no login, tente novamente');
    }
  }

  return (
    <div className='logon-container'>
      <section className='form'>
        <img src={logoImg} alt='Logo Be The Hero' />
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            type='text'
            placeholder='Sua ID'
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className='button' type='submit'>
            Entrar
          </button>
        </form>
        <Link className='back-link' to='/register'>
          <FiLogIn size={16} color='#E02041' />
          Não tenho cadastro
        </Link>
      </section>
      <img src={heroesImg} alt='Heroes' />
    </div>
  );
}

export default Logon;
