import { LineChart } from "@mui/x-charts";
import Card from "../components/Card";
import LeftSection from "./LeftSection";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const PhoneData = () => {
  const lineGradient = "#4297b9";
  const missedMockData = 20;
  const opsMockData = 16;

  return (
    <>
      <SectionTitle>
        PHONE DATA
        <br />
        <span className="text-[1.5rem] font-regular text-[--blue-bg] dark:text-[--l-blue-bg]">
          Call Volume + Missed Call Rate
        </span>
      </SectionTitle>
      <SectionContainer>
        <LeftSection color="bg-transparent dark:bg-transparent shadow-none p-0 w-12/12 lg:w-6/12">
          <div className="flex flex-col xl:flex-row gap-0">
            <Card color="bg-[--l-blue-bg] mb-4 xl:rounded-l-lg xl:rounded-r-none xl:mr-[-10px] h-1/2">
              <p className="text-xl text-white">Total Calls</p>
              <span className="text-[3rem] md:text-[5rem] font-light">76</span>
            </Card>
            <Card color="flex flex-col gap-2 mb-4 p-4 dark:bg-slate-400  bg-white">
              <LineChart
                xAxis={[{ data: [0, 2, 4, 6, 8, 10] }]}
                series={[
                  {
                    curve: "linear",
                    data: [0, 5, 2, 6, 3, 9.3],
                    color: `${lineGradient}`,
                  },
                ]}
                width={400}
                height={300}
              />

              <div className="flex flex-row justify-between text-[--d-blue-bg]">
                <div className="flex flex-row gap-2 dark:text-white text-[--l-blue-bg] px-2 py-1">
                  <span className="text-[--d-blue-bg]">Previous Period</span>
                  -20%
                </div>
                <div className="flex flex-row gap-2 bg-[--l-blue-bg] text-center rounded-full px-2 py-1">
                  <span className="text-[--d-blue-bg]">Previous Year</span>
                  100%
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-flow-row grid-cols-2 gap-4 dark:bg-transparent">
            <Card color="bg-[--green-bg] !w-full">
              <p className="text-xl text-[--d-blue-bg]">Missed Call Rate</p>
              <span className="text-[3rem] md:text-[5rem] font-light">
                {missedMockData}%
              </span>
            </Card>
            <Card color="bg-[--l-blue-bg] !w-full">
              <p className="text-xl text-[--d-blue-bg]">
                Opportunities (Not Scheduled)
              </p>
              <span className="text-[3rem] md:text-[5rem] font-light">
                {opsMockData}%
              </span>
            </Card>
          </div>
        </LeftSection>
        <LeftSection color="bg-transparent dark:bg-transparent shadow-none p-0 w-12/12 lg:w-6/12">
          <div className="flex flex-col-reverse xl:flex-row gap-0">
            <Card color="bg-[--l-blue-bg] mb-4 xl:rounded-l-lg xl:rounded-r-none xl:mr-[-10px] h-1/2">
              <p className="text-xl text-white">Unique Callers</p>
              <span className="text-[3rem] md:text-[5rem] font-light">76</span>
            </Card>
            <Card color="flex flex-col gap-2 mb-4 p-4 dark:bg-slate-400 bg-white">
              <LineChart
                xAxis={[{ data: [0, 2, 4, 6, 8, 10] }]}
                series={[
                  {
                    curve: "linear",
                    data: [0, 5, 2, 6, 3, 9.3],
                    color: `${lineGradient}`,
                  },
                ]}
                width={400}
                height={300}
              />

              <div className="flex flex-row justify-between text-[--d-blue-bg]">
                <div className="flex flex-row gap-2 dark:text-white text-[--l-blue-bg] px-2 py-1">
                  <span className="text-[--d-blue-bg]">Previous Period</span>
                  -20%
                </div>
                <div className="flex flex-row gap-2 bg-[--l-blue-bg] text-center rounded-full px-2 py-1">
                  <span className="text-[--d-blue-bg]">Previous Year</span>
                  100%
                </div>
              </div>
            </Card>
          </div>
        </LeftSection>
      </SectionContainer>
    </>
  );
};

export default PhoneData;
