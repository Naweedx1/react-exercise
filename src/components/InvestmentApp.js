import React from "react";
import Header from "./Header";
import logo from "../assets/investment-calculator-logo.png";
import InvestmentForm from "./InvestmentForm";
import InvestmentTable from "./InvestmentTable";

const InvestmentApp = (props) => {
  return (
    <div>
      <Header logo={logo} />
      <InvestmentForm />
      <InvestmentTable />
    </div>
  );
};
export default InvestmentApp;
