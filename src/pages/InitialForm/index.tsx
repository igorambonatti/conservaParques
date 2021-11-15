import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ParkData from './parkData.json';
import { Container } from './styles';
import { saveData } from '../../store/ducks/formList/actions';
import logo from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 300,
    color: '#ff2',
  },
}));

const InitialForm: React.FC = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const [parks, setParks] = useState();
  const classes = useStyles();
  const [park, setPark] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: any) => {
    setPark(event.target.value);
    console.log(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleSubmit = () => {
    if (park) {
      dispatch(saveData({ park }));
      history.push('/information');
    }
  };

  useEffect(() => {
    setParks(ParkData);
  }, []);

  return (
    <Container>
       <div>
        <img src={logo} alt="" />
      </div>
      <h1>Conserva Parques</h1>
      <h2>
        Modelo de predição do grau de conservação da natureza a partir de
        variáveis de uso público para Parques Nacionais (PARNA). O Conserva
        Parques é parte de um projeto de doutorado do programa de pós-graduação
        em Ecologia da Universidade Federal de Santa Catarina.
      </h2>
      <div>
        <h1>Selecione um parque</h1>
        <FormControl className={classes.formControl}>
          <InputLabel
            id="demo-controlled-open-select-label"
            style={{ color: '#fff' }}
          >
            Área
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={park}
            onChange={handleChange}
            style={{ color: '#fff', borderColor: '#fff' }}
          >
            {parks?.map((item: any): any => {
              return <MenuItem value={item}>{item?.name}</MenuItem>;
            })}
          </Select>
          <button onClick={handleSubmit}>Confirmar</button>
        </FormControl>
      </div>
    </Container>
  );
};
export default InitialForm;
