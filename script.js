const url = "https://striveschool-api.herokuapp.com/books"
let libri = [];
const filterInput = document.getElementById(`search-btn`)
const fetchBooks = () => fetch(url); 

window.onload = () => {
  fetchBooks()
  .then((response) => response.json())
  .then((libriOttenuti) => {
    let contenitore = document.getElementById(`book-result`);
    contenitore.innerHTML = libriOttenuti.map((libro) => {
      return `
      <div class="col col-md-4 col-lg-3 book-card p-0 m-1" id="book_${libro.asin}">
            <div class="card shadow-sm">
                <img id="book-img" src="${libro.img}"/> 
                <div class="card-body">
                    <p id="book-title" class="card-text">${libro.title}</p>
                    <div class="non-ricordo">
                        <div class="btn-group d-flex align-items-center justify-content-between ">
                            <div class="price">
                                €${libro.price}
                            </div>  
                            <div class="buttons-group d-flex align-items-center justify-content-center ">
                                <button type="button" onclick="addToCart('${libro.title}', '${libro.price}', '${libro.asin}')" class="btn btn-sm btn-outline-secondary border-0"><i class="fa-solid fa-cart-plus add-cart"></i></button>
                                <button type="button" onclick="hide(${libro.asin})" class="btn btn-sm btn-outline-secondary border-0"><i class="fa-regular fa-eye-slash hide"></i></button>  
                                <button type="button" onclick="detail()" class="btn btn-sm btn-outline-secondary border-0"><i class="fa-solid fa-circle-info info"></i></button>                  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `;
    }).join(``);
    libri = [...libriOttenuti];
  })
}
  
// funzione per aggiungere al carrello 
const addToCart = (title, price, id) => {
  let contenitore = document.getElementById(`cart`);
    contenitore.innerHTML += `
    <div class="card col-md-8" id="${id}">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">€${price}</p>
        <button onclick="remove(${id})" class="border-0 bg-transparent">Rimuovi</button>
      </div>
    </div>`
  let inToCart = document.getElementById(`book_${id}`)
  inToCart.classList.toggle(`in-to-cart`)
};


// funzione per svuotare il carrello 
const svuota = () => {
  let contenitore = document.getElementById(`cart`)
  contenitore.innerHTML = ``;
}

// funzione per nascondere un articolo 
function hide(id) {
  let hidden = document.getElementById(`book_${id}`)
  hidden.classList.add(`hidden`);
}

// funzione per cercare
filterInput.addEventListener(`input`, () =>{
  let contenitore = document.getElementById(`book-result`);
  contenitore.innerHTML = ``;
  const searchText = filterInput.value;
  const filteredBooks = libri.filter((libri) => {
    const output = libri.title.toLowerCase().includes(searchText.toLowerCase());
    return output;
  })
  filteredBooks.forEach(book => {
    contenitore.innerHTML += `
    <div class="col col-md-4 col-lg-3 book-card p-0 m-1" id="book_${book.asin}">
      <div class="card shadow-sm">
          <img id="book-img" src="${book.img}"/> 
          <div class="card-body">
              <p id="book-title" class="card-text">${book.title}</p>
              <div class="non-ricordo">
                  <div class="btn-group d-flex align-items-center justify-content-between ">
                      <div class="price">
                          €${book.price}
                      </div>  
                      <div class="buttons-group d-flex align-items-center justify-content-center ">
                          <button type="button" onclick="addToCart('${book.title}', '${book.price}', '${book.asin}')" class="btn btn-sm btn-outline-secondary border-0"><i class="fa-solid fa-cart-plus add-cart"></i></button>
                          <button type="button" onclick="hide(${book.asin})" class="btn btn-sm btn-outline-secondary border-0"><i class="fa-regular fa-eye-slash hide"></i></button>  
                          <button type="button" onclick="detail()" class="btn btn-sm btn-outline-secondary border-0"><i class="fa-solid fa-circle-info info"></i></button>                  
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    `
  });
})

function remove (id) {
  let card = document.getElementById(id)
  card.innerHTML = ``;
}

// non capisco perchè, la funzoine rimuovi dal carrello e nascondi (funzionano entrambe con gli ID) non funziona su tutte le card