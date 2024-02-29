import Card from "../components/Card";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import LeftSection from "./LeftSection";
import { BarChart, LineChart, axisClasses } from "@mui/x-charts";

const Website = () => {
  const lineGradient = "#4297b9";

  const chartSetting = {
    yAxis: [
      {
        label: "",
      },
    ],
    width: 550,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-20px, 0)",
      },
    },
  };
  const dataset = [
    {
      traffic: 210,
      month: "Jan",
    },
    {
      traffic: 280,
      month: "Fev",
    },
    {
      traffic: 410,
      month: "Mar",
    },
    {
      traffic: 730,
      month: "Apr",
    },
    {
      traffic: 990,
      month: "May",
    },
    {
      traffic: 144,
      month: "June",
    },
    {
      traffic: 319,
      month: "July",
    },
    {
      traffic: 249,
      month: "Aug",
    },
    {
      traffic: 131,
      month: "Sept",
    },
    {
      traffic: 550,
      month: "Oct",
    },
    {
      traffic: 480,
      month: "Nov",
    },
    {
      traffic: 250,
      month: "Dec",
    },
  ];

  const valueFormatter = (value) => `${value} users`;

  return (
    <>
      <SectionTitle>
        WEBSITE
        <br />
        <span className="text-[1.5rem] font-regular text-[--blue-bg] dark:text-[--l-blue-bg]">
          Organic Traffic Performance
        </span>
      </SectionTitle>

      <SectionContainer>
        <div className="flex flex-col xl:flex-row gap-0 !w-full lg:!w-7/12 xl:!w-6/12 m-auto">
          <div>
            <Card color="bg-[--green-bg] mb-4 xl:rounded-l-lg xl:rounded-r-none xl:mr-[-5px] w-12/12 m-auto h-auto">
              <p className="text-xl text-[--d-blue-bg]">
                Number of #1 Rankings
              </p>
              <span className="text-[3rem] md:text-[5rem] font-light">1</span>
            </Card>
            <Card color="bg-[--l-blue-bg] mb-4 xl:rounded-l-lg xl:rounded-r-none xl:mr-[-5px] w-12/12 h-auto">
              <p className="text-xl text-[--d-blue-bg]">
                Number of Page 1 Rankings
              </p>
              <span className="text-[3rem] md:text-[5rem] font-light">3</span>
            </Card>
          </div>
          <Card color="flex flex-col gap-2 p-4 dark:bg-slate-400 bg-white">
            <span className="text-[1.5rem] font-regular text-[--blue-bg] dark:text-[--d-blue-bg]">
              Organic Sessions
            </span>
            <BarChart
              dataset={dataset}
              xAxis={[{ scaleType: "band", dataKey: "month" }]}
              series={[{ dataKey: "traffic", valueFormatter }]}
              {...chartSetting}
            />
          </Card>
        </div>
      </SectionContainer>

      <SectionContainer>
        <LeftSection color="bg-transparent dark:bg-transparent shadow-none p-0 w-12/12 lg:w-6/12">
          <div className="flex flex-col xl:flex-row gap-0">
            <Card color="bg-[--l-blue-bg] mb-4 xl:rounded-l-lg xl:rounded-r-none xl:mr-[-10px] h-1/2">
              <p className="text-xl text-white">Sessions</p>
              <span className="text-[3rem] md:text-[5rem] font-light">910</span>
            </Card>
            <Card color="flex flex-col gap-2 p-4 dark:bg-slate-400 bg-white">
              <LineChart
                xAxis={[{ data: [1, 2, 4, 6, 8, 10] }]}
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
        <LeftSection color="bg-transparent dark:bg-transparent shadow-none p-0 w-12/12 lg:w-6/12">
          <div className="flex flex-col xl:flex-row gap-0">
            <Card color="bg-[--l-blue-bg] mb-4 xl:rounded-l-lg xl:rounded-r-none xl:mr-[-10px] h-1/2">
              <p className="text-xl text-white">New User Sessions</p>
              <span className="text-[3rem] md:text-[5rem] font-light">517</span>
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

export default Website;
