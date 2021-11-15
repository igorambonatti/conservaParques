import React from 'react';

import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import img from '../../assets/echo.jpg';
import img2 from '../../assets/ecologia.jpg';
import img3 from '../../assets/ufsc.jpg';

const Information: React.FC = () => {
  const history = useHistory();

  const handleSubmit = (): any => {
    history.push('/details');
  };
  return (
    <Container>
      <header>
        <h1>
          O Conserva Parques é parte de um projeto de doutorado do programa de
          pós-graduação em Ecologia da Universidade Federal de Santa Catarina.
        </h1>
      </header>
      <div>
        <span>
          Quer conhecer os dados por parque ou ver as dúvidas mais frequentes e
          suas respostas (FAQ) baixe nossos arquivos em PDF, clique no botão
          abaixo.
        </span>
      </div>
      <a href="https://drive.google.com/file/d/1n-1GUEMpL9dz0DL3SJF9Bc0uEULgHm-2/view" target = "_blank">Download</a>
      <span>
        Contato para sugestões e informações: conservaparques@gmail.com
      </span>
      <button
        onClick={() => {
          history.push('/');
        }}
      >
        Início
      </button>
      <span>Apoio:</span>
      <div className="logos">
        <img src={img} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <span className="credits">
        Elaboração: Michel Omena, Rafael Escrich e Igor Ambonatti. Versão:
        06/09/2021
      </span>
    </Container>
  );
};
export default Information;
