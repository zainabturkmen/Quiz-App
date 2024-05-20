import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>setup quiz</h2>
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              className="form-input"
              min={1}
              max={50}
              onChange={handleChange}
            />
          </div>
          {error && <P className="error">can't generate questions, please try again</P>}
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
