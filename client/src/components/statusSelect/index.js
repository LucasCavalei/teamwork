import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import taskService from '../../services/apiService';

export const StatusSelect = ({ data }) => {
  const [newStatus, setNewStatus] = React.useState('');
  const [buttonColor, setButtonColor] = React.useState('green');

  const { name, description, status, id } = data;

  // setNewStatus(status);
  // setNewStatus([...newStatus, status]);
  React.useEffect(() => {
    setNewStatus(status);
  }, []);

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
      console.log('sou updated task', updatedTask.status);
      setNewStatus(updatedTask.status);

      if (!updatedTask) {
        console.log('não há retorno');
      }
      console.log('chegoyu aqui');
    } catch (err) {
      throw new Error('erro ao postar', err);
    }
  };
  return (
    <div>
      <FormControl
        sx={{ m: 1, minWidth: 120 }}
        style={{
          backgroundColor:
            newStatus === 'to do'
              ? 'orange'
              : newStatus === 'in progress'
              ? 'pink'
              : newStatus === 'completed'
              ? 'grey'
              : null,
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
          <MenuItem value={'to do'}>To Do</MenuItem>
          <MenuItem value={'in progress'}>In progress</MenuItem>
          <MenuItem value={'completed'}>completed</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
