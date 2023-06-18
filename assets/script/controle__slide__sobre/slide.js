$(document).ready(function() {
    var cards = $('.secao__instrutores__cards');
    var currentIndex = 0;
    var cardsPorVez = definirCardsPorVez();
    var intervalo = setInterval(atualizarSlide, 3000);
  
    function definirCardsPorVez() {
      var larguraTela = $(window).width();
  
      if (larguraTela <= 400) {
        return 1;
      } else if (larguraTela <= 800) {
        return 2;
      } else {
        return 4;
      }
    }
  
    function atualizarSlide() {
      currentIndex++;
      if (currentIndex >= cards.length) {
        currentIndex = 0;
      }
      exibirCartoes();
    }
  
    function exibirCartoes() {
      cards.hide();
      for (var i = currentIndex; i < currentIndex + cardsPorVez; i++) {
        var index = i % cards.length;
        cards.eq(index).show();
      }
    }
  
    function exibirSlideAnterior() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = cards.length - 1;
      }
      exibirCartoes();
    }
  
    function exibirProximoSlide() {
      currentIndex++;
      if (currentIndex >= cards.length) {
        currentIndex = 0;
      }
      exibirCartoes();
    }
  
    exibirCartoes();
  
    $(window).resize(function() {
      cardsPorVez = definirCardsPorVez();
      exibirCartoes();
    });
  
    cards.hover(function() {
      clearInterval(intervalo);
    }, function() {
      intervalo = setInterval(atualizarSlide, 3000);
    });
  
    $('.botao-anterior').click(function() {
      exibirSlideAnterior();
    });
  
    $('.botao-proximo').click(function() {
      exibirProximoSlide();
    });
  });