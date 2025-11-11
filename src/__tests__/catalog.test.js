import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Catalog from "../pages/Catalog";

describe("Catalog Page", () => {
  test("TC-01: displays books matching a valid search query", async () => {
    render(<Catalog />);
    const searchInput = screen.getByPlaceholderText(/search/i);

    // Type a search term
    await userEvent.type(searchInput, "Harry");

    // Expect results containing the term
    const results = await screen.findAllByText(/Harry/i);
    expect(results.length).toBeGreaterThan(0);
  });
});
