const Sidebar = () => {
  return (
    <div className="fixed z-50 top-0 p-2 pt-6 align-middle justify-center left-0 h-full bg-[--white-bg] w-[225px] shadow-lg shadow-slate-400 dark:shadow-black dark:bg-[--dd-blue-bg]">
      <img src="logo" alt="logo" />

      <ul className="flex flex-col gap-4 p-4 w-full text-left">
        <li>
          <a href="#summary" className="p-4 text-left hover:text-[--l-blue-bg]">
            Summary
          </a>
        </li>
        <li>
          <a
            href="#performance"
            className="p-4 text-left hover:text-[--l-blue-bg]">
            Performance
          </a>
        </li>
        <li>
          <a
            href="#phone-conversions"
            className="p-4 text-left hover:text-[--l-blue-bg]">
            Phone Conversions
          </a>
        </li>
        <li>
          <a
            href="#phone-data"
            className="p-4 text-left hover:text-[--l-blue-bg]">
            Phone Data
          </a>
        </li>
        <li>
          <a
            href="#online-conversions"
            className="p-4 text-left hover:text-[--l-blue-bg]">
            Online Conversions
          </a>
        </li>
        <li>
          <a href="#website" className="p-4 text-left hover:text-[--l-blue-bg]">
            Website
          </a>
        </li>
        <li>
          <a
            href="#digital-ads"
            className="p-4 text-left hover:text-[--l-blue-bg]">
            Digital Ads
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
