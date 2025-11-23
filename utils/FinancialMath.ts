
/**
 * Calculates the Gross Rental Yield.
 * Gross Yield = (Annual Rental Income / Property Value) * 100
 * @param annualRent - The total rent collected over a year.
 * @param propertyValue - The total purchase price or current market value of the property.
 * @returns The gross rental yield as a percentage.
 */
export const calculateGrossYield = (annualRent: number, propertyValue: number): number => {
  if (propertyValue === 0) {
    return 0;
  }
  return (annualRent / propertyValue) * 100;
};

/**
 * Calculates the Net Rental Yield.
 * Net Yield = ((Annual Rental Income - Annual Expenses) / Property Value) * 100
 * @param annualRent - The total rent collected over a year.
 * @param annualExpenses - The total operating expenses for the year (maintenance, taxes, insurance, etc.).
 * @param propertyValue - The total purchase price or current market value of the property.
 * @returns The net rental yield as a percentage.
 */
export const calculateNetYield = (annualRent: number, annualExpenses: number, propertyValue: number): number => {
  if (propertyValue === 0) {
    return 0;
  }
  const netIncome = annualRent - annualExpenses;
  return (netIncome / propertyValue) * 100;
};

/**
 * Calculates the Annual Cash Flow.
 * Annual Cash Flow = Annual Rental Income - Annual Expenses
 * @param annualRent - The total rent collected over a year.
 * @param annualExpenses - The total operating expenses for the year.
 * @returns The total cash flow for the year.
 */
export const calculateAnnualCashFlow = (annualRent: number, annualExpenses: number): number => {
  return annualRent - annualExpenses;
};
