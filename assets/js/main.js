/* Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali 
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

Milestone 2 
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

BONUS
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. 
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
Formattare le date in formato italiano (gg/mm/aaaa)
Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone */

//Creiamo il nostro array di oggetti che rappresentano ciascun post
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

console.log(posts[0].likes);
/*** MILESTONE 1 ***/
/*** MILESTONE 2 ***/

//seleziono l'elemento della DOM a cui aggiungere i posts
const posts_container = document.querySelector('.posts-list');

const like_btns = document.getElementsByClassName('like-button')
console.log(like_btns);
let num_of_likes;


function return_num_likes(array, id) {
    
    const thisElement = array.filter((element, index) => {
        if (index == id - 1) {
            return element;
        }
    })

    num_of_likes = thisElement[0].likes;
    console.log(num_of_likes)
}

return_num_likes(posts, 5);

//Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
function add_remove_like(array, DOMel) {

    /* 
    

    const thisElement = array.filter((element, index) => {
        if (index == this_id - 1) {
            return element;
        }
    })

    num_of_likes = thisElement[0].likes; */

    if (DOMel.classList.contains('clicked')) {
        DOMel.classList.remove('clicked');
    } else {
        DOMel.classList.add('clicked');
        num_of_likes++;
    }

    return num_of_likes;
}

//invoco la funzione passando come parametri l'array posts e il posts_container
createPost(posts, posts_container);
select_like_btn(like_btns);

/**
 * funzione per creare posts e stamparli nella DOM
 * @param {Array} array array di oggetti che contiene i posts da creare
 * @param {Element} DOMel elemento della DOM a cui aggiungere il markup
 */
function createPost(array,DOMel) {
    //itero nell'array di oggetti 
    array.forEach((element, index) => {
        //creo il markup che verrà assegnato ad ogni elemento dell'array e lo assegno ad una variabile
        const postMarkup = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author.name}</div>
                        <div class="post-meta__time">${element.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element.content}</div>
            <div class="post__image">
                <img src="${element.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" id="${element.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${return_num_likes(posts, element.id)}</b> persone
                    </div>
                </div> 
            </div>            
        </div> 
        `;

        //stampo il markup di ogni element dentro l'elemento della DOM
        DOMel.innerHTML += postMarkup;
    })
}

/**
 * funzione che seleziona i singoli bottoni dall'HTML collection dei bottoni e appende gli eventListener
 * @param {HTMLCollection} array HTMLcolelction di tutti i like-button della DOM
 */
function select_like_btn(array) {
    //itero per tutta la lunghezza dell'array
    for (let i = 0; i < array.length; i++) {
        //assegno ogni i dell'array ad una variabile like_button 
        const like_button = array.item(i);

        //al click del bottone
        like_button.addEventListener('click', function() {
            //console.log(this)
            //add or remove il like
            add_remove_like(posts, this);

            
        }) 

    }

}
