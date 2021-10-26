import React, { Suspense } from 'react';

const HandleEvent = React.lazy(() => import('./components/HandleEvent'))

function App() {
  return (
    <div>
      Obsługa zdarzeń
      <Suspense fallback={<div>Ładowanie</div>}>
        <HandleEvent />
      </Suspense>
    </div>
  );
}

export default App;
