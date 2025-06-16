import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    // Access Telegram WebApp directly from window object
    const telegram = window.Telegram?.WebApp;
    if (telegram && telegram.initDataUnsafe?.user) {
      setUser(telegram.initDataUnsafe.user.first_name || 'Unknown User');
    } else {
      setUser('No user data');
    }
  }, []);

  return (
    <div>
      <h1>Telegram Mini App</h1>
      <p>User: {user || 'Loading...'}</p>
    </div>
  );
}

export default App;