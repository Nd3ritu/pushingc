import TableRow from "./TableRow";

function Table({ transactions, handleDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>date</th>
          <th>description</th>
          <th>category</th>
          <th>amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => {
          return (
            <tr>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                {
                  <button
                    id="delete"
                    onClick={(e) => handleDelete(transaction.id)}
                  >
                    Delete
                  </button>
                }
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
