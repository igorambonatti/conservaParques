import React, { useRef, useState, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { ApplicationState } from '../../store/index';
import { Container } from './styles';
import Input from '../../components/Input';
import { saveResult } from '../../store/ducks/formList/actions';
import getValidationErrors from '../../utils/getValidationErrors';

const ResultForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const dispatch = useDispatch();
  const { park } = useSelector(
    (state: ApplicationState) => state.formList.data,
  );

  // const [item, setItem] = useState({
  //   gc: park?.DC,
  //   act: park?.ACT,
  //   con: park?.CON,
  //   are: park?.ARE,
  //   var: park?.VAR,
  // });
  const history = useHistory();

  // const onChangeInput = (type: string, value: string): any => {
  //   setItem((current) => ({ ...current, [type]: value }));
  // };

  const handleSubmit = useCallback(async (data: any) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        act: Yup.number()
          .required('insira um número')
          .min(0, 'Insira um numero maior que 0')
          .max(1, 'Insira um numero menor que 1')
          .typeError('insira um número separado por ponto ex: 0.82'),
        con: Yup.number()
          .required('insira um número')
          .min(0, 'Insira um numero maior que 0')
          .max(1, 'Insira um numero menor que 1')
          .typeError('insira um número separado por ponto ex: 0.82'),
        are: Yup.number()
          .required('insira um número')
          .min(0, 'Insira um numero maior que 0')
          .max(1, 'Insira um numero menor que 1')
          .typeError('insira um número separado por ponto ex: 0.82'),
        var: Yup.number()
          .required('insira um número')
          .min(0, 'Insira um numero maior que 0')
          .max(1, 'Insira um numero menor que 1')
          .typeError('insira um número separado por ponto ex: 0.82'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      const gcResult =
        1.1269 -
        0.7131 * data?.var +
        0.4907 * data?.act +
        0.9835 * data?.are +
        0.9062 * data?.con;
      const dataResult = { ...data, gc: gcResult };
      dispatch(saveResult(dataResult));
      history.push('/resume');
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);
  const initialItem = {
    act: park?.ACT,
    con: park?.CON,
    are: park?.ARE,
    var: park?.VAR,
  };
  return (
    <Container>
      <header>
        <h1>Você selecionou: {park?.name}</h1>
      </header>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={initialItem}>
        <div>
          <div>
            <div>
              <div>
                <div className="total">
                  <h2 className="contrast">
                    Grau de Conservação inicial (GC){' '}
                  </h2>
                  <h1>=</h1>
                  <span className="contrast">{park?.DC}</span>
                </div>
                {/* <div>
                  <h2>Grau de Conservação (GC) </h2>
                  <h1>=</h1>
                  <Input
                    name="gc"
                    type="number"
                    defaultValue={park?.DC}
                    onChange={(e) => onChangeInput('gc', e.target.value)}
                  />
               </div>*/}
                <div>
                  <div>
                    <div>
                      <div>
                        <h2>
                          Atividades recreativas à disposição dos visitantes
                        </h2>
                        <h1>=</h1>
                        <span>{park?.ACT}</span>
                      </div>
                      <div>
                        <h2>Inserir novo</h2>
                        <h1>=</h1>
                        <Input
                          name="act"
                          // defaultValue={park?.ACT}
                          // onChange={(e) => onChangeInput('act', e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <h2>Concessões privadas</h2>
                        <h1>=</h1>
                        <span>{park?.CON}</span>
                      </div>
                      <div>
                        <h2>Inserir novo</h2>
                        <h1>=</h1>
                        <Input
                          name="con"
                          // defaultValue={park?.CON}
                          // onChange={(e) => onChangeInput('con', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <h2>Áreas de pesquisa realizadas no parque</h2>
                        <h1>=</h1>
                        <span>{park?.ARE}</span>
                      </div>
                      <div>
                        <h2>Inserir novo</h2>
                        <h1>=</h1>
                        <Input
                          name="are"
                          // defaultValue={park?.ARE}
                          // onChange={(e) => onChangeInput('are', e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <h2>
                          Variação do número de visitantes Entre 2012 e 2019
                        </h2>
                        <h1>=</h1>
                        <span>{park?.VAR}</span>
                      </div>
                      <div>
                        <h2>Inserir novo</h2>
                        <h1>=</h1>
                        <Input
                          name="var"
                          // defaultValue={park?.VAR}
                          // onChange={(e) => onChangeInput('var', e.target.value)}
                        />
                      </div>
                      <span className="info">
                        *Os valores inseridos devem estar entre 0 e 1, e
                        digitados com “ponto” em vez de “vírgula”. Exemplo: 0,5
                        (errado) X 0.5 (certo)
                      </span>
                    </div>
                  </div>
                </div>
                {/* <div className="total">
                  <h2>Grau de Conservação obtido com os cálculos</h2>
                  <h1>=</h1>
                  <span>
                    {(
                      1.1269 -
                      0.7131 * item?.var +
                      0.4907 * item?.act +
                      0.9835 * item?.are +
                      0.9062 * item?.con
                    ).toFixed(7)}
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <button type="submit">Continuar</button>
        <button
          onClick={() => {
            history.push('/details');
          }}
        >
          Voltar
        </button>
      </Form>
    </Container>
  );
};
export default ResultForm;
