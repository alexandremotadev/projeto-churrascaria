// console.log("teste log"); teste se script está aparecendo em todas as paginas

// menu ativo - deixar barra ativa embaixo do menu principal

// primeiro verificar links da página
const links = document.querySelectorAll(".header-menu a");
// console.log(links);

function ativarLink(link) {
  // verificar se url está no href
  const url = location.href;
  const href = link.href;

  // verificar qual link url é igual href
  // .includes verifica se a url inclui parte do href (se incluir pelo menos alguma letra, retorna true, se não tiver nada do href retorna false)
  if(url.includes(href)) {
    link.classList.add("ativo"); // adicionar classe ao link
  }
}

// segundo ativar função para cada um dos links
links.forEach(ativarLink);
