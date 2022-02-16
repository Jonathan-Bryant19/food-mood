function MenuItem({id, menuItem, menu}) {
    // const
    return(
        <tbody key = {id}>
            <td>{menuItem} </td>
            <td>{menu[menuItem]} </td>
            
            <td>
                <input type={"number"} min={"0"} placeholder={"0"} />
            </td>
        </tbody>
    )
}

export default MenuItem