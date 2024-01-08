import { gql, useQuery } from '@apollo/client';
import Typography from '@mui/material/Typography';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

const GET_LOCATIONS = gql`
query Query {
    locations(page: 1) {
       info {
         count
       }
       results {
         id
         name
         residents {
           id
           gender
         }
         type
         created
         dimension
       }
     }
   }
`;

const columns = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'type', headerName: 'Type', width: 130, editable: true },
	{ field: 'name', headerName: 'Location name', width: 180, editable: true },
	{ field: 'dimension', headerName: 'Dimension', width: 180, editable: true },
	{ field: 'created', headerName: 'CreatedAt', width: 280, editable: true },
];


export default function DisplayLocations() {
	const { t } = useTranslation();
	const { loading, error, data } = useQuery(GET_LOCATIONS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<div style={{ height: 400, width: '100%' }}>
			<Typography variant="h5" gutterBottom>
				{t('locations')}
			</Typography>
			<DataGrid
				editMode="row"
				rows={data.locations.results}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 5 },
					},
				}}
				pageSizeOptions={[5, 10]}
				checkboxSelection
				slots={{ toolbar: GridToolbar }}
				experimentalFeatures={{ ariaV7: true }}
			/>
		</div>
	);
}