import { useState } from 'react';

function CsvReader() {
    const [csvFile, setCsvFile] = useState();

    return (
        <form id="csv-form">
            <input
                type="file"
                accept=".csv"
                id="csvFile"
                onChange={(e) => {
                    setCsvFile(e.target.files[0])
                }}
            >
            </input>
        
            <button>
                Submit
            </button>
        </form>
    );
}