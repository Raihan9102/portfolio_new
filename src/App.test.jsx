import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("berhasil dirender tanpa error", () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });
});
