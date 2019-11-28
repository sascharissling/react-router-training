async function getRecipes(input) {
  const searchValue = input.value;
  const appID = "36f30a0c";
  const apiKey = "1967e8a493e9ea463eaf1e654a98999d";
  const response = await fetch(
    `${proxy}https://api.edamam.com/search?q=${searchValue}&app_id=${appID}&app_key=${apiKey}&from=0&to=50`
  );
  const data = await response.json();
  return data;
  console.log(data);
}
