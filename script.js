// // --- CONFIGURATION DU MOT DE PASSE ---
// const secretName = "Prince"; 

// // --- VERSION 1 : DÉCLARATION DE FLAMME (Celle que tu voulais) ---
// const message = "BRIBO Victoire... ❤️\n\nTu sais, il y a des douceurs que l'on n'ose pas toujours murmurer. Mais aujourd'hui, j'avais ce besoin immense que tu saches... ✨\n\nDepuis le premier jour où j'ai posé les yeux sur toi, j'ai commencé à t'admirer. Porter ce sentiment en silence est devenu un poids, mais si je choisis de taire mon identité pour l'instant, ce n'est pas par manque de courage. Au contraire. 🌹\n\nJe voulais que tu saches sincèrement que je t'aime. Si je ne te le dis pas ouvertement, ce n'est pas par faiblesse ou par incapacité à assumer mes propos — je suis tout à fait capable de te regarder dans les yeux et de te le dire en face. C'est simplement que la situation actuelle impose une retenue que je m'oblige à respecter, avant tout dans ton intérêt.\n\nJe fais ceci pour libérer ce que je porte en moi, tout en préservant l'équilibre de nos mondes. Sache simplement que quelqu'un veille sur toi, avec force et sincérité. 💪❤️\n\n***\n\nJ'insiste sur un point : garde ce message et ce secret pour toi seule. Je sais que tu es quelqu'un de loyale, que cela reste notre secret, peu importe qui je suis... 🤫";

// /* // --- VERSION 2 : L'ÉNIGME (Pour rappel, si tu veux alterner) ---
// const message = "Princesse au charme qui désarme... ❤️<br><br>..." 
// */

// const input = document.getElementById('answer');
// const lockScreen = document.getElementById('lock-screen');
// const messageScreen = document.getElementById('message-screen');
// const textTarget = document.getElementById('text-target');

// function checkCode() {
//     if (input.value.toLowerCase().trim() === secretName.toLowerCase()) {
//         unlock();
//     } else {
//         document.getElementById('error-msg').style.display = 'block';
//         input.value = "";
//     }
// }

// function unlock() {
//     lockScreen.style.opacity = "0";
//     lockScreen.style.transition = "all 0.6s ease";
//     setTimeout(() => {
//         lockScreen.classList.add('hidden');
//         messageScreen.classList.remove('hidden');
//         startTyping();
//     }, 600);
// }

// function startTyping() {
//     let i = 0;
//     function type() {
//         if (i < message.length) {
//             let char = message.charAt(i);
//             textTarget.innerHTML += char === '\n' ? '<br>' : char;
//             let delay = 55; 
//             if (char === '.' || char === '!' || char === '❤️') delay = 900; 
//             else if (char === ',') delay = 400;
//             else if (char === '\n') delay = 1100;
//             i++;
//             setTimeout(type, delay);
//             messageScreen.scrollTo({ top: messageScreen.scrollHeight, behavior: 'smooth' });
//         } else {
//             document.getElementById('reply-area').classList.remove('hidden');
//         }
//     }
//     type();
// }

// // Envoi Formspree
// const form = document.getElementById('valentine-form');
// if (form) {
//     form.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         const data = new FormData(form);
//         const sendBtn = document.getElementById('send-reply');
//         sendBtn.innerText = "Envoi...";
//         const response = await fetch(form.action, {
//             method: 'POST', body: data, headers: { 'Accept': 'application/json' }
//         });
//         if (response.ok) {
//             form.classList.add('hidden');
//             document.getElementById('success-msg').classList.remove('hidden');
//         }
//     });
// }










// // --- CONFIGURATION ---
// // Texte final qui s'affiche (Barrière invisible)
// const message = "Princesse Victoire, la fille aux yeux irresistibles....❤️ \nJe suis celui qui te répète sans cesse de rester concentrée, alors que je lutte moi-même pour ne pas franchir cette barrière invisible à moins d'un mètre de toi... 📏\n\nAujourd'hui tu m'écoutes parce que tu le dois, mais j'espère qu'un jour... tu m'écouteras parce que tu le veux. 🌹";

// // --- DOM ELEMENTS ---
// const input = document.getElementById('answer');
// const lockScreen = document.getElementById('lock-screen');
// const messageScreen = document.getElementById('message-screen');
// const textTarget = document.getElementById('text-target');

// // --- LOGIQUE PERMISSIVE ---
// // Peu importe ce qu'elle tape, tant que ce n'est pas vide, ça passe.
// function checkCode() {
//     if (input.value.trim().length > 0) {
//         unlock();
//     } else {
//         const errorMsg = document.getElementById('error-msg');
//         errorMsg.style.display = 'block';
//         errorMsg.animate([
//             { transform: 'translateX(-5px)' },
//             { transform: 'translateX(5px)' },
//             { transform: 'translateX(0)' }
//         ], { duration: 200, iterations: 2 });
//     }
// }

// // Touche Entrée
// input.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') checkCode();
// });

// function unlock() {
//     // Animation de disparition douce
//     lockScreen.style.opacity = "0";
//     lockScreen.style.transition = "all 0.8s ease";
//     setTimeout(() => {
//         lockScreen.classList.add('hidden');
//         messageScreen.classList.remove('hidden');
//         startTyping();
//     }, 800);
// }

// // --- ÉCRITURE AUTOMATIQUE ---
// function startTyping() {
//     let i = 0;
    
