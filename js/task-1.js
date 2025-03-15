const categories = document.querySelectorAll("#categories .item"); // Получаем все категории
console.log(`Number of сategories: ${categories.length}`);
document.querySelectorAll("#categories .item").forEach(category => {
    const title = category.querySelector(".list-title").textContent;
    const categoryNumber = category.querySelectorAll(".categories").length;
    const countItems = category.querySelectorAll(".item-list-item").length;
    console.log(`category: ${title}`);
    console.log(`elements: ${countItems}`);
});

