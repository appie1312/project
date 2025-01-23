function submitRating() {
       
    const rating = document.getElementById('movie-rating').value;

    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block'; 

 
    document.getElementById('movie-rating').selectedIndex = 0; 
}