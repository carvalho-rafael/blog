import { render, screen } from "@testing-library/react";
import NavBar from ".";

describe("App", () => {
  it("Checks if has a link", () => {
    render(<NavBar />);
    expect(
      screen.getByRole("link")
    ).toBeInTheDocument();
  });
});
