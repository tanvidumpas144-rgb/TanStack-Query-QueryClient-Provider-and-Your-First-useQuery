// ─────────────────────────────────────────────────────────────
// TODO (1/2): Set up TanStack Query.
//   • import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
//   • create ONE QueryClient instance
//   • wrap <App /> in <QueryClientProvider client={queryClient}>
//   • (recommended) add <ReactQueryDevtools /> so you can screenshot the cache
//
// Right now there is NO provider, so any useQuery you add will throw
// "No QueryClient set". Add the provider here first.
// ─────────────────────────────────────────────────────────────

import React from "react";
import ReactDOM from "react-dom/client";

// Import TanStack Query
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.jsx";
import "./index.css";

// Create ONE QueryClient instance
const queryClient = new QueryClient();


// ─────────────────────────────────────────────────────────────
// Render the App
// ─────────────────────────────────────────────────────────────

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    {/* Provide TanStack Query to the entire App */}
    <QueryClientProvider client={queryClient}>

      <App />
       <ReactQueryDevtools initialIsOpen ={false} />  

    </QueryClientProvider>

  </React.StrictMode>
);