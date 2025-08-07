// Enhanced Main Script
document.addEventListener('DOMContentLoaded', function() {
    // Advanced Particle Network
    particlesJS('particles-js', {
        // Enhanced particle config with cyber theme
    });
    
    // Cyber Terminal Simulation
    function initHackerTerminal() {
        const commands = [
            "sudo apt-get install cyber-skills",
            "git clone https://github.com/dipeshjatt2/cyber-wizardry.git",
            "cd cyber-wizardry",
            "npm install quantum-computing",
            "node hack-the-matrix.js",
            "initiate --protocol=cyberpunk",
            "encrypt --algorithm=quantum",
            "deploy --target=global-domination"
        ];
        
        const outputs = [
            "Installing cyber skills... [██████████] 100%",
            "Cloning repository... done.",
            "Entering cyber-wizardry directory",
            "Installing quantum computing package...",
            "Executing matrix hack sequence...",
            "Initializing cyber protocol...",
            "Encrypting with quantum algorithm...",
            "Deploying to global domination network..."
        ];
        
        const terminal = document.getElementById('terminal-output');
        let commandIndex = 0;
        
        function typeWriter(text, element, speed, callback) {
            let i = 0;
            function typing() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typing, speed);
                } else if (callback) {
                    callback();
                }
            }
            typing();
        }
        
        function simulateTyping() {
            if (commandIndex < commands.length) {
                const prompt = document.createElement('div');
                prompt.className = 'terminal-command';
                prompt.innerHTML = `<span class="prompt">$</span> ${commands[commandIndex]}`;
                terminal.appendChild(prompt);
                
                const output = document.createElement('div');
                output.className = 'terminal-response';
                terminal.appendChild(output);
                
                typeWriter(outputs[commandIndex], output, 50, () => {
                    commandIndex++;
                    setTimeout(simulateTyping, 1000);
                });
            }
        }
        
        document.getElementById('execute-hack').addEventListener('click', function() {
            terminal.innerHTML = '';
            commandIndex = 0;
            simulateTyping();
        });
    }
    
    // Quantum Navigation
    function initCyberNavigation() {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = this.getAttribute('href');
                
                // Create quantum transition effect
                document.body.style.opacity = '0';
                
                setTimeout(() => {
                    if (target.startsWith('#')) {
                        document.querySelector(target).scrollIntoView({
                            behavior: 'smooth'
                        });
                    } else if (target !== '#') {
                        window.location.href = target;
                    }
                    document.body.style.opacity = '1';
                }, 500);
            });
        });
    }
    
    // More cyber-enhanced functions...
});
