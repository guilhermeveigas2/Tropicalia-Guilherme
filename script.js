document.addEventListener('DOMContentLoaded', function(){

    const botaoDeacessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeacessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeacessibilidade.addEventListener('click',function(){
        botaoDeacessibilidade.classList.toggle('rotacao-botao');
        opcoesDeacessibilidade.classList.toggle('apresenta-lista')
    })

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${ tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${ tamanhoAtualFonte}rem`;
    });
});
