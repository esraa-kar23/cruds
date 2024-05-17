const categoryForm = document.getElementById('categoryForm');
const categoryInput = document.getElementById('categoryInput');
const categoryList = document.getElementById('categoryList');


const categories = JSON.parse(localStorage.getItem('categories')) || [];

function renderCategories() {
    categoryList.innerHTML = '';
    categories.forEach(category => {
        const li = document.createElement('li');
        li.textContent = category;
        categoryList.appendChild(li);
    });
}

renderCategories();

categoryForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newCategory = categoryInput.value;
    
    if (newCategory) {
        categories.push(newCategory);
        localStorage.setItem('categories', JSON.stringify(categories));
        renderCategories();
        categoryInput.value = '';
    }
});

function searchCategory() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredCategories = categories.filter(category => category.toLowerCase().includes(searchInput));
    
    categoryList.innerHTML = '';
    filteredCategories.forEach(category => {
        const li = document.createElement('li');
        li.textContent = category;
        categoryList.appendChild(li);
    });
}