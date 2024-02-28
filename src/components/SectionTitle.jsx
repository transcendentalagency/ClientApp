// eslint-disable-next-line react/prop-types
const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-[1.8rem] text-[--dd-blue-bg] dark:text-white px-4">
      {children}
    </h2>
  );
};

export default SectionTitle;
