import DigitalAds from "../components/DigitalAds";
import KeywordRanking from "../components/KeywordRanking";
import MonthlyPerformance from "../components/MonthlyPerformance";
import OnlineConversions from "../components/OnlineConversions";
import PhoneConversions from "../components/PhoneConversions";
import PhoneData from "../components/PhoneData";
import Summary from "../components/Summary";
import Website from "../components/Website";

// eslint-disable-next-line react/prop-types
const Dashboard = () => {
  const lineBreak = (
    <div className="my-8 h-[1px] bg-[--d-blue-bg] dark:bg-[--teal-bg] w-full"></div>
  );

  return (
    <div className="m-auto snap-y bg-[--white-bg] dark:bg-[--dd-blue-bg]">
      <Summary />
      {lineBreak}
      <MonthlyPerformance />
      {lineBreak}
      <PhoneConversions />
      {lineBreak}
      <PhoneData />
      {lineBreak}
      <OnlineConversions />
      {lineBreak}
      <Website />
      <KeywordRanking />
      {lineBreak}
      <DigitalAds />
    </div>
  );
};

export default Dashboard;
