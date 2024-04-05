interface IncomeRecord {
  [key: string]: number;
}

const riyadIncome: IncomeRecord = {
  // ... (income data)
};

const incomeEntries: [string, number][] = Object.entries(riyadIncome);
const processedIncomes = incomeEntries.map(([key, value]) => {
  // Process the income data here
  // For example, convert the income to a different currency or format
  const processedValue = value; // Placeholder for actual processing logic
  return { key, processedValue };
});
