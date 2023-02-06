export default function createIteratorObject(report) {
  const employees = [];
  for (const value of Object.values(report)) {
    for (const item of Object.values(value)) {
      employees.push(...item);
    }
  }
  return employees;
}
