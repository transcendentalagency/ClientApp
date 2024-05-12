// eslint-disable-next-line react/prop-types
const RightSection = ({ children }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 grid-flow-col md:grid-flow-row gap-4 w-full lg:w-6/12">
      {children}
    </div>
  );
};

export default RightSection;
