function HomeScreen() {
  return ( <div>
    <main class="main-container">
      <section class="container">
        <div class="banner">
          <a href="/">
            <img class="banner-img" src="../public/img/oferta.png" alt="" />
          </a>
        </div>

        <div class="card-deck">
          <div class="card">
            <img
              class="card-img-top"
              src="../public/img/e60a1e4e90a31bd1eafa1f8ae4c1476b.jpg"
              alt="Imagem de capa do card"
            />
            <div class="card-body">
              <h4 class="card-title">Camiseta Sasuke sharingan feminina</h4>
              <h2 id="preco">R$29,90</h2>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-primary btn-lg btn-block">
                Comprar
              </button>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src="../public/img/d3a0ead1491fd0cf8080ee0162ce7911.jpg"
              alt="Imagem de capa do card"
            />
            <div class="card-body">
              <h4 class="card-title">Camiseta Promissed Neverland</h4>
              <h2 id="preco">R$29,90</h2>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-primary btn-lg btn-block">
                Comprar
              </button>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src="../public/img/27c0d415f17bb04f3f2e8b56cce693cf.jpg"
              alt="Imagem de capa do card"
            />
            <div class="card-body">
              <h4 class="card-title">Camiseta Sacueist feminina</h4>
              <h2 id="preco">R$29,90</h2>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-primary btn-lg btn-block">
                Comprar
              </button>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src="../public/img/e60a1e4e90a31bd1eafa1f8ae4c1476b.jpg"
              alt="Imagem de capa do card"
            />
            <div class="card-body">
              <h4 class="card-title">Camiseta Sasuke sharingan feminina</h4>
              <h2 id="preco">R$29,90</h2>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-primary btn-lg btn-block">
                Comprar
              </button>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top"
              src="../public/img/e60a1e4e90a31bd1eafa1f8ae4c1476b.jpg"
              alt="Imagem de capa do card"
            />
            <div class="card-body">
              <h4 class="card-title">Camiseta Sasuke sharingan feminina</h4>
              <h2 id="preco">R$29,90</h2>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-primary btn-lg btn-block">
                Comprar
              </button>
            </div>
          </div>
        </div>

        <div class="carrossel">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="../public/img/first.jpg"
                  alt="Primeiro Slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="../public/img/first.jpg"
                  alt="Segundo Slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="../public/img/first.jpg"
                  alt="Terceiro Slide"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Anterior</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Próximo</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
    
  );
}

export default HomeScreen;
