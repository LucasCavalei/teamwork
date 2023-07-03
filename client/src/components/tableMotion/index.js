import React, { useState, useEffect, useRef } from 'react';
import './index.scss';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StatusSelect } from '../../components/statusSelect';
import xmark from '../assets/xmark.gif';

export const TableMotion = ({ apiService }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    getData();
  }, []);

  //get all tasks
  const getData = async () => {
    const tasksList = await apiService.getAllTasks();
    setTasks(tasksList);
  };

  //create new Task
  const handleSubmit = async (event) => {
    event.preventDefault();
    const status = 'To Do'; //primeiro status
    const taskData = { name, description, status };
    try {
      const returnedTask = await apiService.createTask(taskData);
      if (!returnedTask) {
        console.log('Não retornou');
      }
      setTasks([...tasks, returnedTask]);
      setName('');
      setDescription('');
    } catch (err) {
      throw new Error('erro ao postar');
    }
  };

  //delete task
  const deleteTask = async (id) => {
    try {
      const deletedResponse = await apiService.delete(id);
      if (deletedResponse !== null) {
        const updatedResponse = tasks.filter((item) => item.id !== id);
        setTasks(updatedResponse);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //clean input field
  function handleClick() {
    inputRef.current.focus();
    setName('');
    setDescription(' ');
  }

  return (
    <div className="table-container-accordion" style={{ width: '700px' }}>
      <Fab color="primary" aria-label="add" onClick={handleClick}>
        <AddIcon />
      </Fab>
      {tasks
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
                <Typography
                  style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
                >
                  <div>
                    <a
                      href="#"
                      className="gif-link"
                      onClick={() => deleteTask(res.id)}
                    >
                      <img
                        src={xmark}
                        alt="GIF"
                        style={{
                          width: '50px',
                          height: '50px',
                          float: 'right',
                        }}
                      />
                    </a>
                  </div>
                  {res.description}
                </Typography>
                <StatusSelect data={res} />
                <Typography
                  style={{
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    fontFamily: 'Calibri, Arial, sans-serif',
                    fontSize: '14px',
                  }}
                >
                  {format(new Date(res.created_at), 'dd MMMM yyyy', {
                    locale: ptBR,
                  })}
                </Typography>
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
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="New task"
        variant="outlined"
        style={{ width: '100%' }}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />{' '}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
