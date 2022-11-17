const scrollMenuContainer = document.getElementById('menu-container');

scrollMenuContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollMenuContainer.scrollLeft += e.deltaY;
});
