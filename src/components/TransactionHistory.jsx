export const TransactionHistory = ({items}) => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            {items.map((items) => (
                <tbody key={items.id}>
                    <tr>
                        <td>{items.type}</td>
                        <td>{items.amount}</td>
                        <td>{items.currency}</td>
                    </tr>
                </tbody>
            ))}
        </table>
    )
}