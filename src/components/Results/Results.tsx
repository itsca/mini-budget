import { BudgetType } from "../../types/types";

export const Results: React.FC<{budget: BudgetType}> = (props: {budget: BudgetType}) => {
    const { budget } = props
    const InitialBudgetByPeriod = budget.initialBudget / budget.numberOfPeriods; // Good
    const budgetByPeriod = budget.currentBudget / (budget.numberOfPeriods - (budget.currentPeriod - 1));
    const budgetByPeriodGrowPercentage = (100 * budgetByPeriod) / InitialBudgetByPeriod
    return (
        <>
            <h2>Results:</h2>
            <h3>Percentage Left</h3>
            <p>{((100 * budget.currentBudget) / budget.initialBudget) + '%'}</p>
            <h3>Budget By Period</h3>
            <p>{budgetByPeriod}</p>
            <h3>Initial Budget By Period</h3>
            <p>{InitialBudgetByPeriod}</p>
            <h3>Budget By Period in CRC</h3>
            <p>{budgetByPeriod*610.76}</p>
            <h3>Your Budget By period has changed by:</h3>
            <p>{(budgetByPeriodGrowPercentage < 100 ? 100 - budgetByPeriodGrowPercentage - budgetByPeriodGrowPercentage : budgetByPeriodGrowPercentage - 100) + '%'}</p>
        </>
    )
}