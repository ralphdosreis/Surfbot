export default function initActiveOption() {
  const opcoes = document.querySelectorAll('.opcao li');
  const escolha = document.querySelectorAll('.container-aula-matricula');
  if (document.URL.includes("matricula")) {
    escolha[0].classList.add('ativo');
  }
  if (opcoes && escolha) {
    function activeEscolha(index) {
      escolha.forEach((escolhido) => {
        escolhido.classList.remove('ativo');
      });
      escolha[index].classList.add('ativo');
    }

    opcoes.forEach((opcao, index) => {
      opcao.addEventListener('click', () => {
        activeEscolha(index);
      });
    });
  }
}