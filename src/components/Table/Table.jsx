const Table = (props) => { 
    let netIncomes = props.netIncomes;
    return(
        <table>
            <tr>
                <th>Restaurant</th>
                <th>Net Income</th>
            </tr>
        {netIncomes.map((restaurant) =>{
            return(
                <tr>
                <td>{restaurant.brand}</td>
                <td>${restaurant.income}</td>
                </tr>
            )
        })}
        </table>
    )
}

export default Table
