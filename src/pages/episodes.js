import { gql,useQuery } from '@apollo/client';
import Typography from '@mui/material/Typography';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

const GET_EPISODES = gql`
query Query {
    episodes(page: 1) {
      info {
        count
      }
      results {
        id
        episode
        name
        air_date
        created
        __typename
      }
    }
  }
`;

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'episode', headerName: 'Episode', width: 130, editable: true },
    { field: 'name', headerName: 'Episode name', width: 180, editable: true },
    { field: 'air_date', headerName: 'Air Date', width: 180, editable: true },
    { field: 'created', headerName: 'CreatedAt', width: 280, editable: true },
];


export default function DisplayEpisodes() {
    const { t } = useTranslation();
    const { loading, error, data } = useQuery(GET_EPISODES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div style={{ height: 400, width: '100%' }}>
            <Typography variant="h5" gutterBottom>
                {t('episodes')}
            </Typography>
            <DataGrid
                editMode="row"
                rows={data.episodes.results}
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