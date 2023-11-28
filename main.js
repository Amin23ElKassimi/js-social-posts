const posts = [
    {
        "id": 1,
        "content": "Scrivere codice è come comporre musica per la mente delle macchine.",
        "media": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.efUvc7EHRuyVrmjNujR5SQHaEo%26pid%3DApi&f=1&ipt=0de582ff505e0050a8a25c6a0b80d68cebe81030697573fbd6cf8f824bb45745&ipo=images",
        "author": {
            "name": "Phil Mangione",
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FUYG2ULJI1LzxUqxK9pCZQHaHa%26pid%3DApi&f=1&ipt=83f9d8671c22f68e7ffdd70e7114ba337fe87ba8d86e8ead84a6daf2d09366c5&ipo=images"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Nel mondo del coding, ogni punto e virgola conta, come una nota in una partitura.",
        "media": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wLaxgaK-zgcvSMSZyGYyjQHaE8%26pid%3DApi&f=1&ipt=001a88481df31797fd6708d3b571714cdc2af9d1e61a1d17a276f9ed55b7cbd1&ipo=images",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.MGXWfVh6IdzfUHuZi_TrvgHaHa%26pid%3DApi&f=1&ipt=1e699510d5dc91aae2e1f654dc7a519cd37180e04825d211bee84fd0476cf7db&ipo=images"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "I programmatori sono i poeti digitali, trasformano pensieri in linguaggio binario.",
        "media": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0LOTB1sl_Gel6qU1UeoakgHaE8%26pid%3DApi&f=1&ipt=f123966c26b69981890971ac78b73b80cffc1a6a441c62868c9fd39774168a5e&ipo=images",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.m5IPjbtP__xtoz0TK6DRjQHaHa%26pid%3DApi&f=1&ipt=23f30a96f4e46882ff81817584cd9a5d0f4ac9f5de141010fd3f6ea9e350eb65&ipo=images"
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
            "image": 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ydzk1TTHOUmBDq8sIhZ9JwHaHa%26pid%3DApi&f=1&ipt=36ca0dfad9d9502542f942d21364d9f681ab8b2f1ce6909a36a2513ab77421eb&ipo=images'
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Debuggare è come risolvere un complicato rompicapo, dove ogni errore è un indizio da seguire.",
        "media": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lU7mWp7uinzYeOGpMkXLUQHaDq%26pid%3DApi&f=1&ipt=3f44b5d3f879009b85cc82a0e058d72118331325f56a1c0b9133c8687989aac3&ipo=images",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zc3XRPZxUt4Xt7zDZYLa_wHaHa%26pid%3DApi&f=1&ipt=eb04e1c41e77c8c75837eeca580df4f353c5c822d9b65de12cd55be6a9dbab6c&ipo=images"
        },
        "likes": 7654,
        "created": "2021-03-05"
    },
    // news
    {
        "id": 6,
        "content": "Il coding è l'arte di tradurre idee astratte in istruzioni precise che un computer può eseguire",
        "media": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.sl7nYjNIfPCoDuKqmWVi9gHaFj%26pid%3DApi&f=1&ipt=009d42bcc5279eb7df0e75bcd0bd5bd1d102166ea30c8a20adb2daf972ae46b8&ipo=images",
        "author": {
            "name": "Alessandro Semeraro",
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KEJaw671I5WYuftNN0IOZAAAAA%26pid%3DApi&f=1&ipt=d91b7058c819438a9108218d8f5c79e2fa4910c45c2df58909c6e734b69cd38d&ipo=images"
        },
        "likes": 4211,
        "created": "2021-03-05"
    },
    {
        "id": 7,
        "content": "Ogni parentesi aperta ha la sua parentesi chiusa, come ogni inizio ha la sua fine nel mondo del programmazione.",
        "media": "https://dz2cdn4.dzone.com/storage/article-thumb/13876891-thumb.jpg",
        "author": {
            "name": "Federica Arosio",
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.0A1RSeVHV4YfoDGR2jUvHwHaHa%26pid%3DApi&f=1&ipt=8ac980f68342dc46ffc010d39f2c78820a8e77452f63e6de11c639a53492f317&ipo=images"
        },
        "likes": 3232,
        "created": "2111-12-05"
    },
    {
        "id": 8,
        "content": "Scrivere codice è come costruire una casa virtuale, con ogni riga di codice che rappresenta un mattoncino nel mondo digitale.",
        "media": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.HvT33XBb5A6Smi9TbMrQTgHaHE%26pid%3DApi&f=1&ipt=b8f1eec97165eccad400dc2bfd1ec5a1bb94b81c72271e069a3952993c18ae77&ipo=images",
        "author": {
            "name": "Michela Zani",
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6MEn1wZkViQK-XUfpCl4ogHaHv%26pid%3DApi&f=1&ipt=8e7de1e8b91b509b020f9103e10abfcdc1980dc1f84264f70a0611a07c810c57&ipo=images"
        },
        "likes": 9215,
        "created": "2024-02-30"
    },
    {
        "id": 9,
        "content": "Nel vasto oceano del coding, ogni programma è una nave che naviga attraverso il flusso di istruzioni, guidata dalla mano del programmatore.",
        "media": "https://picsum.photos/200/300",
        "author": {
            "name": "Gianfranco Alfredo",
            "image": null,
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
// foto autore, ok
// data in formato americano OK
// testo del post,  OK
// immagine (non tutti i post devono avere una immagine), OK
// numero di likes. OK


// Elemento DOM sul quale stampare i posts
const containerPosts = document.getElementById("container");

posts.forEach((post) => {
    const cardElement = document.createElement('article');
    cardElement.innerHTML = 
        `<div id="id${post.id}" class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${post.author.name}</div>
                        <div class="post-meta__time">${post.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${post.content}</div>
            <div class="post__image">
                <img src="${post.media}" alt="">
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
        //  Appendi al parent
         containerPosts.appendChild(cardElement);


    // Milestone 3 -
    // Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. 
    // Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like
    const currentLike = document.querySelector(`#id${post.id} .likes__cta`);
    console.log(currentLike);
 
    currentLike.addEventListener('click', function(){
    debugger
        // % metto o tolgo la classe css clicked allo stesso elemento
        currentLike.classList.toggle('clicked');
        
    });
});


 

