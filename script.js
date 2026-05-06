// ===== ASCII ART =====
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
    { text: '> SYSTEM READY! WELCOME TO THE MATRIX 💀', type: 'success' },
];

const subtitleTexts = [
    'DISCIPLINE IS THE CODE',
    'NO FAP. NO VAPE. JUST GRIND.',
    'STREAK OR DIE TRYING 💀',
    'PROVE THEM WRONG. RIGHT NOW.',
    'CAN YOU DO IT? 🗿',
];

// ===== UNIVERSAL ROAST QUOTES =====
const universalRoasts = [
    {
        quote: '"REELS dekhni hain zindagi mein?\n\nYa APNA GOAL crack karna hai?"',
        emojis: '💀📱'
    },
    {
        quote: '"CAN YOU DO IT?\n\nYa sirf SCROLL karte rehna hai?"',
        emojis: '🗿🔥'
    },
    {
        quote: '"Teri CRUSH bhi RIVAL ke\nsaath ghumegi agar tu HAR GAYA!"',
        emojis: '💔🆚'
    },
    {
        quote: '"SCREEN TIME dekh apna...\n\nMobile rakh aur GRIND kar!"',
        emojis: '📱⚡'
    },
    {
        quote: '"EXCUSES delete kar...\n\nLEGEND ban... ya AVERAGE reh!"',
        emojis: '👑💀'
    },
    {
        quote: '"Aaj ki streak teri PEHCHAN hai...\n\nKal ki SUCCESS ki guarantee!"',
        emojis: '🎯🔥'
    },
    {
        quote: '"DOPAMINE DETOX kar...\n\nCRUSH ko PROUD feel kara!"',
        emojis: '💀💕'
    },
    {
        quote: '"Losers sleep...\n\nLegends grind at 3 AM!"',
        emojis: '🌙⚡'
    },
    {
        quote: '"Beta PROVE THEM WRONG...\n\nRight Now!"',
        emojis: '🔥👑'
    },
    {
        quote: '"Tera TIME aa gaya...\n\nWASTE mat kar!"',
        emojis: '🎯🗿'
    },
];

// Horizontal scroll texts
const scrollTexts = [
    'CAN YOU DO IT? 🗿',
    'LEGEND OR LOSER? 👑',
    'PROVE THEM WRONG 💀',
    'GRIND NOW ⚡',
    'NO EXCUSES 🔥',
    'CRUSH IS WATCHING 💕',
    'RIVAL IS WINNING 🆚',
    'DOPAMINE DETOX 🧠',
    'STREAK OR DIE 💀',
    'TODAY DECIDE KAR 🎯',
    'WAKE UP & GRIND ⚡',
    'YOUR TIME NOW ⌛',
];

// ===== STATE =====
let progress = 0;
const totalSteps = bootMessages.length;

