function searchCity() {
  const cityInput = document.getElementById("city").value;
  if (!cityInput) {
    // TODO: Show modal to remind user to enter something
    console.log("Please enter a city."); // Temporary console.log for no input
  } else {
    console.log(`Searching for ${cityInput}`);
  }
}