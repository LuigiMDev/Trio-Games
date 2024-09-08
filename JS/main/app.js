// Menu Hamburguer

const hamburguer = document.querySelector(".mobile-menu");
const nav = document.querySelector(".header__div")

hamburguer.addEventListener("click", () => nav.classList.toggle("active"))


// Adicionar "..." no final dos textos
function reticencias(){
    const elements = document.querySelectorAll('.section__div p');
    const LIMIT = 250;
    
    
    for(let p of elements) {
        const aboveLimit = p.innerText.length > LIMIT;
        const dotsOrEmpty = aboveLimit ? "..." : "";
        p.innerText = p.innerText.substring(0, LIMIT) + dotsOrEmpty;
    };
}

// trazer do banco de dados as informações pro html
let section = document.getElementById('main__section');
let resultados = "";
for(dado of dados) {
    resultados += `
    <div class="section__div">
    <img src="${dado.imagem}" alt="imagem">
    <div class="div__intern">
    <h2>${dado.titulo}</h2>
    <p>${dado.descricao}</p>
    </div>
    </div>
    `
};
section.innerHTML = resultados;
reticencias();

// Barra de Pesquisa

const input = document.getElementById("search__input");

input.addEventListener('keypress', function(event) {
    if (event.key === "Enter"){

        let resultado = input.value;
        resultado = resultado.toLowerCase();
        resultados = "";
        for(let dado of dados) {
            if(dado.titulo.toLowerCase().includes(resultado) || dado.descricao.toLowerCase().includes(resultado)) {
                resultados += `
                <div class="section__div">
                <img src="${dado.imagem}" alt="imagem">
                <div class="div__intern">
                <h2>${dado.titulo}</h2>
                <p>${dado.descricao}</p>
                </div>
                </div>
                `;
                section.style.display = 'grid'
            }
        }
        if (!resultados) {
            resultados = `
            <h2>Nada Foi Encontrado</h2>
            `;
            section.style.display = 'flex';
            section.style.justifyContent = 'center';
        }
        section.innerHTML = resultados;
        reticencias();
    }
});



