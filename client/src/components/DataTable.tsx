// import React from 'react'    
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { offers } from '../Resource/localData';

function DataTable() {
  return (
    <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Price</TableCell>
                    <TableCell align="center">Morra Price</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Expiration</TableCell>
                    <TableCell align="center">From</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {offers.map((row) => (
                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                        {row.price}
                    </TableCell>
                    <TableCell align="center">{row.usdPrice}</TableCell>
                    <TableCell align="center">{row.quanity}</TableCell>
                    <TableCell align="center">{row.expiration}</TableCell>
                    <TableCell align="center">{row.from}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default DataTable