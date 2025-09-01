import React from "react";
// import styles from "./InvestmentTable.module.css";
import styled from "styled-components";

const Table = styled.table`
  max-width: 50rem;
  margin: 2rem auto;
  padding: 1rem;
  table-layout: fixed;
  border-spacing: 1rem;
  text-align: right;

  & thead {
    font-size: 0.7rem;
    color: #83e6c0;
  }

  & tbody {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 0.85rem;
    color: #c2e9e0;
  }
`;

const InvestmentTable = (props) => {
  return (
    // <table className={styles.result}>
    <Table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((d) => (
          <tr key={d.year}>
            <td>{d.year}</td>
            <td>{d.savingsEndOfYear}</td>
            <td>{d.yearlyInterest}</td>
            <td>
              {d.savingsEndOfYear -
                props.initialInvestment -
                d.yearlyContribution * d.year}
            </td>
            <td>{props.initialInvestment + d.yearlyContribution * d.year}</td>
          </tr>
        ))}
      </tbody>
      {/* </table> */}
    </Table>
  );
};
export default InvestmentTable;
