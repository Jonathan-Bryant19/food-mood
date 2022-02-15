function MenuItem({id, menuItem, menu}) {
    return(
        <tbody key = {id}>
            <td>{menuItem} </td>
            <td>{menu[menuItem]} </td>
            {/* <td className="ui header">Quantity</td> */}
            <td>
                <input type="number" placeholder="Quantity"/>
            </td>
        </tbody>
    )
}

export default MenuItem