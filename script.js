const secretName = "junior"; 

const message = "BRIBO Victoire... ❤️\n\nTu sais, il y a des douceurs que l'on n'ose pas toujours murmurer. Mais aujourd'hui, j'avais ce besoin immense que tu saches... ✨\n\nDepuis le premier jour où j'ai posé les yeux sur toi, j'ai commencé à t'admirer. Porter ce sentiment en silence est devenu un poids, mais si je choisis de taire mon identité pour l'instant, ce n'est pas par manque de courage. Au contraire. 🌹\n\nJe voulais que tu saches sincèrement que je t'aime. Si je ne te le dis pas ouvertement, ce n'est pas par faiblesse ou par incapacité à assumer mes propos — je suis tout à fait capable de te regarder dans les yeux et de te le dire en face. C'est simplement que la situation actuelle impose une retenue que je m'oblige à respecter, avant tout dans ton intérêt.\n\nJe fais ceci pour libérer ce que je porte en moi, tout en préservant l'équilibre de nos mondes. Sache simplement que quelqu'un veille sur toi, avec force et sincérité. 💪❤️\n\n***\n\nJ'insiste sur un point : garde ce message et ce secret pour toi seule. Je sais que tu es quelqu'un de loyale, que cela reste notre secret, peu importe qui je suis... 🤫";

const input = document.getElementById('answer');
const lockScreen = document.getElementById('lock-screen');
const messageScreen = document.getElementById('message-screen');
const textTarget = document.getElementById('text-target');

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (input.value.toLowerCase().trim() === secretName.toLowerCase()) {
            unlock();
        } else {
            document.getElementById('error-msg').style.display = 'block';
            input.value = "";
        }
    }
});

function showHint() {
    document.getElementById('input-area').classList.add('hidden');
    document.getElementById('error-msg').style.display = 'none';
    const hintZone = document.getElementById('hint-zone');
    document.getElementById('hint-name').innerText = secretName.charAt(0).toUpperCase() + secretName.slice(1);
    hintZone.classList.remove('hidden');
}

function unlock() {
    lockScreen.style.opacity = "0";
    lockScreen.style.transition = "all 0.6s ease";
    setTimeout(() => {
        lockScreen.classList.add('hidden');
        messageScreen.classList.remove('hidden');
        startTyping();
    }, 600);
}

function startTyping() {
    let i = 0;
    function type() {
        if (i < message.length) {
            let char = message.charAt(i);
            textTarget.innerHTML += char === '\n' ? '<br>' : char;
            let delay = 55; 
            if (char === '.' || char === '!' || char === '❤️') delay = 900; 
            else if (char === ',') delay = 400;
            else if (char === '\n') delay = 1100;
            i++;
            setTimeout(type, delay);
            messageScreen.scrollTop = messageScreen.scrollHeight;
        } else {
            // Affiche le formulaire de réponse à la fin
            document.getElementById('reply-area').classList.remove('hidden');
        }
    }
    type();
}

// Gestion de l'envoi Formspree
const form = document.getElementById('valentine-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const sendBtn = document.getElementById('send-reply');
    sendBtn.innerText = "Envoi en cours...";
    
    const response = await fetch(form.action, {
        method: 'POST', body: data, headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        form.classList.add('hidden');
        document.querySelector('#reply-area .instruction').classList.add('hidden');
        document.getElementById('success-msg').classList.remove('hidden');
    }
});