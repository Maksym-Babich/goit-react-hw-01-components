import PropTypes from 'prop-types';
import { Table, Row, Data } from "components/TransactionHistory/ransactionhistory.styled";

export const TransactionHistory = ({items}) => {
    return <Table>
        <thead>
    <Row>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </Row>
        </thead>
        <tbody>
            {items.map(({id, type, amount, currency}) => {
                return <Row key={id}>
                    <Data>{type}</Data>
                    <Data>{amount}</Data>
                    <Data>{currency}</Data>
                </Row>
            })}
    
  </tbody>
    </Table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}