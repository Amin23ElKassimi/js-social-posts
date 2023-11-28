const posts = [
    {
        "id": 1,
        "content": "Scrivere codice è come comporre musica per la mente delle macchine.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.efUvc7EHRuyVrmjNujR5SQHaEo%26pid%3DApi&f=1&ipt=0de582ff505e0050a8a25c6a0b80d68cebe81030697573fbd6cf8f824bb45745&ipo=images"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Nel mondo del coding, ogni punto e virgola conta, come una nota in una partitura.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wLaxgaK-zgcvSMSZyGYyjQHaE8%26pid%3DApi&f=1&ipt=001a88481df31797fd6708d3b571714cdc2af9d1e61a1d17a276f9ed55b7cbd1&ipo=images"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "I programmatori sono i poeti digitali, trasformano pensieri in linguaggio binario.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0LOTB1sl_Gel6qU1UeoakgHaE8%26pid%3DApi&f=1&ipt=f123966c26b69981890971ac78b73b80cffc1a6a441c62868c9fd39774168a5e&ipo=images"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Il codice è il linguaggio segreto che comunica con i computer, una conversazione silenziosa che crea mondi virtuali.",
        "media": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EV8hyDDg5NbbNP9VtDx2XgHaEp%26pid%3DApi&f=1&ipt=505b22341f802bed10abfa5e91bd9f78f2441b61e34f49170dd94c51c212f566&ipo=images",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Debuggare è come risolvere un complicato rompicapo, dove ogni errore è un indizio da seguire.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lU7mWp7uinzYeOGpMkXLUQHaDq%26pid%3DApi&f=1&ipt=3f44b5d3f879009b85cc82a0e058d72118331325f56a1c0b9133c8687989aac3&ipo=images"
        },
        "likes": 7654,
        "created": "2021-03-05"
    },
    // news
    {
        "id": 6,
        "content": "Il coding è l'arte di tradurre idee astratte in istruzioni precise che un computer può eseguire",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Semeraro",
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.sl7nYjNIfPCoDuKqmWVi9gHaFj%26pid%3DApi&f=1&ipt=009d42bcc5279eb7df0e75bcd0bd5bd1d102166ea30c8a20adb2daf972ae46b8&ipo=images"
        },
        "likes": 4211,
        "created": "2021-03-05"
    },
    {
        "id": 7,
        "content": "Ogni parentesi aperta ha la sua parentesi chiusa, come ogni inizio ha la sua fine nel mondo del programmazione.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Federica Arosio",
            "image": "https://dz2cdn4.dzone.com/storage/article-thumb/13876891-thumb.jpg"
        },
        "likes": 3232,
        "created": "2111-12-05"
    },
    {
        "id": 8,
        "content": "Scrivere codice è come costruire una casa virtuale, con ogni riga di codice che rappresenta un mattoncino nel mondo digitale.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Michela Zani",
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.HvT33XBb5A6Smi9TbMrQTgHaHE%26pid%3DApi&f=1&ipt=b8f1eec97165eccad400dc2bfd1ec5a1bb94b81c72271e069a3952993c18ae77&ipo=images"
        },
        "likes": 9215,
        "created": "2024-02-30"
    },
    {
        "id": 9,
        "content": "Nel vasto oceano del coding, ogni programma è una nave che naviga attraverso il flusso di istruzioni, guidata dalla mano del programmatore.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Gianfranco Alfredo",
            "image": "https://picsum.photos/200/300"
        },
        "likes": 1111,
        "created": "2030-08-22"
    }
];


// Milestone 2:
// Prendendo come riferimento il layout di esempio presente nell'html,
//  stampiamo i post del nostro feed.

// ----- ELEMENTS TO PRINT ON DOM -----

// nome autore, OK
// foto autore, 
// data in formato americano OK
// testo del post,  OK
// immagine (non tutti i post devono avere una immagine), OK
// numero di likes. OK



const containerPosts = document.getElementById("container");

posts.forEach((post) => {
    const cardElement = document.createElement('article');

    cardElement.innerHTML = 
        `<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${post.author.name}</div>
                        <div class="post-meta__time">${post.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${post.content}</div>
            <div class="post__image">
                <img src="${post.author.image}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone
                    </div>
                </div> 
            </div>            
         </div>`;
         containerPosts.appendChild(cardElement);
});


 