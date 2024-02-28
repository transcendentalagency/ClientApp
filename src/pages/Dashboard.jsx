import Summary from "../components/Summary";

const Dashboard = () => {
  return (
    <div className=" m-auto">
      <Summary />
      <div className="my-8 h-[1px] bg-black dark:bg-blue-900 w-screen"></div>
    </div>
  );
};

export default Dashboard;
