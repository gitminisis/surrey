import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useSWR, { useSWRConfig } from "swr";
const log = (type) => console.log.bind(console, type);
const fetcher = (url) => fetch(url).then((res) => res.json());




function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.databaseName}
                </TableCell>
                <TableCell align="right">{row.database}</TableCell>

                <TableCell align="right">{row.displayFields.length}</TableCell>

            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            {/* <Typography variant="h6" gutterBottom component="div">
                                List of detail page fields
                            </Typography> */}
                            <Table size="small" aria-label="fields">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Field Mnemonic</TableCell>
                                        <TableCell>Field Label</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.displayFields.map((field) => (
                                        <TableRow key={field.name}>
                                            <TableCell component="th" scope="row">
                                                {field.name}
                                            </TableCell>
                                            <TableCell>{field.label}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        database: PropTypes.string.isRequired,
        databaseName: PropTypes.string.isRequired,
        displayFields: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
            }),
        ).isRequired,
    }).isRequired,
};



export default function CollapsibleTable() {
    const BASE_URL = process.env.SERVER_BASE_URL || "http://localhost:3001";
    const { data, mutate, error, isLoading } = useSWR(
        `${BASE_URL}/detail-fields`,
        fetcher
    );
    if (error) return "An error has occurred.";
    if (isLoading) return "Loading...";
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Database Name</TableCell>
                        <TableCell align="right"> Database Definition</TableCell>
                        <TableCell align="right">Number of Fields</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <Row key={row.databaseName} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}