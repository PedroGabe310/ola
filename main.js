document.addEventListener('DOMContentLoaded', function() {
   
    const carousel = document.getElementById('carousel');
    const images = [
        { src: 'image1.jpg', message: 'Essa é o começo de uma linda historia de amor' },
        { src: 'image2.jpg', message: 'Ela decidida que não queria niguem' },
        { src: 'image3.jpg', message: 'Ele tendo certeza que jamais acharia alguem' },
        { src: 'image4.jpg', message: 'Deus olhou para eles e sorrindo disse "Sejam felizes" e os uniu' },
        { src: 'image5.jpg', message: 'Ainda bem que deu aquele like no tinder ein amor kkk' },
        { src: 'image6.jpg', message: 'Jamais eu teria conhecido algem tão fantastisca quanto você' },
        { src: 'image7.jpg', message: 'Nossa historia só esta no começo de muitos anos juntos (210 anos lembra.)' }
    ];

  
    images.forEach((image, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        carouselItem.innerHTML = `
            <img src="${image.src}" alt="Imagem ${index + 1}">
            <div class="carousel-message">${image.message}</div>
        `;
        
        // Adicionar evento de clique para virar a imagem
        carouselItem.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
        
        carousel.appendChild(carouselItem);
    });

    // Adicionar suporte a touch events para o carrossel
const carouselItems = document.querySelectorAll('.carousel-item');

carouselItems.forEach(item => {
    item.addEventListener('touchstart', handleTouchStart, false);        
    item.addEventListener('touchmove', handleTouchMove, false);
});

let xDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
}

function handleTouchMove(evt) {
    if (!xDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let xDiff = xDown - xUp;

    if (Math.abs(xDiff) > 5) { 
        if (xDiff > 0) {
            
            evt.target.classList.add('flipped');
        } else {
           
            evt.target.classList.remove('flipped');
        }
    }
    xDown = null;
}

    
    const startDate = new Date('2025-03-03T23:02:00');
    function updateCounter() {
        const now = new Date();
        const diff = now - startDate;
        
        
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        

        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        

        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        

        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        

        document.getElementById('years').textContent = years.toString().padStart(2, '0');
        document.getElementById('months').textContent = months.toString().padStart(2, '0');
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    

    updateCounter();
    setInterval(updateCounter, 1000);


const endDate = new Date('2025-04-05T01:50:00'); 
function updateCountdown() {
    const now = new Date();
    const diff = endDate - now; 
    
    
    if (diff <= 0) {
        document.getElementById('years').textContent = '00';
        document.getElementById('months').textContent = '00';
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
   
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    
    
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    
   
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    
    
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
  
    document.getElementById('yearsend').textContent = years.toString().padStart(2, '0');
    document.getElementById('monthsend').textContent = months.toString().padStart(2, '0');
    document.getElementById('daysend').textContent = days.toString().padStart(2, '0');
    document.getElementById('hoursend').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutesend').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('secondsend').textContent = seconds.toString().padStart(2, '0');
}


updateCountdown();
setInterval(updateCountdown, 1000);

document.addEventListener('click', function(e) {
    createHeart(e.clientX, e.clientY);
});

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;
    heart.className = 'heart-effect';
    
    document.body.appendChild(heart);
    

    setTimeout(() => {
        heart.remove();
    }, 4000);
}


function createLoveParticles() {
    const colors = ['#ff4081', '#e91e63', '#f8bbd0', '#ff80ab'];
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.innerHTML = ['❤️', '💖', '💗', '💓'][Math.floor(Math.random() * 4)];
        particle.style.position = 'fixed';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = '100vh';
        particle.style.fontSize = `${Math.random() * 10 + 5}px`;
        particle.style.opacity = Math.random() * 0.05 + 0.05;
        particle.style.animation = `float-heart ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 5000);
    }, 300);
}

 createLoveParticles();
});




