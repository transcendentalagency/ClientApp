// eslint-disable-next-line react/prop-types
const SectionContainer = ({ color, children }) => {
  return (
    <div className={`flex flex-col lg:flex-row gap-4 p-4 ${color}`}>
      {children}
    </div>
  );
};

export default SectionContainer;
