function alterarImagem(objeto, caminhoNovaImagem)
{
  document.getElementById(objeto).src = caminhoNovaImagem; 

}		

function teste2()
{
  var cabecalho = document.getElementById("coisa");
  console.log(cabecalho.classList.contains("sticky"));
  aux = cabecalho.classList.contains("sticky");
  console.log(aux);
  // true = preto
  // false = nada

  //se negativo
  if (aux)
  {
    //fala q é preto
    console.log("preto");
    alterarImagem('logoo', 'images/logos/logo_amazonia_green.png');

    while(aux){
      console.log("teste");
    }
    while(!aux){
      console.log("nao")
    }
  }
  else
  {
    //fala que é nada
    console.log("nada");
    alterarImagem('logoo', 'images/logos/logo_amazonia_white.png');
  }

}





  // if (cabecalho.classList.contains("sticky"))
  // {
  //   console.log("com barra");
  //   alterarImagem('logoo', 'images/logos/logo_amazonia_green.png');
  //   console.log("Logo alterada para verde");
  // }
  // else
  // {
  //   console.log("sem barra");
  //   alterarImagem('logoo', 'images/logos/logo_amazonia_white.png');
  //   console.log("Logo alterada para branca");

  //   // 8 = preto
  // }

