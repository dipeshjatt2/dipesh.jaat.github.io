// Advanced Cyber Animations
document.addEventListener('DOMContentLoaded', function() {
    // Matrix Background Effect
    function createMatrixEffect() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '-1';
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const matrixChars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops = [];
        
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        
        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ff41';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                
                drops[i]++;
            }
        }
        
        setInterval(draw, 33);
    }
    
    // Holographic Profile Effect
    function createHologramEffect() {
        const holograms = document.querySelectorAll('.hologram-effect');
        holograms.forEach(hologram => {
            setInterval(() => {
                const hue = Math.floor(Math.random() * 360);
                hologram.style.boxShadow = `0 0 20px 5px hsl(${hue}, 100%, 50%)`;
            }, 1000);
        });
    }
    
    // Cyber Terminal Loader
    function initTerminalLoader() {
        const lines = document.querySelectorAll('.terminal-line');
        let delay = 0;
        
        lines.forEach((line, index) => {
            setTimeout(() => {
                line.style.opacity = '1';
                
                if (index === lines.length - 1) {
                    setTimeout(() => {
                        document.querySelector('.cyber-loader').style.opacity = '0';
                        setTimeout(() => {
                            document.querySelector('.cyber-loader').style.display = 'none';
                            document.querySelector('.main-content').style.display = 'block';
                            initCyberSystems();
                        }, 1000);
                    }, 2000);
                }
            }, delay);
            delay += 1000;
        });
    }
    
    // Initialize all cyber systems
    function initCyberSystems() {
        createMatrixEffect();
        createHologramEffect();
        initHackerTerminal();
        initCyberNavigation();
        initParticleNetwork();
    }
    
    // Initialize the page
    initTerminalLoader();
});

// More animation functions...
