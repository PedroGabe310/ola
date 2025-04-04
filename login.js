document.addEventListener('DOMContentLoaded', function() {
    // Criar corações flutuantes
    function createHearts() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.5;
        heart.style.animation = `float ${Math.random() * 6 + 4}s linear forwards`;
        heart.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        document.querySelector('.heart-animation').appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 10000);
    }
    
    // Criar vários corações
    for (let i = 0; i < 15; i++) {
        setTimeout(createHearts, i * 300);
    }
    
    // Verificar login
    const loginForm = document.getElementById('loginForm');
    const correctPassword = "0303"; // Senha padrão (data do primeiro beijo)
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('password').value;
        
        if (password === correctPassword) {
            // Salvar estado de login no localStorage
            localStorage.setItem('loggedIn', 'true');
            
            // Efeito visual de sucesso
            loginForm.classList.add('success');
            
            // Redirecionar após breve delay para ver a animação
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);
        } else {
            // Efeito visual de erro
            loginForm.classList.add('error');
            setTimeout(() => {
                loginForm.classList.remove('error');
            }, 1000);
            
            // Feedback para o usuário
            alert('Senha incorreta! Dica: Olhe na sua aliança');
        }
    });
});

// Adicionar estilos CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }

    #loginForm.success {
        animation: successShake 0.5s ease;
    }

    #loginForm.error {
        animation: errorShake 0.5s ease;
    }

    @keyframes successShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }

    @keyframes errorShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        50% { transform: translateX(10px); }
        75% { transform: translateX(-10px); }
    }
`;
document.head.appendChild(style);