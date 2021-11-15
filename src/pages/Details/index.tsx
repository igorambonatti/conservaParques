import React from 'react';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ApplicationState } from '../../store/index';
import { Container } from './styles';

const Details: React.FC = () => {
  const { park } = useSelector(
    (state: ApplicationState) => state.formList.data,
  );
  const history = useHistory();
  const handleSubmit = (): any => {
    history.push('/result');
  };
  return (
    <Container>
      <header>
        <h1>
          Você selecionou: {park?.name}
          <br /> Este parque está na {park?.position}ª posição entre os 74
          parques nacionais brasileiros
        </h1>
        <h1>
          Calculamos o grau de conservação a partir de variáveis de Uso Público
        </h1>
      </header>
      <div>
        <div>
          <h2>Valores utilizados</h2>
          <span>
            *Os dados quantitativos foram padronizados em valores entre 0 e 1
            para se fazer a comparação entre eles. O maior valor dentro do
            conjunto de dados de Atividades, Áreas, Concessões e Variação foram
            padronizados em 1 e o menor valor 0, os valores intermediários foram
            distribuídos proporcionalmente dentro da faixa entre 0 e 1.
            Permitindo assim a comparação das variáveis.
          </span>
          <div>
            <div>
              <div>
                <div>
                  <h2>Grau de Conservação (GC) </h2>
                  <h1>=</h1>
                  <span>{park?.DC}</span>
                </div>
              </div>
              <div>
                <div>
                  <h2>Atividades recreativas à disposição dos visitantes</h2>
                  <h1>=</h1>
                  <span>{park?.ACT}</span>
                </div>
                <span>Referente* a {park?.ACT2} atividades.</span>
              </div>
              <div>
                <div>
                  <h2>Concessões privadas</h2>
                  <h1>=</h1>
                  <span>{park?.CON}</span>
                </div>
                <span>Referente* a {park?.CON2} concessões neste parque.</span>
              </div>
              <div>
                <div>
                  <h2>Áreas de pesquisa realizadas no parque</h2>
                  <h1>=</h1>
                  <span>{park?.ARE}</span>
                </div>
                <span>Referente* a {park?.ARE2} áreas diferentes de pesquisa.</span>
              </div>
              <div>
                <div>
                  <h2>Variação do número de visitantes Entre 2012 e 2019</h2>
                  <h1>=</h1>
                  <span>{park?.VAR}</span>
                </div>
                <span>
                  Referente* a {park?.VAR2} de variação no número de visitantes anual.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleSubmit}>Continuar</button>
      <button
        onClick={() => {
          history.push('/mapa');
        }}
      >
        Voltar
      </button>
    </Container>
  );
};
export default Details;
