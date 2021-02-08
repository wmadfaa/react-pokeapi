import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Navigation } from "./navigation";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 min
    },
  },
});

const App: React.VFC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
