import Card from "./Card";

/* 
TODO
CARDS:
- New Patients
- Cost Per Appointment
- ROI $
- ROI %

TODO
LEFT SUMMARY:
- Account Manager : Name
- List of Important Results

*/
const Summary = () => {
  return (
    <>
      <h2 className="text-[1.5rem] text-[--d-blue-bg] dark:text-white px-2">
        EXECUTIVE SUMMARY
      </h2>

      <div className="flex flex-col lg:flex-row gap-4 p-4">
        <div className="lg:w-9/12 bg-white shadow-md shadow-slate-400 rounded-xl p-4">
          <span className="text-lg font-regular text-[--blue-bg] mb-2">
            Account Manager: Taylor Dabbs
          </span>
          <ul className="text-black mt-2">
            <li>Thing 1</li>
            <li>Thing 2</li>
            <li>Thing 3</li>
          </ul>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 grid-flow-col md:grid-flow-row gap-4 w-full lg:w-6/12">
          <Card color="bg-[--l-blue-bg] md:row-start-1">
            <span className="text-[2.5rem] md:text-[3rem] font-light">16</span>
            <p className="text-xl">NEW PATIENTS</p>
          </Card>
          <Card color="bg-[--blue-bg]">
            <span className="text-[2.5rem] md:text-[3rem] font-light">
              $168
            </span>
            <p className="text-xl">COST PER APPOINTMENT</p>
          </Card>
          <Card color="bg-[--orange-bg] md:row-start-1">
            <span className="text-[2.5rem] md:text-[3rem] font-light">
              $5,000
            </span>
            <p className="text-xl">ROI</p>
          </Card>
          <Card color="bg-[--green-bg]">
            <span className="text-[2.5rem] md:text-[3rem] font-light">
              190%
            </span>
            <p className="text-xl">ROI %</p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Summary;
