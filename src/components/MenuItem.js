function MenuItem({id, menuItem, menu}) {
    const
    return(
        <tbody key = {id}>
            <td>{menuItem} </td>
            <td>{menu[menuItem]} </td>
            
            <td>
                <input type="number" value="0"/>
            </td>
        </tbody>
    )
}

export default MenuItem