import { PieChart } from "@mui/x-charts/PieChart";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import Card from "./Card";

const OnlineConversions = () => {
  const mockData = [53, 12, 4, 4, 3, 4, 3];
  const patientMockData = 16;

  const sumMockData = () => {
    let sum = 0;
    for (var i = 0; i < mockData.length; i++) {
      sum += mockData[i];
    }
    return sum;
  };

  return (
    <>
      <SectionTitle>
        ONLINE CONVERSIONS
        <br />
        <span className="text-[1.5rem] font-regular text-[--blue-bg] dark:text-[--l-blue-bg]">
          Total Sessions + New Patients
        </span>
      </SectionTitle>

      <SectionContainer>
        <div className="flex flex-col lg:flex-row gap-4 bg-transparent">
          <Card color="dark:bg-slate-400 py-4">
            <span className="text-[--d-blue-bg] px-6 text-[1.5rem]">
              Sessions
            </span>
            <div className="flex flex-col lg:flex-row gap-0 align-middle justify-between">
              <PieChart
                id="pieChart"
                colors={[
                  "#d7a840",
                  "#58bcbd",
                  "#23d8b2",
                  "#4297b9",
                  "#3076a6",
                  "#173861",
                  "#0f243e",
                ]}
                series={[
                  {
                    data: [
                      {
                        id: 0,
                        value: `${mockData[0]}`,
                        color: "#d7a840",
                        label: "Direct",
                      },
                      {
                        id: 1,
                        value: `${mockData[1]}`,
                        color: "#58bcbd",
                        label: "Paid Search",
                      },
                      {
                        id: 2,
                        value: `${mockData[2]}`,
                        color: "#23d8b2",
                        label: "Organic Search",
                      },
                      {
                        id: 3,
                        value: `${mockData[3]}`,
                        color: "#4297b9",
                        label: "Referral",
                      },
                      {
                        id: 4,
                        value: `${mockData[4]}`,
                        color: "#3076a6",
                        label: "Organic Video",
                      },
                      {
                        id: 5,
                        value: `${mockData[5]}`,
                        color: "#173861",
                        label: "Organic Social",
                      },
                      {
                        id: 6,
                        value: `${mockData[6]}`,
                        color: "#0f243e",
                        label: "Unassigned",
                      },
                    ],
                    innerRadius: 60,
                  },
                ]}
                slotProps={{
                  legend: { hidden: true },
                }}
                margin={{ right: -20 }}
                width={400}
                height={250}
              />
              <div className="w-full lg:w-3/4">
                <div className="flex justify-between px-6 text-[--d-blue-bg]">
                  <span>Source</span>
                  <span>Sessions</span>
                </div>
                <div className="flex flex-col text-[--d-blue-bg] px-4 pb-2 w-full">
                  <div className="grid grid-flow-row grid-cols-1 grid-rows-1 gap-1 my-2">
                    <div
                      className={`flex flex-row justify-between rounded-md bg-[#f3dca9] px-2`}>
                      <p>Direct</p>
                      <input
                        type="text"
                        name="d1"
                        id="d1"
                        value={`${mockData[0]}`}
                        className="text-end bg-transparent border-none"
                        readOnly
                      />
                    </div>
                    <div
                      className={`flex flex-row justify-between rounded-md bg-[#afe7e8] px-2`}>
                      <p>Paid Search</p>
                      <input
                        type="text"
                        name="d2"
                        id="d2"
                        value={`${mockData[1]}`}
                        className="text-end bg-transparent border-none"
                        readOnly
                      />
                    </div>
                    <div
                      className={`flex flex-row justify-between rounded-md bg-[#92f6e1] px-2`}>
                      <p>Organic Search</p>
                      <input
                        type="text"
                        name="d3"
                        id="d3"
                        value={`${mockData[2]}`}
                        className="text-end bg-transparent border-none"
                      />
                    </div>
                    <div
                      className={`flex flex-row justify-between rounded-md bg-[#8ec1d3] px-2`}>
                      <p>Referral</p>
                      <input
                        type="text"
                        name="d4"
                        id="d4"
                        value={`${mockData[3]}`}
                        className="text-end bg-transparent border-none"
                        readOnly
                      />
                    </div>

                    <div
                      className={`flex flex-row justify-between rounded-md bg-[#89bcde] px-2`}>
                      <p>Organic Video</p>
                      <input
                        type="text"
                        name="d5"
                        id="d5"
                        value={`${mockData[4]}`}
                        className="text-end bg-transparent border-none"
                        readOnly
                      />
                    </div>
                    <div
                      className={`flex flex-row justify-between rounded-md bg-[#8fb5e3] px-2`}>
                      <p>Organic Social</p>
                      <input
                        type="text"
                        name="d6"
                        id="d6"
                        value={`${mockData[5]}`}
                        className="text-end bg-transparent border-none"
                      />
                    </div>
                    <div
                      className={`flex flex-row justify-between rounded-md bg-[#b9cee7] px-2`}>
                      <p>Unassigned</p>
                      <input
                        type="text"
                        name="d7"
                        id="d7"
                        value={`${mockData[6]}`}
                        className="text-end bg-transparent border-none"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-6 text-[--d-blue-bg]">
                  <span>Total</span>
                  <span>{sumMockData()}</span>
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

export default OnlineConversions;
