const url = "https://striveschool-api.herokuapp.com/books"
// let libri = [];

window.onload = () => 
fetch(url)
  .then((response) => response.json())
  .then((libriOttenuti) => {
    let contenitore = document.getElementById(`book-result`);
    contenitore.innerHTML = libriOttenuti.map((libro) => {
      return `
      <div class="col col-md-4 col-lg-3" id="book-card">
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
                                <button type="button" onclick="addToCart('${libro.title}', '${libro.price}')" class="btn btn-sm btn-outline-secondary border-0"><i class="fa-solid fa-cart-plus add-cart"></i></button>
                                <button type="button" class="btn btn-sm btn-outline-secondary border-0"><i class="fa-regular fa-eye-slash hide"></i></button>                      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `;
    }).join(``);
  });


const addToCart = (title, price) => {
  let contenitore = document.getElementById(`cart`);
    contenitore.innerHTML += `<div class="col-md-4">
    <img src="..." class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${price}</p>
    </div>`
};