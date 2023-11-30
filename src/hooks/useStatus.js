import { useState, useEffect } from 'react';

function useStatus(initialStatus) {
  const [status, setStatus] = useState(initialStatus);

  useEffect(() => {
    console.log('Статус змінився:', status);
  }, [status]);

  return [status, setStatus];
}

export default useStatus;
