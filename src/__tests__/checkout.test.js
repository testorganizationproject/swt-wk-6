import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkout from "../pages/Checkout";
import { StoreProvider } from "../store/StoreProvider";

describe("Checkout Flow", () => {
  test("TC-03: submits checkout with valid data", async () => {
    render(
      <StoreProvider>
        <Checkout />
      </StoreProvider>
    );

    // Fill form fields
    await userEvent.type(screen.getByLabelText(/full name/i), "John Doe");
    await userEvent.type(screen.getByLabelText(/email/i), "john@example.com");
    await userEvent.type(screen.getByLabelText(/address/i), "123 Street");
    await userEvent.type(screen.getByLabelText(/city/i), "Nairobi");
    await userEvent.type(screen.getByLabelText(/country/i), "Kenya");
    await userEvent.type(screen.getByLabelText(/postal code/i), "00100");

    // Click Pay Now
    const payButton = screen.getByRole("button", { name: /pay now/i });
    await userEvent.click(payButton);

    // Expect success message (stubbed, based on your code)
    const msg = await screen.findByText(/payment successful/i);
    expect(msg).toBeInTheDocument();
  });
});
