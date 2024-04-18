import "@testing-library/jest-dom";
import { vi } from "vitest";
import { cleanup, server } from "./test-utils";

vi.mock("next/navigation", async () => {
  const mockRouter = await import("next-router-mock");
  return {
    ...mockRouter,
  };
});

vi.mock("next/font/google", () => {
  return {
    Montserrat: vi.fn().mockReturnValue({
      className: "className",
      variable: "variable",
      style: { fontFamily: "Montserrat" },
    }),
  };
});

beforeAll(() => {
  cleanup();
  server.listen({ onUnhandledRequest: "error" });
});

afterAll(() => {
  server.close();
  cleanup();
});
