export const DarkModeToggle: React.FC = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="fixed top-0 start-0 z-50 flex justify-end w-full p-4">
      <label className="inline-flex me-5 cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onClick={toggleDarkMode}
        />
        <div className="relative w-11 h-6 bg-gray rounded-full peer dark:bg-gray peer-focus:ring-4 peer-focus:ring-blue dark:peer-focus:ring-blue peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-white peer-checked:bg-yellow"></div>
      </label>
    </div>
  );
};
