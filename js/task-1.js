// const categories = document.querySelectorAll("#categories .item");
// console.log(`Number of сategories: ${categories.length}`);
// document.querySelectorAll("#categories .item").forEach(category => {
//     const title = category.querySelector(".list-title").textContent;
//     const categoryNumber = category.querySelectorAll(".categories").length;
//     const countItems = category.querySelectorAll(".item-list-item").length;
//     console.log(`category: ${title}`);
//     console.log(`elements: ${countItems}`);
// });

const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach(category => {
    const title = category.querySelector("h2").textContent; 
    const countItems = category.querySelectorAll("ul li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${countItems}`);
});