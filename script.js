document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00f7ff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00f7ff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Animated typing effect for terminal
    const typingText = document.getElementById('typing-text');
    const commands = [
        "git commit -m 'Initial commit'",
        "npm start",
        "docker build -t myapp .",
        "node server.js",
        "python main.py",
        "flutter run",
        "kubectl apply -f deployment.yaml"
    ];
    
    let commandIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeCommand() {
        const currentCommand = commands[commandIndex];
        
        if (isDeleting) {
            typingText.textContent = currentCommand.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentCommand.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentCommand.length) {
            isDeleting = true;
            setTimeout(typeCommand, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            commandIndex = (commandIndex + 1) % commands.length;
            setTimeout(typeCommand, 500);
        } else {
            const typingSpeed = isDeleting ? 100 : 150;
            setTimeout(typeCommand, typingSpeed);
        }
    }
    
    // Start typing effect after a delay
    setTimeout(typeCommand, 3000);

    // Animate stats counters
    function animateCounters() {
        const reposCount = document.getElementById('repos-count');
        const starsCount = document.getElementById('stars-count');
        const forksCount = document.getElementById('forks-count');
        const commitsCount = document.getElementById('commits-count');
        
        const targetRepos = 42;
        const targetStars = 128;
        const targetForks = 56;
        const targetCommits = 892;
        
        const duration = 3000; // 3 seconds
        const interval = 30; // ms
        const steps = duration / interval;
        
        let reposStep = targetRepos / steps;
        let starsStep = targetStars / steps;
        let forksStep = targetForks / steps;
        let commitsStep = targetCommits / steps;
        
        let currentRepos = 0;
        let currentStars = 0;
        let currentForks = 0;
        let currentCommits = 0;
        
        const counterInterval = setInterval(() => {
            currentRepos += reposStep;
            currentStars += starsStep;
            currentForks += forksStep;
            currentCommits += commitsStep;
            
            reposCount.textContent = Math.floor(currentRepos);
            starsCount.textContent = Math.floor(currentStars);
            forksCount.textContent = Math.floor(currentForks);
            commitsCount.textContent = Math.floor(currentCommits);
            
            if (currentRepos >= targetRepos && 
                currentStars >= targetStars && 
                currentForks >= targetForks && 
                currentCommits >= targetCommits) {
                clearInterval(counterInterval);
                
                reposCount.textContent = targetRepos;
                starsCount.textContent = targetStars;
                forksCount.textContent = targetForks;
                commitsCount.textContent = targetCommits;
            }
        }, interval);
    }
    
    // Start counter animation when terminal output is complete
    setTimeout(animateCounters, 4000);

    // Create connection lines between elements
    function createConnections() {
        const svg = document.querySelector('.connections');
        const elements = document.querySelectorAll('.holo-panel, .holo-cube, .holo-terminal, .holo-comm');
        
        // Clear existing lines
        svg.innerHTML = '<defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#00f7ff" /><stop offset="100%" stop-color="#0062ff" /></linearGradient></defs>';
        
        // Create lines between each pair of elements
        for (let i = 0; i < elements.length - 1; i++) {
            for (let j = i + 1; j < elements.length; j++) {
                const elem1 = elements[i];
                const elem2 = elements[j];
                
                const rect1 = elem1.getBoundingClientRect();
                const rect2 = elem2.getBoundingClientRect();
                
                const x1 = rect1.left + rect1.width / 2;
                const y1 = rect1.top + rect1.height / 2;
                const x2 = rect2.left + rect2.width / 2;
                const y2 = rect2.top + rect2.height / 2;
                
                // Only draw line if elements are relatively close
                const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                if (distance < 800) {
                    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    line.setAttribute("x1", x1);
                    line.setAttribute("y1", y1);
                    line.setAttribute("x2", x2);
                    line.setAttribute("y2", y2);
                    line.setAttribute("stroke", "url(#gradient)");
                    line.setAttribute("stroke-width", "1");
                    line.setAttribute("stroke-opacity", "0.3");
                    line.setAttribute("stroke-dasharray", "5,5");
                    
                    svg.appendChild(line);
                    
                    // Animate the line
                    animateLine(line, x1, y1, x2, y2);
                }
            }
        }
    }
    
    function animateLine(line, x1, y1, x2, y2) {
        let length = 0;
        const totalLength = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const duration = 2000 + Math.random() * 1000;
        
        function draw() {
            length += 2;
            if (length > totalLength) length = totalLength;
            
            const angle = Math.atan2(y2 - y1, x2 - x1);
            const endX = x1 + length * Math.cos(angle);
            const endY = y1 + length * Math.sin(angle);
            
            line.setAttribute("x2", endX);
            line.setAttribute("y2", endY);
            
            if (length < totalLength) {
                requestAnimationFrame(draw);
            } else {
                // Once drawn, pulse the line
                pulseLine(line);
            }
        }
        
        draw();
    }
    
    function pulseLine(line) {
        let opacity = 0.3;
        let increasing = true;
        
        function pulse() {
            if (increasing) {
                opacity += 0.01;
                if (opacity >= 0.6) increasing = false;
            } else {
                opacity -= 0.01;
                if (opacity <= 0.2) increasing = true;
            }
            
            line.setAttribute("stroke-opacity", opacity);
            requestAnimationFrame(pulse);
        }
        
        pulse();
    }
    
    // Create initial connections
    createConnections();
    
    // Update connections on resize
    window.addEventListener('resize', createConnections);
    
    // Interactive holographic orbs
    const orbs = document.querySelectorAll('.holographic-orb');
    
    orbs.forEach(orb => {
        // Random movement
        setInterval(() => {
            const x = Math.random() * 80 + 10;
            const y = Math.random() * 80 + 10;
            orb.style.left = `${x}%`;
            orb.style.top = `${y}%`;
        }, 15000);
        
        // Glow effect when hovered
        orb.addEventListener('mouseenter', () => {
            orb.style.filter = 'blur(40px)';
            orb.style.opacity = '0.6';
            orb.style.transition = 'all 0.5s ease';
        });
        
        orb.addEventListener('mouseleave', () => {
            orb.style.filter = 'blur(30px)';
            orb.style.opacity = '0.3';
            orb.style.transition = 'all 1s ease';
        });
    });
    
    // Interactive tech cube
    const cube = document.querySelector('.holo-cube');
    let isDragging = false;
    let startX, startY;
    let rotateX = 0, rotateY = 0;
    
    cube.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        cube.style.cursor = 'grabbing';
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        
        rotateY += deltaX * 0.5;
        rotateX -= deltaY * 0.5;
        
        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        
        startX = e.clientX;
        startY = e.clientY;
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
        cube.style.cursor = 'grab';
    });
    
    // Touch events for mobile
    cube.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        e.preventDefault();
    });
    
    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        const deltaX = e.touches[0].clientX - startX;
        const deltaY = e.touches[0].clientY - startY;
        
        rotateY += deltaX * 0.5;
        rotateX -= deltaY * 0.5;
        
        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        e.preventDefault();
    });
    
    document.addEventListener('touchend', () => {
        isDragging = false;
    });
    
    // Interactive terminal
    const terminal = document.querySelector('.holo-terminal');
    const terminalHeader = terminal.querySelector('.terminal-header');
    
    terminalHeader.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('control-dot')) return;
        
        const startX = e.clientX;
        const startY = e.clientY;
        const startLeft = parseInt(window.getComputedStyle(terminal).left) || 0;
        const startTop = parseInt(window.getComputedStyle(terminal).top) || 0;
        
        function moveTerminal(e) {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            terminal.style.left = `${startLeft + dx}px`;
            terminal.style.top = `${startTop + dy}px`;
            createConnections();
        }
        
        function stopMoving() {
            document.removeEventListener('mousemove', moveTerminal);
            document.removeEventListener('mouseup', stopMoving);
        }
        
        document.addEventListener('mousemove', moveTerminal);
        document.addEventListener('mouseup', stopMoving);
    });
    
    // Terminal control dots functionality
    const controlDots = document.querySelectorAll('.terminal-controls .control-dot');
    
    controlDots[0].addEventListener('click', () => { // Red dot
        terminal.style.transform = 'translateX(-100vw)';
        setTimeout(() => {
            terminal.style.display = 'none';
            createConnections();
        }, 500);
    });
    
    controlDots[1].addEventListener('click', () => { // Yellow dot
        terminal.style.transform = 'scale(0.8)';
        setTimeout(() => {
            terminal.style.transform = 'scale(1)';
        }, 300);
    });
    
    controlDots[2].addEventListener('click', () => { // Green dot
        terminal.classList.toggle('maximized');
        if (terminal.classList.contains('maximized')) {
            terminal.style.width = '90vw';
            terminal.style.height = '90vh';
        } else {
            terminal.style.width = '';
            terminal.style.height = '';
        }
        createConnections();
    });
    
    // Interactive contact form
    const contactForm = document.querySelector('.contact-form');
    const holoButton = document.querySelector('.holo-button');
    const statusLight = document.querySelector('.status-light');
    const statusText = document.querySelector('.status-text');
    
    holoButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Change status to transmitting
        statusLight.style.backgroundColor = '#ffcc00';
        statusLight.style.boxShadow = '0 0 10px #ffcc00';
        statusText.textContent = 'TRANSMITTING...';
        statusText.style.color = '#ffcc00';
        
        // Simulate transmission
        setTimeout(() => {
            statusLight.style.backgroundColor = '#00ff88';
            statusLight.style.boxShadow = '0 0 10px #00ff88';
            statusText.textContent = 'TRANSMISSION COMPLETE';
            statusText.style.color = '#00ff88';
            
            // Reset form
            contactForm.reset();
            
            // Return to ready state after delay
            setTimeout(() => {
                statusLight.style.backgroundColor = '#00f7ff';
                statusLight.style.boxShadow = '0 0 10px #00f7ff';
                statusText.textContent = 'READY FOR TRANSMISSION';
                statusText.style.color = '#00f7ff';
            }, 3000);
        }, 2000);
    });
    
    // Graph animation
    const graphBars = document.querySelectorAll('.graph-bar');
    
    setTimeout(() => {
        graphBars.forEach(bar => {
            const percent = bar.getAttribute('data-percent');
            bar.style.height = `${percent}%`;
        });
    }, 4500);
    
    // Audio effects (commented out by default)
    /*
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    function playHoverSound() {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.value = 800;
        gainNode.gain.value = 0.1;
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
        oscillator.stop(audioContext.currentTime + 0.5);
    }
    
    function playClickSound() {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'square';
        oscillator.frequency.value = 400;
        gainNode.gain.value = 0.2;
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.3);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);
        oscillator.stop(audioContext.currentTime + 0.3);
    }
    
    // Add event listeners for sounds
    document.querySelectorAll('.holo-link, .holo-button, .control-dot').forEach(el => {
        el.addEventListener('mouseenter', playHoverSound);
        el.addEventListener('click', playClickSound);
    });
    */
    
    // Easter egg - Konami code
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                // Konami code completed!
                document.body.classList.add('konami');
                setTimeout(() => {
                    document.body.classList.remove('konami');
                }, 5000);
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    // Initialize with all connections
    createConnections();
});
