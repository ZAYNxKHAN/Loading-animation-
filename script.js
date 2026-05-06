// ===== SKULL ASCII ART =====
const skullArt = `
  ▄███████▄
 ████████████
 ██▀▀▀▀▀▀▀██
 ██    ▄▄  ██
 ██   ███  ██
 ██    ▀▀  ██
 ██ ▄▀▀▀▀▄ ██
 ██ ▀▄▄▄▄▀ ██
 ████████████
  ▀█████████▀
    ██  ██
    ▀▀  ▀▀
`;

// ===== BOOT SEQUENCE =====
const bootMessages = [
    { text: '> INITIALIZING ZSYS_KERNEL v2.0...', type: 'success' },
    { text: '> LOADING DISCIPLINE_MODULES.dll...', type: 'success' },
    { text: '> CONNECTING STREAK_ENGINE.sys...', type: 'success' },
    { text: '> MOUNTING NAMAZ_SCHEDULER...', type: 'warning' },
    { text: '> CALIBRATING TASK_MATRIX...', type: 'success' },
    { text: '> SYNCING RIVAL_DETECTOR.exe...', type: 'warning' },
    { text: '> LOADING GEN-Z_PROTOCOLS...', type: 'success' },
    { text: '> BYPASSING DEMOTIVATION_FIREWALL...', type: 'error' },
    { text: '> FIREWALL BYPASSED!', type: 'success' },
    { text: '> SYSTEM READY! WELCOME, ZAYN 💀', type: 'success' },
];

const subtitleTexts = [
    'FIA ASPIRANT // CSS WARRIOR',
    'DISCIPLINE IS THE CODE',
    'NO FAP. NO VAPE. JUST GRIND.',
    'STREAK OR DIE TRYING 💀',
];

// ===== STATE =====
let progress = 0;
const totalSteps = bootMessages.length;

// ===== MATRIX RAIN =====
function initMatrixRain() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0);
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0FFF50';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;
            
            // Random color variation
            const colors = ['#0FFF50', '#00FF88', '#00F0FF', '#39FF14'];
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            ctx.fillText(char, x, y);
            
            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    return setInterval(draw, 50);
}

// ===== TYPING EFFECT =====
async function typeText(element, text, speed = 50) {
    element.textContent = '';
    for (let i = 0; i < text.length; i++) {
        element.textContent += text[i];
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

// ===== ADD BOOT LOG =====
async function addBootLog() {
    const logContainer = document.getElementById('bootLog');
    
    for (let i = 0; i < bootMessages.length; i++) {
        const msg = bootMessages[i];
        const line = document.createElement('div');
        line.className = `log-line ${msg.type}`;
        line.textContent = msg.text;
        logContainer.appendChild(line);
        
        // Scroll to bottom
        logContainer.scrollTop = logContainer.scrollHeight;
        
        // Update progress
        progress = Math.round(((i + 1) / totalSteps) * 100);
        updateProgress();
        
        // Random delay (shorter for Gen-Z patience 😂)
        const delay = msg.type === 'error' ? 600 : (200 + Math.random() * 300);
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

// ===== UPDATE PROGRESS =====
function updateProgress() {
    const fill = document.getElementById('progressFill');
    const percent = document.getElementById('progressPercent');
    const progressText = document.getElementById('progressText');
    
    fill.style.width = progress + '%';
    percent.textContent = progress + '%';
    
    if (progress < 30) {
        progressText.textContent = 'INITIALIZING...';
    } else if (progress < 60) {
        progressText.textContent = 'LOADING MODULES...';
    } else if (progress < 90) {
        progressText.textContent = 'CALIBRATING...';
    } else {
        progressText.textContent = 'FINALIZING...';
    }
}

// ===== RANDOM SUBTITLE =====
function setRandomSubtitle() {
    const subtitle = subtitleTexts[Math.floor(Math.random() * subtitleTexts.length)];
    document.getElementById('typingSub').textContent = subtitle;
}

// ===== GLITCH EFFECT ON COMPLETE =====
function triggerGlitchComplete() {
    const loader = document.getElementById('loaderScreen');
    loader.style.animation = 'none';
    loader.offsetHeight; // Trigger reflow
    loader.style.animation = 'completeGlitch 0.5s ease-out';
    
    // Add keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes completeGlitch {
            0% { filter: brightness(1); transform: scale(1); }
            20% { filter: brightness(2) hue-rotate(90deg); transform: scale(1.02); }
            40% { filter: brightness(0.5) hue-rotate(-90deg); transform: scale(0.98); }
            60% { filter: brightness(2) saturate(200%); transform: scale(1.01); }
            80% { filter: brightness(0.8); transform: scale(0.99); }
            100% { filter: brightness(3); transform: scale(1.05); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// ===== HIDE LOADER & SHOW APP =====
function showMainApp() {
    setTimeout(() => {
        document.getElementById('loaderScreen').style.display = 'none';
        document.getElementById('mainApp').classList.remove('hidden');
        document.body.style.overflow = 'auto';
    }, 600);
}

// ===== MAIN LOADING SEQUENCE =====
async function startLoading() {
    // 1. Set skull ASCII
    document.getElementById('skullASCII').textContent = skullArt;
    
    // 2. Set random subtitle
    setRandomSubtitle();
    
    // 3. Start matrix rain (stops after loading)
    const matrixInterval = initMatrixRain();
    
    // 4. Wait a beat
    await new Promise(resolve => setTimeout(resolve, 400));
    
    // 5. Start boot sequence
    await addBootLog();
    
    // 6. Update to 100%
    progress = 100;
    updateProgress();
    document.getElementById('progressText').textContent = 'ACCESS GRANTED';
    
    // 7. Stop matrix rain
    clearInterval(matrixInterval);
    
    // 8. Glitch out
    await new Promise(resolve => setTimeout(resolve, 300));
    triggerGlitchComplete();
    
    // 9. Show main app
    showMainApp();
}

// ===== START ON PAGE LOAD =====
window.addEventListener('DOMContentLoaded', startLoading);

// ===== HANDLE RESIZE =====
window.addEventListener('resize', () => {
    const canvas = document.getElementById('matrixCanvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});
