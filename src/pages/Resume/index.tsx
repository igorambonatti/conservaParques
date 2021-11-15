import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ApplicationState } from '../../store/index';
import { Container } from './styles';

const Resume: React.FC = () => {
  const { park } = useSelector(
    (state: ApplicationState) => state.formList.data,
  );
  const { result } = useSelector((state: ApplicationState) => state.formList);
  const history = useHistory();
  const handleSubmit = (): any => {
    history.push('/contact');
  };
  return (
    <Container>
      <header>
        <h1>Você selecionou: {park?.name}</h1>
      </header>
      <div>
        <div>
          <div>
            <div>
              <div>
                <h2 className="contrast">Grau de Conservação (GC) </h2>
                <h1>=</h1>
                <span className="contrast">{park?.DC}</span>
              </div>
              <div>
                <h2>Posição original</h2>
                <h1>=</h1>
                <span>{park?.position}ª</span>
              </div>
              <div>
                <h2>Grau de Conservação obtido</h2>
                <h1>=</h1>
                <span>{(result?.gc).toFixed(7)}</span>
              </div>
              <div>
                <h2>
                  Comparação com a média geral dos parques nacionais brasileiros
                </h2>
                <h1>=</h1>
                <span>
                  {parseFloat(result?.gc) > 1.846
                    ? 'Acima da média'
                    : 'Abaixo da média'}
                </span>
              </div>
            </div>
            <span className="info">
              *Limites para Grau de conservação <br /> Mínimo = 0,413 e Máximo =
              3,507
            </span>
          </div>
        </div>
      </div>
      <button onClick={handleSubmit}>Continuar</button>
      <button
        onClick={() => {
          history.push('/result');
        }}
      >
        Voltar
      </button>
    </Container>
  );
};
export default Resume;
