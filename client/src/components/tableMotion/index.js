import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import taskService from '../../services';

import './index.scss';
// --------------------
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StatusSelect } from '../../components/statusSelect';

export const TableMotion = () => {
  const [description, setDescription] = useState('');
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const taskResult = await taskService.getAll();
    setResponse(taskResult);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const created_at = '2023-02-21 12:34:56';
    const status = 'Doing';
    const name = 'is okland canada?';
    const taskData = { name, description, status, created_at };
    try {
      const newTask = await taskService.createTask(taskData);
      setResponse([...response, newTask]);
      if (!res) {
        console.log('falha ao consoloar');
      }
    } catch (err) {
      throw new Error('erro ao postar');
      // setResponse([...response, taskData]);
    }
  };

  const backgroundColor = [
    'linear-gradient(106.37deg, #ffe1bc 29.63%, #ffcfd1 51.55%, #f3c6f1 90.85%)',
    '(180deg, #BB67FF 0%, #C484F3 100%)',
  ];

  return (
    <div className="table-container-accordion">
      {response
        .map((res, index) => (
          <Accordion key={res.id} style={{ maxWidth: '700px' }}>
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
        id="outlined-basic"
        label="Nova Tarefa"
        variant="outlined"
        style={{ width: '100%' }}
        onChange={(event) => setDescription(event.target.value)}
      />{' '}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
// function Task(props) {
//   const taskStatus = props.status;

//   let statusColor = '';

//   switch (taskStatus) {
//     case 'To Do':
//       statusColor = 'red';
//       break;
//     case 'In Progress':
//       statusColor = 'orange';
//       break;
//     case 'Done':
//       statusColor = 'green';
//       break;
//     default:
//       statusColor = 'black';
//   }

//   return (
//     <div>
//       <p style={{color: statusColor}}>Task Status: {taskStatus}</p>
//     </div>
//   );
// }

// export default Task;

// -----------MYSQL--------------

// CREATE TABLE tasks (
//   id INT NOT NULL AUTO_INCREMENT,
//   name VARCHAR(255) NOT NULL,
//   description TEXT,
//   status ENUM('To Do', 'In Progress', 'Done') NOT NULL,
//   PRIMARY KEY (id)
// );

// ALTER TABLE my_table ADD COLUMN status ENUM('To Do', 'In Progress', 'Done');
