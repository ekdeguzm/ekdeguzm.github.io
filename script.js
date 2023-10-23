  // Get the current year
  const currentYear = new Date().getFullYear();

  // Find the element by its id
  const yearElement = document.getElementById('current-year');

  // Update the element's content with the current year
  yearElement.textContent = currentYear;