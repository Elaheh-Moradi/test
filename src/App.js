import Header from "./header/Header";
import Table from "./table/Table";
import Tabs from "./tabs/Tabs";

function App() {
  const tabData = [
    { label: "Tab 1" },
    { label: "Tab 2" },
    { label: "Tab 3" },
];
  return (
    
    <div>
      {/* <Header />
      <Table /> */}
      <Tabs tabs={tabData} />
    </div>
  );
}

export default App;
