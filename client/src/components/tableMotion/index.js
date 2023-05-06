import React, { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './index.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StatusSelect } from '../../components/statusSelect';

export const TableMotion = ({ apiService }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [response, setResponse] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const taskResult = await apiService.getAllTasks();
    setResponse(taskResult);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const status = 'To Do';
    const taskData = { name, description, status };
    try {
      const returnedTask = await apiService.createTask(taskData);
      if (!returnedTask) {
        console.log('Não retornou');
      }

      setResponse([...response, returnedTask]);
    } catch (err) {
      throw new Error('erro ao postar');
    }
  };
  function handleClick() {
    inputRef.current.focus();
    setName('');
    setDescription(' ');
  }

  const backgroundColor = [
    'linear-gradient(106.37deg, #ffe1bc 29.63%, #ffcfd1 51.55%, #f3c6f1 90.85%)',
    '(180deg, #BB67FF 0%, #C484F3 100%)',
  ];

  return (
    <div className="table-container-accordion" style={{ width: '700px' }}>
      <Fab color="primary" aria-label="add" onClick={handleClick}>
        <AddIcon />
      </Fab>
      {response
        .map((res, index) => (
          <Accordion key={res.id} style={{ with: '700px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ maxWidth: '400px', maxHeight: '100px' }}>
                {res.name} <br />
                <br />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
              >
                {' '}
                {res.id}
                {res.description}
                {res.status}
                {res.created_at}
                <StatusSelect data={res} />
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))
        .reverse()}
      <TextField
        id="standard-basic"
        label="new task"
        variant="standard"
        inputRef={inputRef}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="New task"
        variant="outlined"
        style={{ width: '100%' }}
        onChange={(event) => setDescription(event.target.value)}
      />{' '}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