// ===== MATRIX RAIN (LOADING) =====
function initMatrixRain(canvasId, opacity = 0.6) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0);
    
    function draw() {
        ctx.fillStyle = `rgba(0, 0, 0, ${0.05 / (opacity * 2)})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;
            
            const colors = ['#0FFF50', '#00FF88', '#00F0FF', '#39FF14'];
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            ctx.globalAlpha = opacity;
            ctx.fillText(char, x, y);
            ctx.globalAlpha = 1;
            
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
        
        logContainer.scrollTop = logContainer.scrollHeight;
        
        progress = Math.round(((i + 1) / totalSteps) * 100);
        updateProgress();
        
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
    
    if (progress < 30) progressText.textContent = 'INITIALIZING...';
    else if (progress < 60) progressText.textContent = 'LOADING MODULES...';
    else if (progress < 90) progressText.textContent = 'CALIBRATING...';
    else progressText.textContent = 'FINALIZING...';
}

// ===== SET RANDOM ROAST =====
function setRandomRoast() {
    const roast = universalRoasts[Math.floor(Math.random() * universalRoasts.length)];
    document.getElementById('roastQuote').textContent = roast.quote;
    document.getElementById('roastEmojis').textContent = roast.emojis;
    
    // Set border texts
    const borders = document.querySelectorAll('.roast-border-top, .roast-border-bottom');
    borders[0].textContent = '┌' + '─'.repeat(30) + '┐';
    borders[1].textContent = '└' + '─'.repeat(30) + '┘';
}

// ===== INIT HORIZONTAL SCROLL =====
function initHorizontalScroll() {
    const scroll1 = document.getElementById('horizontalScroll1');
    const scroll2 = document.getElementById('horizontalScroll2');
    const scroll3 = document.getElementById('horizontalScroll3');
    
    // Create long text strings
    scroll1.textContent = scrollTexts.slice(0, 4).join('    ◆    ') + '    ◆    ' + scrollTexts.slice(0, 4).join('    ◆    ');
    scroll2.textContent = scrollTexts.slice(4, 8).join('    ◇    ') + '    ◇    ' + scrollTexts.slice(4, 8).join('    ◇    ');
    scroll3.textContent = scrollTexts.slice(8, 12).join('    ◆    ') + '    ◆    ' + scrollTexts.slice(8, 12).join('    ◆    ');
}

// ===== INIT MAIN APP MATRIX =====
function initMainAppMatrix() {
    initMatrixRain('mainAppCanvas', 0.4);
    setRandomRoast();
    initHorizontalScroll();
    document.getElementById('smallSkullASCII').textContent = skullArt;
}

// ===== GLITCH COMPLETE =====
function triggerGlitchComplete() {
    const loader = document.getElementById('loaderScreen');
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes completeGlitch {
            0% { filter: brightness(1); transform: scale(1); }
            20% { filter: brightness(2) hue-rotate(90deg); transform: scale(1.03); }
            40% { filter: brightness(0.3) hue-rotate(-90deg); transform: scale(0.97); }
            60% { filter: brightness(3) saturate(300%); transform: scale(1.02); }
            80% { filter: brightness(0.5); transform: scale(0.98); }
            100% { filter: brightness(5); transform: scale(1.1); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    loader.style.animation = 'completeGlitch 0.6s ease-out forwards';
}

// ===== SHOW MAIN APP =====
function showMainApp() {
    const mainApp = document.getElementById('mainApp');
    const loader = document.getElementById('loaderScreen');
    
    setTimeout(() => {
        loader.style.display = 'none';
        mainApp.classList.remove('hidden');
        initMainAppMatrix();
        document.body.style.overflow = 'auto';
    }, 700);
}

// ===== SET RANDOM SUBTITLE =====
function setRandomSubtitle() {
    const subtitle = subtitleTexts[Math.floor(Math.random() * subtitleTexts.length)];
    document.getElementById('typingSub').textContent = subtitle;
}

// ===== MAIN LOADING SEQUENCE =====
async function startLoading() {
    // Set skull
    document.getElementById('skullASCII').textContent = skullArt;
    
    // Set random subtitle
    setRandomSubtitle();
    
    // Start matrix rain
    const matrixInterval = initMatrixRain('matrixCanvas', 0.6);
    
    // Wait
    await new Promise(resolve => setTimeout(resolve, 400));
    
    // Boot sequence
    await addBootLog();
    
    // 100%
    progress = 100;
    updateProgress();
    document.getElementById('progressText').textContent = 'ACCESS GRANTED';
    
    // Stop matrix
    clearInterval(matrixInterval);
    
    // Glitch out
    await new Promise(resolve => setTimeout(resolve, 400));
    triggerGlitchComplete();
    
    // Show main app
    showMainApp();
}

// ===== ENTER BUTTON =====
document.addEventListener('DOMContentLoaded', () => {
    // Start loading
    startLoading();
    
    // Enter button click
    document.getElementById('enterBtn').addEventListener('click', () => {
        const mainApp = document.getElementById('mainApp');
        
        // Glitch out effect
        mainApp.style.animation = 'none';
        mainApp.offsetHeight;
        mainApp.style.animation = 'completeGlitch 0.5s ease-out forwards';
        
        setTimeout(() => {
            alert('🚀 Dashboard will load here!\n\nNext: Build the main tracker UI');
            // Yahan dashboard load hoga
        }, 600);
    });
});

// ===== RESIZE HANDLER =====
window.addEventListener('resize', () => {
    ['matrixCanvas', 'mainAppCanvas'].forEach(id => {
        const canvas = document.getElementById(id);
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    });
});
