import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../components/Navbar.tsx"; // Assuming Navbar component is defined in a separate file
import mediaQuery from "css-mediaquery";

function createMatchMedia(width: number) {
  return (query: string) => {
    return {
      matches: mediaQuery.match(query, { width }),
      media: "",
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    };
  };
}

function resizeScreenSize(width: number) {
  window.matchMedia = createMatchMedia(width);
}

describe("Navbar Component", () => {
  // test('menu should be hidden for mobile view', () => {
  //   // set the screen size of the window
  //   resizeScreenSize(400);
  //   render(<Navbar/>);

  //   // Menu should be hidden for mobile view
  //   expect(screen.getByTestId('mobile-sidebar')).not.toBeVisible();
  // })

  test("renders logo and menu trigger for mobile view", () => {
    // set the screen size of the window
    resizeScreenSize(400);
    render(<Navbar />);

    // Logo should be rendered
    expect(screen.getByAltText("logo")).toBeInTheDocument();

    // Menu trigger (hamburger icon) should be rendered for mobile view
    expect(screen.getByAltText("hamburger")).toBeInTheDocument();
  });

  test("renders menu items for mobile view", () => {
    resizeScreenSize(400);
    render(<Navbar />);

    // Menu trigger (hamburger icon) should be clickable and open menu
    fireEvent.click(screen.getByAltText("hamburger"));

    // Sidebar Menu items should be rendered
    expect(screen.getByTestId("mobile-sidebar")).toBeInTheDocument();
  });

  test("renders menu items for desktop view", () => {
    resizeScreenSize(1024);
    render(<Navbar />);

    // hamburder should be hidden for desktop view
    expect(screen.getByAltText("hamburger")).toHaveClass("md:hidden");

    // Menu items should be rendered for desktop view
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  // test('renders language selector and schedule a call button for desktop view', () => {
  //   render(<Navbar />);

  //   // Language selector should be rendered
  //   expect(screen.getByLabelText('language')).toBeInTheDocument();

  //   // Schedule a call button should be rendered
  //   expect(screen.getByText('Schedule a call')).toBeInTheDocument();
  // });

  // You can write more tests to check functionality like clicking on menu items, selecting language, etc.
});
