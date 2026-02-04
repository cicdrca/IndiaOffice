// Load categories from data file
document.addEventListener('DOMContentLoaded', function() {
    loadCategories();
});

function loadCategories() {
    const categories = window.categoriesData || [];
    const container = document.getElementById('categoriesContainer');
    
    if (categories.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6c757d; padding: 2rem;">No design categories found.</p>';
        return;
    }
    
    container.innerHTML = categories.map(category => `
        <a href="categories/${category.id}/" class="category-card">
            <div class="category-card-content">
                <h3 class="category-card-title">${escapeHtml(category.name)}</h3>
                <p class="category-card-description">${escapeHtml(category.description)}</p>
                <p class="category-card-count">${category.imageCount} image${category.imageCount !== 1 ? 's' : ''}</p>
            </div>
        </a>
    `).join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
