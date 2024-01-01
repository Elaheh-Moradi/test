import Header from "../header/Header";
import Table from "../table/Table";

const Page = (props) => {
  return (
    <>
      <Header title={props.title} />
      <Table />
    </>
  );
};

export default Page;
