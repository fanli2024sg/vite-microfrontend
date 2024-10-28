import { lazy, Suspense } from "react";
const App1 = lazy(() => import("remoteApp/App1"));
function Component() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <App1 />
    </Suspense>
  );
}

export { Component };
