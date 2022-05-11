
const Table = ({tabledata, ...rest}) => {
    const dateval = tabledata === {} ? "Žádná data" : tabledata.date

    let header = []
    let rows = []
    if (Array.isArray(tabledata.items)) {
        header = Object.entries(tabledata.items[0]).map(
            ([k,v],i) => 
                <th key={i}>{k}</th>
            )

        rows = tabledata.items.map(
            (v,i) => 
                <tr key={i}>{
                    Object.entries(v).map(
                        ([key,val],j) => 
                            <td key={j}>{val}</td>
                    )
                }</tr>
            )
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