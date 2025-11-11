import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";
import { StoreProvider } from "../store/StoreProvider";

describe("Cart Feature", () => {
  test("TC-02: adding item increases cart badge count", async () => {
    render(
      <StoreProvider>
        <Catalog />
      </StoreProvider>
    );

    const addButtons = await screen.findAllByRole("button", { name: /add to cart/i });
    await userEvent.click(addButtons[0]);

    // Re-render the Navbar badge
    render(
      <StoreProvider>
        <Cart />
      </StoreProvider>
    );

    const badge = screen.getByTestId("cart-count");
    expect(Number(badge.textContent)).toBeGreaterThan(0);
  });

  test("TC-04: cart persists after reload (localStorage)", () => {
    localStorage.setItem(
      "app.cart",
      JSON.stringify([{ id: 1, book: { title: "Sample Book" }, quantity: 1 }])
    );

    render(
      <StoreProvider>
        <Cart />
      </StoreProvider>
    );

    expect(screen.getByText(/sample book/i)).toBeInTheDocument();
  });
});
