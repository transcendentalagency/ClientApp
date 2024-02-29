import MonthlyPerformance from "../components/MonthlyPerformance";
import OnlineConversions from "../components/OnlineConversions";
import PhoneConversions from "../components/PhoneConversions";
import Summary from "../components/Summary";

// eslint-disable-next-line react/prop-types
const Dashboard = () => {
  return (
    <div className="m-auto snap-y">
      <Summary />
      <div className="my-8 h-[1px] bg-[--d-blue-bg] dark:bg-[--teal-bg] w-screen"></div>
      <MonthlyPerformance />
      <div className="my-8 h-[1px] bg-[--d-blue-bg] dark:bg-[--teal-bg] w-screen"></div>
      <PhoneConversions />
      <div className="my-8 h-[1px] bg-[--d-blue-bg] dark:bg-[--teal-bg] w-screen"></div>
      <OnlineConversions />
      <div className="my-8 h-[1px] bg-[--d-blue-bg] dark:bg-[--teal-bg] w-screen"></div>
    </div>
  );
};

export default Dashboard;
