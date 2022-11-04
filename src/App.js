import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {
      title: "Car Insurance",
      Amount: 297.67,
      date: new Date(2020, 11, 12),
    },
    {
      title: "Toilet Paper",
      Amount: 92,
      date: new Date(2020, 11, 12),
    },
    {
      title: "New tv",
      Amount: 799.99,
      date: new Date(2020, 9, 12),
    },
    {
      title: "Wooden furniture",
      Amount: 297.67,
      date: new Date(2020, 10, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
