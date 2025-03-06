import { PieChart } from "@mui/x-charts";
import Card from "./Card";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const DigitalAds = () => {
  const mockData = [53, 12, 4, 4];
  const conversionMockData = [444, 444, 444, 444];

  const sumMockData = () => {
    let sum = 0;
    for (var i = 0; i < mockData.length; i++) {
      sum += mockData[i];
    }
    return sum;
  };
  const sumConversionMockData = () => {
    let sum = 0;
    for (var i = 0; i < conversionMockData.length; i++) {
      sum += conversionMockData[i];
    }
    return sum;
  };

  return (
    <div id="digital-ads">
      <SectionTitle>
        DIGITAL ADS
        <br />
        <span className="text-[1.5rem] font-regular text-[--blue-bg] dark:text-[--l-blue-bg]">
          Performance By Campaign
        </span>
      </SectionTitle>
      <SectionContainer color="grid grid-cols-1 pb-10">
        <div className="flex flex-col lg:flex-row bg-transparent lg:m-auto max-w-[750px]">
          <Card color="dark:bg-slate-400 p-4 bg-white">
            <span className="text-[--d-blue-bg] px-6 text-[1.5rem]">
              Traffic By Campaign
            </span>
            <div className="flex flex-col lg:flex-row gap-0 align-middle justify-between">
              <PieChart
                id="pieChart"
                colors={[
                  "#6ea6bb",
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
                        value: mockData[0],
                        color: "#6ea6bb",
                        label: "Search - General Dentistry",
                      },
                      {
                        id: 1,
                        value: mockData[1],
                        color: "#58bcbd",
                        label: "Paid Search",
                      },
                      {
                        id: 2,
                        value: mockData[2],
                        color: "#23d8b2",
                        label: "Organic Search",
                      },
                      {
                        id: 3,
                        value: mockData[3],
                        color: "#4297b9",
                        label: "Referral",
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
                  <span>Campaign</span>
                  <span>Clicks</span>
                </div>
                <div className="flex flex-col text-[--d-blue-bg] px-4 pb-2 w-full">
                  <div className="grid grid-flow-row grid-cols-1 grid-rows-1 gap-1 my-2">
                    <div
                      className={`flex flex-row justify-between rounded-md bg-[#6ea6bb] px-2`}>
                      <p>Search - General Dentistry</p>
                      <input
                        type="text"
                        name="d1"
                        id="d1"
                        defaultValue={`${mockData[0]}`}
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
                        defaultValue={`${mockData[1]}`}
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
                        defaultValue={`${mockData[2]}`}
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
                        defaultValue={`${mockData[3]}`}
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

        {/* Cost By Campaign Card */}
        <div className="flex flex-col lg:flex-row bg-transparent gap-4">
          <Card color="dark:bg-slate-400 px-4 bg-white">
            <span className="text-[--d-blue-bg] px-6 text-[1.5rem]">
              Cost By Campaign
            </span>
            <div className="w-full">
              <div className="flex justify-between px-6 text-[--d-blue-bg]">
                <span>Campaign</span>
                <span>Cost</span>
              </div>
              <div className="flex flex-col text-[--d-blue-bg] px-4 pb-2 w-full">
                <div className="grid grid-flow-row grid-cols-1 grid-rows-1 gap-1 my-2">
                  <div
                    className={`flex flex-row justify-between rounded-md bg-[#6ea6bb] px-2`}>
                    <p>Direct</p>
                    <input
                      type="text"
                      name="d1"
                      id="d1"
                      defaultValue={`$${conversionMockData[0]}`}
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
                      defaultValue={`$${conversionMockData[1]}`}
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
                      defaultValue={`$${conversionMockData[2]}`}
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
                      defaultValue={`$${conversionMockData[3]}`}
                      className="text-end bg-transparent border-none"
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-6 text-[--d-blue-bg]">
                <span>Total</span>
                <span>${sumConversionMockData()}</span>
              </div>
            </div>
          </Card>
          <Card color="dark:bg-slate-400 py-4 bg-white">
            <span className="text-[--d-blue-bg] px-6 text-[1.5rem]">
              Cost Per Conversion (CPC)
            </span>
            <div className="w-full">
              <div className="flex justify-between px-6 text-[--d-blue-bg]">
                <span>Campaign</span>
                <span>Cost/Conversions</span>
              </div>
              <div className="flex flex-col text-[--d-blue-bg] px-4 pb-2 w-full">
                <div className="grid grid-flow-row grid-cols-1 grid-rows-1 gap-1 my-2">
                  <div
                    className={`flex flex-row justify-between rounded-md bg-[#6ea6bb] px-2`}>
                    <p>Direct</p>
                    <input
                      type="text"
                      name="d1"
                      id="d1"
                      defaultValue={`$${conversionMockData[0]}`}
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
                      defaultValue={`$${conversionMockData[1]}`}
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
                      defaultValue={`$${conversionMockData[2]}`}
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
                      defaultValue={`$${conversionMockData[3]}`}
                      className="text-end bg-transparent border-none"
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-6 text-[--d-blue-bg]">
                <span>Total</span>
                <span>${sumConversionMockData()}</span>
              </div>
            </div>
          </Card>
        </div>
      </SectionContainer>
    </div>
  );
};

export default DigitalAds;
