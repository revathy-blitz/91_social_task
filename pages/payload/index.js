import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Search  } from '@material-ui/icons';
import { IconButton } from '@material-ui/core'

import Layout from '../_layout';
import { getPayloadAction } from '../../redux/payload/actions';
import { Container, HeroContainer, TableContainer, FilterContainer } from '../../components/style';

const columns = [
  { field: 'payload_id', headerName: 'Payload #', width: 200 },
  { field: 'id', headerName: 'ID', hide: true },
  { field: 'reused', headerName: 'Reused', width: 95 },
  { field: 'nationality', headerName: 'Nationality', width: 130 },
  { field: 'manufacturer', headerName: 'Manufacturer', width: 130 },
  { field: 'payload_type', headerName: 'Type', width: 170 },
  { field: 'payload_mass_kg', headerName: 'Mass (kg)', width: 130 },
  { field: 'payload_mass_lbs', headerName: 'Mass (lbs)', width: 130 },
  { field: 'orbit', headerName: 'Orbit', width: 100 }
];

const Payload = (props) => {
    const { getPayload, payloadData } = props
    const [rowData, setRowData] = useState([]);
    const [payloadFilter, setPayloadFilter] = useState();

    const filterData = () => {
        if (payloadFilter) {
            const newRowData = [ ...rowData ];
            const mappedData = newRowData.filter(val => val.payload_id === payloadFilter.payload_id);
            setRowData(mappedData);
        } else {
            setRowDataFromPayload();
        }
    }

    const setRowDataFromPayload = () => {
        if (payloadData && payloadData.length > 0) {
            const mappedData = payloadData.map((val) => ({ id: Math.random(), ...val}))
            setRowData(mappedData);
        }
    }

    useEffect(() => {
        getPayload();        
    }, []);

    useEffect(() => {
        setRowDataFromPayload();
    }, [payloadData]);

    return (
        <Layout>
        <Container>
                <HeroContainer>
                    <div className="infoContainer payload">
                        <div className="title">
                        Welcome to SpaceX Dashboard
                        </div>
                    </div>
                </HeroContainer>
                <FilterContainer>
                    <Autocomplete
                        id="search_payload"
                        options={rowData}
                        getOptionLabel={(option) => option.payload_id}
                        style={{ width: 300 }}
                        onChange={(event, value) => setPayloadFilter(value)}
                        renderInput={(params) => <TextField {...params} label="Payload #" />}
                        />
                    <IconButton onClick={() => filterData()}><Search /></IconButton>
                </FilterContainer>
                <TableContainer>
                    {rowData.length > 0 
                        && <DataGrid
                                disableSelectionOnClick={true}
                                autoHeight={true}
                                rows={rowData}
                                columns={columns} 
                                pageSize={10} />}
                </TableContainer>
        </Container>
        </Layout>
    );
}

const mapStateToProps = state => ({
    payloadData: state.payload.payload,
});

const mapDispatchToProps = dispatch => ({
    getPayload: () => dispatch(getPayloadAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Payload);

