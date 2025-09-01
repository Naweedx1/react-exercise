import React, { useState } from "react";
import logo from "../assets/investment-calculator-logo.png";

import Header from "./Header";
import InvestmentForm from "./InvestmentForm";
import InvestmentTable from "./InvestmentTable";
// import CalculateHandler from "./CalculateHandler";

const InvestmentApp = (props) => {
  const [userInput, setUserInput] = useState(null);

  const CalculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = []; // per-year results
  if (userInput) {
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  console.log(yearlyData);

  return (
    <div>
      <Header logo={logo} />
      <InvestmentForm onCalculate={CalculateHandler} />
      {!userInput && <p>No investment to calculate.</p>}
      {userInput && (
        <InvestmentTable
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
};
export default InvestmentApp;
