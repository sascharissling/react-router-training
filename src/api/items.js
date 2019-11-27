export async function getFortniteItems() {
  const response = await fetch(
    `https://fortnite-api.theapinetwork.com/store/get
    `
  );
  const items = await response.json();
  console.log(items.items);
  return items.items;
}
