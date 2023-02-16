import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// import { HelmetProvider } from "react-helmet-async";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from "react-hot-toast";
// import { theme } from "../theme";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: false,
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: true,
//       staleTime: 30 * 1000,
//       //   staleTime: 1000 * 60 * 5 // 5 minutes
//     },
//   },
// });

const Provider = ({ children }) => {
  return (
    <BrowserRouter>
      <ChakraProvider>
          <Toaster position="bottom-right" />
          {children}
          
      </ChakraProvider>
    </BrowserRouter>
  );
};


export default Provider;
