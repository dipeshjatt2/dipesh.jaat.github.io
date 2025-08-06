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
                "value": "#ffffff"
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
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
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

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Counter animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
        const animate = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animate, 1);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };

        // Start counter when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animate();
                observer.unobserve(counter);
            }
        });

        observer.observe(counter);
    });

    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-level');
    
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = '0%';
        
        // Start animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                bar.style.width = level + '%';
                observer.unobserve(bar);
            }
        });

        observer.observe(bar);
    });

    // Random meme generator
    const memeImg = document.querySelector('.meme-img');
    const refreshBtn = document.getElementById('refresh-meme');

    function loadRandomMeme() {
        // Add timestamp to URL to prevent caching
        const timestamp = new Date().getTime();
        memeImg.src = `https://randommeme-five.vercel.app/?${timestamp}`;
    }

    refreshBtn.addEventListener('click', loadRandomMeme);

    // Initial load
    loadRandomMeme();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For demo purposes, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
            
            // Reset form
            contactForm.reset();
            
            // Add some visual feedback
            const submitBtn = contactForm.querySelector('.submit-btn');
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.backgroundColor = 'var(--success-color)';
            
            setTimeout(() => {
                submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                submitBtn.style.backgroundColor = '';
            }, 3000);
        });
    }

    // Scroll animations
    const animatedElements = document.querySelectorAll('.animated-text, .tech-item, .project-card, .fact-card');
    
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                elementObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        elementObserver.observe(element);
    });

    // Parallax effect for header
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const header = document.querySelector('.animated-header');
        
        if (header) {
            header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });

    // Dynamic typing animation
    const phrases = [
        "Dipesh Choudhary",
        "Full Stack Developer",
        "Tech Wizard",
        "Code Magician",
        "Problem Solver"
    ];
    let currentPhrase = 0;
    const typingElement = document.querySelector('.typing-animation');
    
    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            typingElement.innerHTML = text.substring(0, i + 1) + '<span class="cursor" aria-hidden="true"></span>';
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 2000);
        }
    }
    
    function startTypingAnimation() {
        if (currentPhrase < phrases.length) {
            typeWriter(phrases[currentPhrase], 0, function() {
                currentPhrase = (currentPhrase + 1) % phrases.length;
                startTypingAnimation();
            });
        }
    }
    
    // Start the typing animation
    if (typingElement) {
        setTimeout(startTypingAnimation, 2000);
    }

    // Floating animation for profile image
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.style.animation = 'float 6s ease-in-out infinite';
    }

    // Pulse animation for social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.2}s`;
        icon.style.animation = 'pulse 2s ease-in-out infinite';
    });

    // Add hover effect to tech stack items
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.tech-icon');
            if (icon) {
                icon.style.transform = 'rotate(360deg)';
                icon.style.transition = 'transform 0.5s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.tech-icon');
            if (icon) {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Add confetti effect on click
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('social-icon') {
            createConfetti(e.clientX, e.clientY);
        }
    });

    function createConfetti(x, y) {
        const colors = ['#6e48aa', '#9d50bb', '#4776e6', '#4CAF50', '#FFC107', '#F44336'];
        const confettiCount = 20;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${x}px`;
            confetti.style.top = `${y}px`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            document.body.appendChild(confetti);
            
            const animation = confetti.animate([
                { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
                { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: 1000,
                easing: 'cubic-bezier(0,0.2,0.8,1)',
                fill: 'forwards'
            });
            
            animation.onfinish = () => confetti.remove();
        }
    }

    // Add dynamic background to sections on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition > sectionTop - window.innerHeight / 2 && 
                scrollPosition < sectionTop + sectionHeight - window.innerHeight / 2) {
                const percentage = (scrollPosition - sectionTop + window.innerHeight / 2) / sectionHeight;
                const hue = 270 + percentage * 60; // Purple to blue range
                section.style.boxShadow = `0 5px 15px hsla(${hue}, 60%, 50%, 0.3)`;
            }
        });
    });

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.submit-btn, .refresh-btn, .project-link');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });

    // Add dynamic theme color based on time of day
    function updateThemeBasedOnTime() {
        const hour = new Date().getHours();
        let primaryColor, secondaryColor;
        
        if (hour >= 6 && hour < 12) {
            // Morning - purple to blue
            primaryColor = '#6e48aa';
            secondaryColor = '#4776e6';
        } else if (hour >= 12 && hour < 18) {
            // Afternoon - blue to teal
            primaryColor = '#4776e6';
            secondaryColor = '#4db3a2';
        } else if (hour >= 18 && hour < 22) {
            // Evening - teal to purple
            primaryColor = '#4db3a2';
            secondaryColor = '#6e48aa';
        } else {
            // Night - deep purple to dark blue
            primaryColor = '#4a148c';
            secondaryColor = '#0d47a1';
        }
        
        document.documentElement.style.setProperty('--primary-color', primaryColor);
        document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    }
    
    // Update theme on load and every hour
    updateThemeBasedOnTime();
    setInterval(updateThemeBasedOnTime, 3600000);
});
