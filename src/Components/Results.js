import React from "react"
import PropTypes from 'prop-types'
import { Table } from "react-bootstrap"

export default function Results({ result, text }) {
  return (
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>{text}</th>
          <th>descrição</th>
        </tr>
      </thead>
      <tbody>
        {result && result.map((item, i) => (
            <tr key={i}>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.html_url}</td>
            </tr>
        ))}
      </tbody>
    </Table>
  );
}

Results.propTypes = {
  result: PropTypes.array,
  text: PropTypes.string.isRequired
};

Results.defaultProps = {
  result: [],
};