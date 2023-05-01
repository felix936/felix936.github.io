function enlargeImage(img) {
    // Create a full-screen overlay
    const overlay = document.createElement('div');
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.right = '0';
    overlay.style.bottom = '0';
    overlay.style.zIndex = '9999';
  
    // Create an image element in the overlay
    const enlargedImg = document.createElement('img');
    enlargedImg.src = img.src;
    enlargedImg.style.maxHeight = '90%';
    enlargedImg.style.maxWidth = '90%';
    enlargedImg.style.margin = 'auto';
    enlargedImg.style.position = 'absolute';
    enlargedImg.style.borderRadius = '1vw';
    enlargedImg.style.top = '0';
    enlargedImg.style.left = '0';
    enlargedImg.style.right = '0';
    enlargedImg.style.bottom = '0';
  
    // Add the image element to the overlay
    overlay.appendChild(enlargedImg);
  
    // Add the overlay to the page
    document.body.appendChild(overlay);
  
    // Add a click event listener to the overlay to remove it when clicked
    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });}