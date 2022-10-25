import { useState } from "react";
import { BudgetType } from "../../types/types";
import { Results } from "../Results/Results";

interface BudgetProps {
    budget: BudgetType,
    onClose?: () => void
  }

export const Budget: React.FC<BudgetProps> = (props: BudgetProps) => {
    const {budget, onClose} = props
    const [formValue, setFormValue] = useState(budget);
    const setValue = (value: any, fieldKey: string) => setFormValue({
      ...formValue,
      [fieldKey]: value
    })
    console.log('🦃', formValue)
    
    return (
      <>
        <form>
          <fieldset>
            <legend>Budget Info:</legend>
            <label htmlFor='formName'>Budget Name:</label>
            <br/>
            <input name={'formName'} type='text' value={formValue.name} onChange={(e) => setValue(e.target.value, 'name')} />
            <br/>
            <label htmlFor='currency'>Currency:</label>
            <br/>
            <input name={'currency'} type='text' value={formValue.currency} onChange={(e) => setValue(e.target.value, 'currency')} />
            <br/>
            <label htmlFor='isTimePeriod'>Is time currentPeriod:</label>
            <br/>
            <input name={'isTimePeriod'} type='checkbox' checked={formValue.isTimePeriod} onChange={(e) => setValue(e.target.checked, 'isTimePeriod')} />
            <br/>
            <label htmlFor='showDailyBudget'>Show daily budget:</label>
            <br/>
            <input name={'showDailyBudget'} type='checkbox' checked={formValue.showDailyBudget} onChange={(e) => setValue(e.target.checked, 'showDailyBudget')} />
            <br/>
            <label htmlFor='initialBudget'>Initial Budget:</label>
            <br/>
            <input name={'initialBudget'} type='number' value={formValue.initialBudget} onChange={(e) => setValue(e.target.value, 'initialBudget')} />
            <br/>
            <label htmlFor='currentBudget'>Current Budget:</label>
            <br/>
            <input name={'currentBudget'} type='number' value={formValue.currentBudget} onChange={(e) => setValue(e.target.value, 'currentBudget')} />
            <br/>
            {
              formValue.isTimePeriod &&
              <fieldset>
                <label htmlFor='numberOfPeriods'>Number Of Periods:</label>
                <br/>
                <input name={'numberOfPeriods'} type='number' value={formValue.numberOfPeriods} onChange={(e) => setValue(e.target.value, 'numberOfPeriods')} />
                <br/>
                <label htmlFor='currentPeriod'>Period:</label>
                <br/>
                <input name={'currentPeriod'} type='number' value={formValue.currentPeriod} onChange={(e) => setValue(e.target.value, 'currentPeriod')} />
              </fieldset>
            }
          </fieldset>
          {/* <input type='EXPENSES' value={formValue.currency} onChange={(e) => setValue(e.target.value, 'currency')} /> */}
          
          <button onClick={() => console.log('save', formValue)}>
            Save to ☁
          </button>
        </form>
  
        <Results budget={formValue}/>
      </>
    );
  }