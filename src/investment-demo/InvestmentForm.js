import React, { useState } from "react";
import styles from "./InvestmentForm.module.css";

const initialInputs = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const InvestmentForm = (props) => {
  const [userInput, setUserInput] = useState(initialInputs);

  const inputChangeHandler = (input, value) => {
    setUserInput((prevState) => {
      return { ...prevState, [input]: value };
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const yearlyData = props.onCalculate(userInput);
    console.log("User Input: ", userInput);
  };

  const resetHandler = () => {
    setUserInput(initialInputs);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            name="current-savings"
            id="current-savings"
            value={userInput["current-savings"]}
            onChange={(evt) =>
              inputChangeHandler("current-savings", evt.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            name="yearly-contribution"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
            onChange={(evt) =>
              inputChangeHandler("yearly-contribution", evt.target.value)
            }
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            name="expected-return"
            id="expected-return"
            value={userInput["expected-return"]}
            onChange={(evt) =>
              inputChangeHandler("expected-return", evt.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            name="duration"
            id="duration"
            value={userInput["duration"]}
            onChange={(evt) => inputChangeHandler("duration", evt.target.value)}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
