import AgGridSolid from 'ag-grid-solid';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default function Home() {
    const columnDefs = [
        { field: 'make' },
        { field: 'model' },
        { field: 'price' },
    ];

    const rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxster', price: 72000 },
    ];

    const defaultColDef = {
        flex: 1,
    };

    return (
        <main class="text-center mx-auto text-gray-700 p-4" class="ag-theme-alpine" style={{height: '500px'}}>
            <AgGridSolid
                columnDefs={columnDefs}
                rowData={rowData}
                defaultColDef={defaultColDef}
            />
        </main>
    );
}
