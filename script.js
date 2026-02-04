// --- CONFIGURATION ---
// Texte final qui s'affiche (Barrière invisible)
const message = "Princesse Victoire, la fille aux yeux irresistibles....❤️ \nJe suis celui qui te répète sans cesse de rester concentrée, alors que je lutte moi-même pour ne pas franchir cette barrière invisible à moins d'un mètre de toi... 📏\n\nAujourd'hui tu m'écoutes parce que tu le dois, mais j'espère qu'un jour... tu m'écouteras parce que tu le veux. 🌹";

// --- DOM ELEMENTS ---
const input = document.getElementById('answer');
const lockScreen = document.getElementById('lock-screen');
const messageScreen = document.getElementById('message-screen');
const textTarget = document.getElementById('text-target');

// --- LOGIQUE PERMISSIVE ---
// Peu importe ce qu'elle tape, tant que ce n'est pas vide, ça passe.
function checkCode() {
    if (input.value.trim().length > 0) {
        unlock();
    } else {
        const errorMsg = document.getElementById('error-msg');
        errorMsg.style.display = 'block';
        errorMsg.animate([
            { transform: 'translateX(-5px)' },
            { transform: 'translateX(5px)' },
            { transform: 'translateX(0)' }
        ], { duration: 200, iterations: 2 });
    }
}

// Touche Entrée
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkCode();
});

function unlock() {
    // Animation de disparition douce
    lockScreen.style.opacity = "0";
    lockScreen.style.transition = "all 0.8s ease";
    setTimeout(() => {
        lockScreen.classList.add('hidden');
        messageScreen.classList.remove('hidden');
        startTyping();
    }, 800);
}

// --- ÉCRITURE AUTOMATIQUE ---
function startTyping() {
    let i = 0;
    
    function type() {
        if (i < message.length) {
            let char = message.charAt(i);
            textTarget.innerHTML += char === '\n' ? '<br>' : char;
            
            // Rythme naturel
            let delay = 50; 
            if (char === '.' || char === '!' || char === '…') delay = 800; 
            else if (char === ',') delay = 400;
            
            i++;
            setTimeout(type, delay);
            
            // Scroll automatique
            const container = document.querySelector('.envelope');
            if(container) container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });

        } else {
            // Affichage du formulaire 2s après la fin du texte
            setTimeout(() => {
                document.getElementById('reply-area').classList.remove('hidden');
                // Scroll final vers la note secrète
                const container = document.querySelector('.envelope');
                if(container) container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
            }, 2000);
        }
    }
    type();
}

// --- ENVOI FORMSPREE ---
const form = document.getElementById('valentine-form');
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const sendBtn = document.getElementById('send-reply');
        sendBtn.innerText = "Envoi...";
        sendBtn.disabled = true;
        
        try {
            const response = await fetch(form.action, {
                method: 'POST', 
                body: data, 
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                form.classList.add('hidden');
                document.querySelector('.instruction').classList.add('hidden');
                document.getElementById('success-msg').classList.remove('hidden');
            } else {
                sendBtn.innerText = "Erreur.";
                sendBtn.disabled = false;
            }
        } catch (error) {
            sendBtn.innerText = "Erreur connexion.";
        }
    });
}