//     function type() {
//         if (i < message.length) {
//             let char = message.charAt(i);
//             textTarget.innerHTML += char === '\n' ? '<br>' : char;
            
//             // Rythme naturel
//             let delay = 50; 
//             if (char === '.' || char === '!' || char === '…') delay = 800; 
//             else if (char === ',') delay = 400;
            
//             i++;
//             setTimeout(type, delay);
            
//             // Scroll automatique
//             const container = document.querySelector('.envelope');
//             if(container) container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });

//         } else {
//             // Affichage du formulaire 2s après la fin du texte
//             setTimeout(() => {
//                 document.getElementById('reply-area').classList.remove('hidden');
//                 // Scroll final vers la note secrète
//                 const container = document.querySelector('.envelope');
//                 if(container) container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
//             }, 2000);
//         }
//     }
//     type();
// }

// // --- ENVOI FORMSPREE ---
// const form = document.getElementById('valentine-form');
// if (form) {
//     form.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         const data = new FormData(form);
//         const sendBtn = document.getElementById('send-reply');
//         sendBtn.innerText = "Envoi...";
//         sendBtn.disabled = true;
        
//         try {
//             const response = await fetch(form.action, {
//                 method: 'POST', 
//                 body: data, 
//                 headers: { 'Accept': 'application/json' }
//             });

//             if (response.ok) {
//                 form.classList.add('hidden');
//                 document.querySelector('.instruction').classList.add('hidden');
//                 document.getElementById('success-msg').classList.remove('hidden');
//             } else {
//                 sendBtn.innerText = "Erreur.";
//                 sendBtn.disabled = false;
//             }
//         } catch (error) {
//             sendBtn.innerText = "Erreur connexion.";
//         }
//     });
// }


















// --- CONFIGURATION ---
const message = "Princesse au charme qui désarme... ❤️<br><br>" +
"Je te donne deux indices. <br><br>" +
"<b>Premier indice :</b> Je fais partie de ton entourage le plus brillant. Si tu filtres tes connaissances sur le critère de l'intelligence, il ne te restera que très peu de personnes... ✨<br><br>" +
"<b>Second indice :</b> Résous cette équation :<br>" +
"<div class='equation-box'>e<sup>2x</sup> - (e+1)e<sup>x</sup> + e = 0</div><br>" +
"Elle possède deux solutions réelles, mais une seule appartient à ℕ*. Ce chiffre est le rang de l'initiale de mon nom de famille dans l'alphabet. <br><br>" +
"<i style='font-size: 0.85rem; color: #666;'><strong>Par exemple :</strong> Si la solution est 2, cela correspondrait à la lettre 'B'. Si c'est 4, cela correspondrait à la 4ème lettre, le 'D'.</i><br><br>" +
"📐 On peut ignorer ses sentiments, mais on ne peut pas contredire un résultat mathématique. 🌹";

// --- ANIMATION DE PLUIE DE PÉTALES ---
function createPetals() {
    const container = document.getElementById('petals-container');
    for (let i = 0; i < 30; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.width = petal.style.height = (Math.random() * 10 + 5) + 'px';
        petal.style.animationDuration = (Math.random() * 3 + 2) + 's';
        petal.style.delay = Math.random() * 5 + 's';
        container.appendChild(petal);
    }
}
createPetals();

// --- EXPLOSION DE FLEURS AU CLIC ---
function burstFlowers(x, y) {
    const flowers = ['🌹', '🌸', '🌺', '✨', '❤️'];
    for (let i = 0; i < 15; i++) {
        const f = document.createElement('div');
        f.className = 'flower-burst';
        f.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
        f.style.left = x + 'px';
        f.style.top = y + 'px';
        f.style.setProperty('--tx', (Math.random() - 0.5) * 300 + 'px');
        f.style.setProperty('--ty', (Math.random() - 0.5) * 300 + 'px');
        document.body.appendChild(f);
        setTimeout(() => f.remove(), 1000);
    }
}

function checkCode(e) {
    const input = document.getElementById('answer');
    if (input.value.trim().length > 0) {
        // Déclenche l'explosion à l'endroit du clic/bouton
        const rect = document.getElementById('validate-btn').getBoundingClientRect();
        burstFlowers(rect.left + rect.width / 2, rect.top);
        setTimeout(unlock, 500);
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

function unlock() {
    document.getElementById('lock-screen').style.opacity = "0";
    setTimeout(() => {
        document.getElementById('lock-screen').classList.add('hidden');
        document.getElementById('message-screen').classList.remove('hidden');
        startTyping();
    }, 600);
}

function startTyping() {
    let i = 0;
    const target = document.getElementById('text-target');
    let textHTML = "";
    let isTag = false;

    function type() {
        if (i < message.length) {
            let char = message.charAt(i);
            if (char === '<') isTag = true;
            if (char === '>') { isTag = false; textHTML += char; i++; type(); return; }
            
            textHTML += char;
            target.innerHTML = textHTML.replace(/\n/g, "<br>");
            
            let delay = isTag ? 0 : 45;
            if (!isTag && (char === '.' || char === '!' || char === '…')) delay = 800;
            
            i++;
            setTimeout(type, delay);
            document.querySelector('.envelope').scrollTo({ top: 10000, behavior: 'smooth' });
        } else {
            setTimeout(() => document.getElementById('reply-area').classList.remove('hidden'), 2000);
        }
    }
    type();
}