
const Table = ({tabledata, ...rest}) => {
    console.log(tabledata)
    const dateval = tabledata === {} ? "Žádná data" : tabledata.date

    const header = []
    const rows = []
    if (Array.isArray(tabledata.items)) {
        for (const y in tabledata.items[0]) {
            header.push(<th>{y}</th>)
        }
        for (const x of tabledata.items)
        {
            rows.push(<tr>
                <td>{x['zeme']}</td>
                <td>{x['mena']}</td>
                <td>{x['mnozstvi']}</td>
                <td>{x['kod']}</td>
                <td>{x['kurz']}</td>
            </tr>)
        }
    }
    
    return (
        <table className="Table">
            <caption>{dateval}</caption>
            <thead>
                <tr>{header}</tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default Table