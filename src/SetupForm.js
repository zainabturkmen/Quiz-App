import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit,error} = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input type="number" name="amount" id="amount" value={}/>
          </div>
        </form>
      </section>
    </main>
  ); 
}

export default SetupForm
