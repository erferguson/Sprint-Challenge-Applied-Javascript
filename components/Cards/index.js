// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const sectionArticle = document.querySelector('.cards-container')

axios 
    .get('https://lambda-times-backend.herokuapp.com/articles')

    .then((response) => {
        const responseData = Object.keys(response.data.articles);

        responseData.forEach (x => {
            response.data.articles[x].forEach(item => {
                sectionArticle.appendChild(Article(item));
            })
        })
    })

    .catch(error => {
        console.log('error, oh to error', error)
    })

    function Article(item){
        const newCard = document.createElement('div')
        const newHeadline = document.createElement('div')
        const newAuthor = document.createElement('div')
            const imgContainer = document.createElement('div')
            const newImg = document.createElement('img')
        const authorName = document.createElement('span')

        newCard.classList.add('.card')
        newHeadline.classList.add('.headline')
        newAuthor.classList.add('.author')
        imgContainer.classList.add('.img-container')

        newImg.src = item.authorPhoto
        newHeadline.textContent = item.headline
        authorName.textContent = item.authorname

        newCard.appendChild(newHeadline)
        newCard.appendChild(newAuthor)

        newAuthor.appendChild(imgContainer)
            imgContainer.appendChild(newImg)
            imgContainer.appendChild(newImg)
        newAuthor.appendChild(authorName)

        return newCard;
    }