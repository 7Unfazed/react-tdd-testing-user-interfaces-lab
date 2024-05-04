import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays an image with appropriate alt text", () => {
    // Arrange
    render(<App />);
  
    // Act
    const image = screen.getByAltText("Elvis Moses");
  
    // Assert
    expect(image).toBeInTheDocument();
  });
  test("displays a second-level heading with the text 'About Me'", () => {
    // Arrange
    render(<App />);
  
    // Act
    const secondLevelHeading = screen.getByRole("heading", {
      name: /about me/i,
      exact: true,
      level: 2,
    });
  
    // Assert
    expect(secondLevelHeading).toBeInTheDocument();
  });
  test("displays a paragraph for biography", () => {
    // Arrange
    render(<App />);
  
    // Act
    const bioParagraph = screen.getByText("Born into humble beginnings on a serene morning in Nairobi, Kenya, Elvis Moses emerged as a beacon of hope and determination. From an early age, his parents instilled in him the values of hard work, perseverance, and the importance of education. Raised in a close-knit family, Elvis learned to navigate life's challenges with resilience and grace.With unwavering determination, Elvis successfully completed his Kenya Certificate of Secondary Education (KCSE) at the age of 18, achieving a remarkable B plain. His achievement was a testament to his relentless commitment to academic excellence and his unwavering resolve to defy the odds stacked against him."

);
  
    // Assert
    expect(bioParagraph).toBeInTheDocument();
  });
  test("displays links to GitHub and LinkedIn", () => {
    // Arrange
    render(<App />);
  
    // Act
    const githubLink = screen.getByRole("link", { name: /github/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  
    // Assert
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/7Unfazed");
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/Elvis Moses");
  });
  