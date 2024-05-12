// eslint-disable-next-line react/prop-types
const LeftSection = ({ color, children }) => {
  return (
    <div
      className={`${color} bg-white dark:bg-slate-400 shadow-md shadow-slate-400 rounded-xl p-4`}>
      {children}
    </div>
  );
};

export default LeftSection;
