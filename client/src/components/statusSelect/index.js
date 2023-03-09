import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import taskService from '../../services';
import axios from 'axios';

export const StatusSelect = ({ data }) => {
  const [newStatus, setNewStatus] = React.useState('');
  const [buttonColor, setButtonColor] = React.useState('green');

  const { name, description, status, id } = data;
  console.log('----------sou status hein', status);
  function myfunc() {}
  myfunc();
  // QUERO MANDAARM, FAZER UM AXIOS TALVES ROTA DE EDITAR STATUS
  const handleChange = async (event) => {
    const task = {
      name,
      description,
      status: event.target.value,
      id, // status,
    };

    try {
      const updatedTask = await taskService.update(task);
      // // setNewStatus([...newStatus, updatedTask]);
      setNewStatus(updatedTask.status);

      if (!updatedTask) {
        console.log('não há retorno');
      }
      console.log('chegoyu aqui');
    } catch (err) {
      throw new Error('erro ao postar', err);
      // setResponse([...response, tasksData]);
    }
  };
  // const minhafunction = () => {};
  return (
    <div>
      <FormControl
        sx={{ m: 1, minWidth: 120 }}
        style={{
          backgroundColor: newStatus || status === 'To Do' ? 'green' : null,
        }}
      >
        <InputLabel id="demo-simple-select-label">
          {newStatus ? newStatus : status}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={newStatus}
          onChange={handleChange}
          label="New status"
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={'To Do'}>To Do</MenuItem>
          <MenuItem value={'In progress'}>In progress</MenuItem>
          <MenuItem value={'doing'}>doing</MenuItem>
          {/* {minhaFunction()} */}
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  );
};
