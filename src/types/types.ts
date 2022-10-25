export interface BudgetType {
    name: string,
    currency: string,
    currentPeriod: number,
    numberOfPeriods: number,
    initialBudget: number,
    currentBudget: number,
    isTimePeriod: boolean,
    showDailyBudget: boolean,
    user: string,
    bID: string,
}