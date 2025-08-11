import { Box, useMediaQuery } from "@mui/material";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { ptBR } from '@mui/x-data-grid/locales';
import GenericService from "../../services/genericService";

interface GenericTableProps<T> {
    getRowId: (row: T) => string | number;
    handleSelect: (entity: T | null) => void;
    data: T[];
    customColumns?: GridColDef[];
    onRowUpdate?: (row: T) => void;
    pagination?: boolean
}

const GenericTable = <T extends Record<string, any>>({ data, getRowId, handleSelect, customColumns, onRowUpdate, pagination = false }: GenericTableProps<T>) => {
    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const handleSelectRow = (selectionModel: GridRowSelectionModel) => {
        const selectedId = selectionModel[0];
        const selectedRow = data.find((row) => getRowId(row) === selectedId);
        if (selectedRow) {
            // selectedRow is your entity!!!!
            handleSelect(selectedRow);
        } else {
            handleSelect(null)
        }
    
        setRowSelectionModel(selectionModel);
    };

    const columns: GridColDef<T>[] = data.length > 0 
        ? Object.keys(data[0]).map((key) => ({
            field: key,
            headerName: key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' '),
            width: 200,
            sortable: true,
        })) 
    : [];

    return (
        <Box sx={{
            backgroundColor: "#FFF",
            display: "flex", 
            width: "100%", 
            height: "100%", 
            overflowY: "auto"
        }}>
            <DataGrid 
                rows={data}
                columns={customColumns ? customColumns : columns}
                checkboxSelection
                disableMultipleRowSelection
                rowSelectionModel={rowSelectionModel}
                processRowUpdate={((newRow, oldRow) => {
                    onRowUpdate && onRowUpdate(newRow);
                    return newRow;
                })}
                onRowSelectionModelChange={handleSelectRow}
                localeText={ptBR.components?.MuiDataGrid?.defaultProps.localeText}
                getRowId={getRowId}
            />
        
        </Box>
    );
};

export default GenericTable;
