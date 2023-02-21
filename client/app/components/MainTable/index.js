import React, { useState } from 'react';
import axios from 'axios';
import { data } from '../../../json';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './index.scss';

export const MainTable = () => {
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    const date_time = '2023-02-21 12:34:56';
    // const description2 = 'saSDASDASDASDAssssssssSDAS';
    const taskData = { date_time, description };
    axios.post('http://localhost:8888/task', taskData);
  };
  const backgroundColor = [
    'linear-gradient(106.37deg, #ffe1bc 29.63%, #ffcfd1 51.55%, #f3c6f1 90.85%)',
    '(180deg, #BB67FF 0%, #C484F3 100%)',
  ];

  return (
    <div className="table-container">
      <TableContainer
        component={Paper}
        style={{ boxShadow: '0px 13px 20px 0px #80808029', height: '300px' }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: 'white' }}>
            {data.map((res, index) => (
              <TableRow
                key={res.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="res">
                  {res.name}
                </TableCell>
                <TableCell align="left">{res.id}</TableCell>
                <TableCell align="left">{res.date}</TableCell>
                <TableCell align="left">
                  {/* <span className="status" style={makeStyle(res.status)}>
                    {res.status}
                  </span> */}
                </TableCell>
                <TableCell align="left" className="Details">
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
