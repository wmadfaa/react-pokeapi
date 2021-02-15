import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import { usePokemonAbilityQuery } from "./usePokemonAbilityQuery";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});
const wrapper: React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe(`usePokemonAbilityQuery`, () => {
  it("Success", async () => {
    const { result, waitFor } = renderHook(
      () => usePokemonAbilityQuery("mock-success"),
      {
        wrapper,
      }
    );

    await waitFor(() => result.current.isSuccess);
    expect(result.current.isSuccess).toEqual(true);
  });
  it("Failed", async () => {
    const { result, waitFor } = renderHook(
      () => usePokemonAbilityQuery("mock-error"),
      {
        wrapper,
      }
    );

    await waitFor(() => result.current.isError);
    expect(result.current.error).toEqual(
      Error("Request failed with status code 401")
    );
  });
});
