import React from 'react';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import img from '../../assets/mapa.jpg';
import { ApplicationState } from '~/store';

const Mapa: React.FC = () => {
  const { park } = useSelector(
    (state: ApplicationState) => state.formList.data,
  );
  const history = useHistory();

  const handleSubmit = (): any => {
    history.push('/details');
  };
  return (
    <Container>
      <header>
        <h1>Mapa</h1>
      </header>
      <div>
        <span>
          O parque selecionado refere-se ao número{' '}
          <b style={{ color: '#2acb47' }}>{park?.mapa}</b> no mapa abaixo
        </span>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
      <button onClick={handleSubmit}>Continuar</button>
      <button
        onClick={() => {
          history.push('/information');
        }}
      >
        Voltar
      </button>
    </Container>
  );
};
export default Mapa;
