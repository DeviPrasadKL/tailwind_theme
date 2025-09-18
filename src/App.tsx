import { useTheme } from './context/ThemeContext';

function App() {
  const { toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-light-primary text-light-text dark:bg-dark-primary dark:text-dark-text transition-colors duration-300">
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Custom Theming with Tailwind</h1>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:opacity-80 transition"
        >
          Toggle Theme
        </button>

        <div className="flex flex-wrap gap-2 mt-4">
          {Array(100).fill(null).map((_, i) => (
            <div key={i} className="h-4 w-4 bg-dark-primary dark:bg-light-primary rounded"></div>
          ))}
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">
            Sample text
          </h2>
        </div>

        <button className="mt-4 px-4 py-2 rounded bg-light-accent text-white dark:bg-dark-accent transition">
          Themed Button
        </button>
      </div>
    </div>
  );
}

export default App;
