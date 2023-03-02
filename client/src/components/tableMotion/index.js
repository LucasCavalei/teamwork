import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';

import './index.scss';
// --------------------
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const TableMotion = () => {
  const [description, setDescription] = useState('');
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const result = await axios.get('http://localhost:8888/task');
    setResponse(result.data);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const date_time = '2023-02-21 12:34:56';
    const status = 'To Do';
    const taskData = { date_time, description, status };
    try {
      const result = await axios.post('http://localhost:8888/task', taskData);
      setResponse([...response, result.data]);
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
          <Accordion style={{ maxWidth: '700px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ maxWidth: '400px', maxHeight: '100px' }}>
                {res.id} <br />
                <br />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {' '}
                {res.description}
                {res.date_time}
                {res.status}
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
