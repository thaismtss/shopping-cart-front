import { CartProvider } from "@/app/context/cart";
import Layout from "@/app/layout";
import { Providers } from "@/app/providers/providers";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RenderOptions, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { setupServer } from "msw/node";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import { handlers } from "./mocks/handlers";

type Options = Omit<RenderOptions, "wrapper"> & {
  whithDefaultProviders?: boolean;
};

export const DefaultProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Layout>
      <Providers>
        <MemoryRouterProvider>{children}</MemoryRouterProvider>
      </Providers>
    </Layout>
  );
};

const createTestQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
};

const customRender = (ui: React.ReactElement, options?: Options) => {
  if (options?.whithDefaultProviders === false) {
    return render(ui, options);
  } else {
    return render(
      <ChakraProvider>
        <QueryClientProvider client={createTestQueryClient()}>
          <CartProvider>
            <MemoryRouterProvider>{ui}</MemoryRouterProvider>
          </CartProvider>
        </QueryClientProvider>
      </ChakraProvider>,
      { wrapper: DefaultProviders, ...options }
    );
  }
};

export const server = setupServer(...handlers);
export * from "@testing-library/react";
export { mockRouter, customRender as render, user };
