import LeftSection from "./LeftSection";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const MonthlyPerformance = () => {
  return (
    <>
      <SectionTitle>MONTHLY PERFORMANCE</SectionTitle>

      <SectionContainer>
        <LeftSection color="w-full overflow-scroll">
          <span className="text-[1.5rem] font-regular text-[--blue-bg] dark:text-[--d-blue-bg]">
            Performance by Channel
          </span>

          <div className="flex flex-col w-full gap-4 text-white mt-4 flex-nowrap overflow-scroll min-w-[1000px] touch-pan-x  snap-x">
            <ul className="bg-[--green-bg] dark:!bg-[--green-bg] rounded-xl px-2 py-4 flex flex-row text-center align-top gap-2 justify-between dark:bg-slate-400 shadow-md shadow-slate-400">
              <li className="w-[10%] text-left">Channel</li>
              <li className="w-[10%]">New Site Users</li>
              <li className="w-[10%]">Calls</li>
              <li className="w-[10%]">Online Appts Booked</li>
              <li className="w-[10%]">Phone Conversions</li>
              <li className="w-[10%]">New Patients Acquired</li>
              <li className="w-[10%]">Estimated Patient Value</li>
              <li className="w-[10%]">Estimated Revenue</li>
              <li className="w-[10%]">Expenses</li>
              <li className="w-[10%]">Estimated ROI</li>
            </ul>
            <ul className="bg-[--l-blue-bg] dark:!bg-[--l-blue-bg] rounded-xl px-2 py-2 flex flex-row text-center align-top gap-2 dark:bg-slate-400 shadow-md shadow-slate-400">
              <li className="w-[10%] text-left">SEO</li>
              <li className="w-[10%]">109</li>
              <li className="w-[10%]">16</li>
              <li className="w-[10%]">2</li>
              <li className="w-[10%]">1</li>
              <li className="w-[10%]">3</li>
              <li className="w-[10%]">$500</li>
              <li className="w-[10%]">$1200</li>
              <li className="w-[10%]">$500</li>
              <li className="w-[10%]">$925</li>
            </ul>
            <ul className="bg-[--blue-bg] dark:!bg-[--blue-bg] rounded-xl px-2 py-2 flex flex-row text-center align-top gap-2 dark:bg-slate-400 shadow-md shadow-slate-400">
              <li className="w-[10%] text-left">Digital Ads</li>
              <li className="w-[10%]">109</li>
              <li className="w-[10%]">16</li>
              <li className="w-[10%]">2</li>
              <li className="w-[10%]">1</li>
              <li className="w-[10%]">3</li>
              <li className="w-[10%]">$500</li>
              <li className="w-[10%]">$1200</li>
              <li className="w-[10%]">$500</li>
              <li className="w-[10%]">$925</li>
            </ul>
            <ul className="bg-[--d-blue-bg] dark:!bg-[--d-blue-bg] rounded-xl px-2 py-2 flex flex-row text-center align-top gap-2 dark:bg-slate-400 shadow-md shadow-slate-400">
              <li className="w-[10%] text-left">Total</li>
              <li className="w-[10%]">109</li>
              <li className="w-[10%]">16</li>
              <li className="w-[10%]">2</li>
              <li className="w-[10%]">1</li>
              <li className="w-[10%]">3</li>
              <li className="w-[10%]">$500</li>
              <li className="w-[10%]">$1200</li>
              <li className="w-[10%]">$500</li>
              <li className="w-[10%]">$925</li>
            </ul>
          </div>
        </LeftSection>
      </SectionContainer>
    </>
  );
};

export default MonthlyPerformance;
