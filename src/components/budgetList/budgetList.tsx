import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app'
import { useState } from 'react';
import { BudgetType } from '../../types/types';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Budget } from '../Budget/Budget';


interface BudgetListProps {
    store: firebase.firestore.Firestore
}

export const BudgetList: React.FC<BudgetListProps> = (props: BudgetListProps) => {
    const { store } = props
    const budgetsRef = store.collection('Budgets');
    const query = budgetsRef.where('user', "==", 'OKLKq45BZfUpR0vZwhkd4NAguNp1');
    const [budgets, loadingBudgetList, loadBudgetListerror] = useCollectionData(query, {idField: 'id'});
    const [budget, setBudget] = useState({} as BudgetType);
    return (
      <>
        <h3>
          Your BudgetList.
        </h3>
        {budgets?.map((b, i) => <button key={i} onClick={() => setBudget(budgets[i])}>{b.id}</button>)}
        {budget.bID && <Budget budget={budget}/>}
      </>
    );
  }