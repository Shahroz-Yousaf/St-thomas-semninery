document.addEventListener('DOMContentLoaded', function() {
    // Ensure all images maintain aspect ratio
    function fixImageSizes() {
        const allImages = document.querySelectorAll('.event-card img, .life-card img, .outreach-card img');
        
        allImages.forEach(img => {
            // Create a container div if not exists
            if (!img.parentElement.classList.contains('image-container')) {
                const container = document.createElement('div');
                container.className = 'image-container';
                img.parentNode.insertBefore(container, img);
                container.appendChild(img);
                
                // Apply styles to container
                container.style.position = 'relative';
                container.style.width = '100%';
                container.style.paddingBottom = '100%'; // 1:1 aspect ratio
                container.style.overflow = 'hidden';
                
                // Apply styles to image
                img.style.position = 'absolute';
                img.style.top = '0';
                img.style.left = '0';
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
            }
        });
    }

    // Fallback for missing images
    function handleMissingImages() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            img.onerror = function() {
                this.style.display = 'none';
                const placeholder = document.createElement('div');
                placeholder.className = 'image-placeholder';
                placeholder.innerHTML = '<i class="fas fa-image"></i>';
                placeholder.style.backgroundColor = '#f0f0f0';
                placeholder.style.display = 'flex';
                placeholder.style.alignItems = 'center';
                placeholder.style.justifyContent = 'center';
                placeholder.style.fontSize = '2rem';
                placeholder.style.color = '#ccc';
                this.parentNode.insertBefore(placeholder, this);
            };
        });
    }

    // Initialize functions
    fixImageSizes();
    handleMissingImages();

    // Recalculate on window resize
    window.addEventListener('resize', fixImageSizes);
});