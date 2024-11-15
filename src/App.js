import PageHeader from './components/page-header/page-header';
import Panel from './components/panel/panel';
import './App.css';
import Table from './components/table/table';

function App() {
  const columns = [
    { label: "Name", key: "name", isNumeric: false },
    { label: "Age", key: "age", isNumeric: true },
    { label: "Country", key: "country", isNumeric: false },
    { label: "Salary", key: "salary", isNumeric: true },
  ];

  const data = [
    { name: "Alice", age: 30, country: "USA", salary: 75000 },
    { name: "Bob", age: 25, country: "Canada", salary: 62000 },
    { name: "Charlie", age: 35, country: "UK", salary: 89000 },
    { name: "Diana", age: 28, country: "Germany", salary: 72000 },
  ];

  return (
    <div className='positions-page'>
      <PageHeader
        pageTitle="Positions">
      </PageHeader>
      <Panel title="Accounts Summary">
        <p>This content is always visible because the panel is not collapsible.</p>
      </Panel>
      <Panel title="Account Details" collapsible>
        <Table
          columns={columns}
          data={data}
        />
      </Panel>
    </div>
  );
}

export default App;
