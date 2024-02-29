import { PieChart } from "@mui/x-charts/PieChart";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import Card from "./Card";

const PhoneConversions = () => {
  const mockData = [53, 12, 3, 4, 4];
  const patientMockData = 16;

  return (
    <>
      <SectionTitle>
        PHONE CONVERSIONS
        <br />
        <span className="text-[1.5rem] font-regular text-[--blue-bg] dark:text-[--l-blue-bg]">
          Unique Calls By Source + New Patients
        </span>
      </SectionTitle>

      <SectionContainer>
        <div className="flex flex-col lg:flex-row gap-4 bg-transparent">
          <Card color="dark:bg-slate-400">
            <span className="text-[--d-blue-bg] px-6">
              Call Volume By Source
            </span>
            <PieChart
              colors={["#d7a840", "#58bcbd", "#4297b9", "#173861", "#3076a6"]}
              series={[
                {
                  data: [
                    {
                      id: 0,
                      value: `${mockData[0]}`,
                      color: "#d7a840",
                      label: "Google Ads",
                    },
                    {
                      id: 1,
                      value: `${mockData[1]}`,
                      color: "#58bcbd",
                      label: "Google Organic",
                    },
                    {
                      id: 2,
                      value: `${mockData[2]}`,
                      color: "#4297b9",
                      label: "Direc",
                    },
                    {
                      id: 3,
                      value: `${mockData[3]}`,
                      color: "#173861",
                      label: "Bing Organic",
                    },
                    {
                      id: 4,
                      value: `${mockData[4]}`,
                      color: "#3076a6",
                      label: "www.AzaleaDentalBar.com",
                    },
                  ],
                },
              ]}
              slotProps={{
                legend: { hidden: true },
              }}
              margin={{ right: 0 }}
              width={400}
              height={250}
            />
            <div className="flex justify-between px-6 text-[--d-blue-bg]">
              <span>Source</span>
              <span>Total Calls</span>
            </div>
            <div className="flex flex-col text-[--d-blue-bg] px-4 pb-2 w-full">
              <div className="grid grid-flow-row grid-cols-1 grid-rows-1 gap-1 my-2">
                <div
                  className={`flex flex-row justify-between rounded-md bg-[#f0c76f] px-2`}>
                  <p>Google Ads</p>
                  <p>53</p>
                </div>
                <div
                  className={`flex flex-row justify-between rounded-md bg-[#77dadc] px-2`}>
                  <p>Google Organic</p>
                  <p>12</p>
                </div>
                <div
                  className={`flex flex-row justify-between rounded-md bg-[#7ed4f5] px-2`}>
                  <p>Direct</p>
                  <p>3</p>
                </div>
                <div
                  className={`flex flex-row justify-between rounded-md bg-[#b4c9e2] px-2`}>
                  <p>Bing Organic</p>
                  <p>4</p>
                </div>
                <div
                  className={`flex flex-row justify-between rounded-md bg-[#72b8e7] px-2`}>
                  <p>www.AzaleaDentalBar.com</p>
                  <p>4</p>
                </div>
              </div>
            </div>
          </Card>
          <Card color="dark:bg-slate-400">
            <span className="text-[--d-blue-bg] px-6">
              Call Volume By Source
            </span>

            <PieChart
              colors={["#d7a840", "#58bcbd", "#4297b9", "#173861", "#3076a6"]}
              series={[
                {
                  data: [
                    {
                      id: 0,
                      value: `${mockData[0]}`,
                      color: "#d7a840",
                      label: "Google Ads",
                    },
                    {
                      id: 1,
                      value: `${mockData[1]}`,
                      color: "#58bcbd",
                      label: "Google Organic",
                    },
                    { id: 2, value: 3, color: "#4297b9", label: "Direc" },
                    {
                      id: 3,
                      value: `${mockData[2]}`,
                      color: "#173861",
                      label: "Bing Organic",
                    },
                    {
                      id: 4,
                      value: `${mockData[4]}`,
                      color: "#3076a6",
                      label: "www.AzaleaDentalBar.com",
                    },
                  ],
                },
              ]}
              slotProps={{
                legend: { hidden: true },
              }}
              margin={{ right: 0 }}
              width={400}
              height={250}
            />
            <div className="flex justify-between px-6 text-[--d-blue-bg]">
              <span>Source</span>
              <span>Total Calls</span>
            </div>
            <div className="flex flex-col text-[--d-blue-bg] px-4 pb-2 w-full">
              <div className="grid grid-flow-row grid-cols-1 grid-rows-1 gap-1 my-2">
                <div
                  className={`flex flex-row justify-between rounded-md bg-[#f0c76f] px-2`}>
                  <p>Google Ads</p>
                  <p>53</p>
                </div>
                <div
                  className={`flex flex-row justify-between rounded-md bg-[#77dadc] px-2`}>
                  <p>Google Organic</p>
                  <p>12</p>
                </div>
                <div
                  className={`flex flex-row justify-between rounded-md bg-[#7ed4f5] px-2`}>
                  <p>Direct</p>
                  <p>3</p>
                </div>
                <div
                  className={`flex flex-row justify-between rounded-md bg-[#b4c9e2] px-2`}>
                  <p>Bing Organic</p>
                  <p>4</p>
                </div>
                <div
                  className={`flex flex-row justify-between rounded-md bg-[#72b8e7] px-2`}>
                  <p>www.AzaleaDentalBar.com</p>
                  <p>4</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div color="grid grid-rows-1 grid-cols-1">
          <Card color="bg-[--orange-bg] !w-full !gap-0">
            <p className="text-xl text-[--d-blue-bg]">
              New Patients Conversions
            </p>
            <span className="text-[3rem] md:text-[5rem] font-light">
              {patientMockData}
            </span>
          </Card>
        </div>
      </SectionContainer>
    </>
  );
};

export default PhoneConversions;
