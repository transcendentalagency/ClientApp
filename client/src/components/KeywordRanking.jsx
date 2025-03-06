import Card from "./Card";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const KeywordRanking = () => {
  return (
    <>
      <SectionTitle>Keyword Rankings</SectionTitle>
      <SectionContainer>
        <Card color="p-4 overflow-hidden bg-white dark:bg-slate-400">
          <ul className="flex flex-row justify-around gap-2 align-middle text-center w-12/12 p-2 text-[--d-blue-bg] border-b-2 border-[--d-blue-bg]">
            <li className="text-[1rem] md:text-[1.2rem] w-[33%] text-left">
              Keyword
            </li>
            <li className="text-[1rem] md:text-[1.2rem] w-[33%]">
              Google Position
            </li>
            <li className="text-[1rem] md:text-[1.2rem] w-[33%]">
              Estimated Clicks
            </li>
          </ul>
          <div className="flex flex-col w-full gap-4 mt-4 flex-nowrap overflow-y-scroll text-[--blue-bg] dark:text-[--d-blue-bg] max-h-[400px] p-2 text-center touch-pan-x  snap-x">
            {/* This will be a map of data - Just use one ul as reference */}
            <ul className="flex flex-row justify-around gap-2 w-12/12 align-middle text-center border-b-2 border-[--green-bg] py-2">
              <li className="w-[33%] text-left">
                all on 4 dental implants baton rouge la
              </li>
              <li className="w-[33%]">9</li>
              <li className="w-[33%]">1</li>
            </ul>
            <ul className="flex flex-row justify-around gap-2 w-12/12 align-middle text-center border-b-2 border-[--green-bg] py-2">
              <li className="w-[33%] text-left">
                all on 4 dental implants baton rouge la
              </li>
              <li className="w-[33%]">9</li>
              <li className="w-[33%]">1</li>
            </ul>
            <ul className="flex flex-row justify-around gap-2 w-12/12 align-middle text-center border-b-2 border-[--green-bg] py-2">
              <li className="w-[33%] text-left">
                all on 4 dental implants baton rouge la
              </li>
              <li className="w-[33%]">9</li>
              <li className="w-[33%]">1</li>
            </ul>
            <ul className="flex flex-row justify-around gap-2 w-12/12 align-middle text-center border-b-2 border-[--green-bg] py-2">
              <li className="w-[33%] text-left">
                all on 4 dental implants baton rouge la
              </li>
              <li className="w-[33%]">9</li>
              <li className="w-[33%]">1</li>
            </ul>
            <ul className="flex flex-row justify-around gap-2 w-12/12 align-middle text-center border-b-2 border-[--green-bg] py-2">
              <li className="w-[33%] text-left">
                all on 4 dental implants baton rouge la
              </li>
              <li className="w-[33%]">9</li>
              <li className="w-[33%]">1</li>
            </ul>
            <ul className="flex flex-row justify-around gap-2 w-12/12 align-middle text-center border-b-2 border-[--green-bg] py-2">
              <li className="w-[33%] text-left">
                all on 4 dental implants baton rouge la
              </li>
              <li className="w-[33%]">9</li>
              <li className="w-[33%]">1</li>
            </ul>
            <ul className="flex flex-row justify-around gap-2 w-12/12 align-middle text-center border-b-2 border-[--green-bg] py-2">
              <li className="w-[33%] text-left">
                all on 4 dental implants baton rouge la
              </li>
              <li className="w-[33%]">9</li>
              <li className="w-[33%]">1</li>
            </ul>
            <ul className="flex flex-row justify-around gap-2 w-12/12 align-middle text-center border-b-2 border-[--green-bg] py-2">
              <li className="w-[33%] text-left">
                all on 4 dental implants baton rouge la
              </li>
              <li className="w-[33%]">9</li>
              <li className="w-[33%]">1</li>
            </ul>
          </div>
        </Card>
      </SectionContainer>
    </>
  );
};

export default KeywordRanking;
