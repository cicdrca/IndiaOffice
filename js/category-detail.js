// Image Modal Functionality
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Load images for a category from Office/images/categoryName/ folder
// Images are in: Office/images/categoryName/
// HTML is in: categories/categoryName/index.html
// So image paths from HTML are: ../../Office/images/categoryName/image.jpg
function loadCategoryImages(categoryId) {
    const imagesGallery = document.getElementById('imagesGallery');
    
    // Image paths are relative to the HTML file location
    // Since HTML is in categories/categoryName/index.html
    // and images are in Office/images/categoryName/
    // Path from HTML is: ../../Office/images/categoryName/image.jpg
    // Note: Steps folder is capitalized in the filesystem
    const imageFolderName = categoryId === 'steps' ? 'Steps' : categoryId;
    const imagePath = `../../Office/images/${imageFolderName}/`;
    
    // Get image data for this category
    const categoryImages = window.imagesData && window.imagesData[categoryId];
    
    // Load images
    if (imagesGallery) {
        if (categoryImages && categoryImages.length > 0) {
            imagesGallery.innerHTML = categoryImages.map(imageName => {
                const fullPath = imagePath + encodeURIComponent(imageName);
                const escapedPath = fullPath.replace(/'/g, "\\'");
                return `<div class="gallery-item">
                    <img src="${fullPath}" alt="Design reference" onclick="openModal('${escapedPath}')">
                </div>`;
            }).join('');
        } else {
            imagesGallery.innerHTML = '<p style="text-align: center; color: #6c757d; padding: 2rem;">No images available</p>';
        }
    }
}

// Setup event listeners when page loads
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});
