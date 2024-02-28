import Card from "./Card";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const Summary = () => {
  return (
    <>
      <SectionTitle>EXECUTIVE SUMMARY</SectionTitle>

      <SectionContainer>
        <LeftSection color="lg:w-9/12">
          <span className="text-lg font-regular text-[--blue-bg] dark:text-[--d-blue-bg]">
            Account Manager: Taylor Dabbs
          </span>
          <ul className="text-black mt-2 dark:font-regular p-4">
            <li className="list-disc">Thing 1</li>
            <li className="list-disc">Thing 2</li>
            <li className="list-disc">Thing 3</li>
          </ul>
        </LeftSection>

        <RightSection>
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
        </RightSection>
      </SectionContainer>
    </>
  );
};

export default Summary;
