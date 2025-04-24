import { ApplicationProvider } from './app/providers';
import { Routes } from './app/routes';

function App() {
  return (
    <ApplicationProvider>
      <Routes />
    </ApplicationProvider>
  );
}

export default App;
