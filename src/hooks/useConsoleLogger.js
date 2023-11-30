import { useEffect } from 'react';

function useConsoleLogger(data) {
  useEffect(() => {
    console.log('Дані змінилися:', data);
  }, [data]);
}

export default useConsoleLogger;
