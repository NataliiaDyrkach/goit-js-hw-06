const links = document.querySelectorAll(".item");
console.log(`Number of categories: ${links.length}`);

for (const item of links) {
  const linksName = item.querySelector("h2").textContent;
  const linksNum = item.querySelectorAll("li").length;

  console.log(`Category: ${linksName}`);
  console.log(`Elements: ${linksNum}`);
}
