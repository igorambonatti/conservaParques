import React from 'react';

import { useHistory } from 'react-router-dom';
import { Container } from './styles';

const Information: React.FC = () => {
  const history = useHistory();

  const handleSubmit = (): any => {
    history.push('/mapa');
  };
  return (
    <Container>
      <header>
        <h1>Informações</h1>
      </header>
      <div>
        <span>
          Neste modelo, o grau de conservação (GC) de um Parque Nacional é
          calculado a partir de variáveis de uso público. Trata-se de uma
          fórmula matemática para estimar o nível de conservação da natureza. No
          entanto, se medidas de gestão, por exemplo, ordenamento do turismo e
          fiscalização, não forem tomadas concomitantemente, a relação fica
          apenas no campo das teorias pois efetivamente não refletem causa e
          efeito. Medidas de gestão devem ser executadas para que a conservação
          e uso público caminhem juntos.
        </span>
      </div>

      <a
        href="https://youtu.be/h1MLnUQGxQY"
        target="_blank"
        rel="noreferrer"
      >
        Explicação em vídeo – recomendamos assistir
      </a>

      <button onClick={handleSubmit}>Continuar</button>
      <button
        onClick={() => {
          history.push('/');
        }}
      >
        Voltar
      </button>
    </Container>
  );
};
export default Information;
