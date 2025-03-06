// eslint-disable-next-line react/prop-types
const Card = ({ color, children }) => {
  return (
    <div
      className={`${color} rounded-xl text-white p-2 w-full shadow-md shadow-slate-400`}>
      {children}
    </div>
  );
};

export default Card;
