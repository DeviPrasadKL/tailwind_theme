import { useTheme } from './context/ThemeContext';
import TabsSection from './views/TabsSection';
import { Switch } from "@/components/ui/switch"

function App() {
  const { toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-light-primary text-light-text dark:bg-dark-primary dark:text-dark-text transition-colors duration-300 p-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-4">Shadcn Components</h1>
        <div className='flex justify-center gap-2'>
          <Switch onClick={toggleTheme} />
          <h4 className='font-semibold'>Theme</h4>
        </div>
      </div>
      <TabsSection />
    </div>
  );
}

export default App;
