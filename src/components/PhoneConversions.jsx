import { PieChart } from "@mui/x-charts/PieChart";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import Card from "./Card";

const PhoneConversions = () => {
  return (
    <>
      <SectionTitle>PHONE CONVERSIONS</SectionTitle>

      <SectionContainer>
        <div className="flex flex-col lg:flex-row gap-4 bg-transparent">
          <Card color="flex flex-col gap-2 dark:bg-slate-400">
            <span className="text-[--d-blue-bg]">Call Volume By Source</span>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 4, label: "series A" },
                    { id: 1, value: 4, label: "series B" },
                    { id: 2, value: 3, label: "series C" },
                    { id: 3, value: 12, label: "series D" },
                    { id: 4, value: 53, label: "series E" },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
            <div className="flex justify-between px-4 text-[--d-blue-bg]">
              <span>Source</span>
              <span>Total</span>
            </div>
          </Card>
          <Card color="flex flex-col gap-2 align-middle justify-center dark:bg-slate-400">
            <span className="text-[--d-blue-bg]">New Patients By Source</span>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 4, label: "series A" },
                    { id: 1, value: 4, label: "series B" },
                    { id: 2, value: 3, label: "series C" },
                    { id: 3, value: 12, label: "series D" },
                    { id: 4, value: 53, label: "series E" },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </Card>
        </div>

        <div color="grid grid-rows-1 grid-cols-1">
          <Card color="bg-[--orange-bg] !w-full !gap-0">
            <p className="text-xl text-[--d-blue-bg]">
              New Patient Conversions
            </p>
            <span className="text-[3rem] md:text-[5rem] font-light">16</span>
          </Card>
        </div>
      </SectionContainer>
    </>
  );
};

export default PhoneConversions;
