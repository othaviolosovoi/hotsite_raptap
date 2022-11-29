
// Dispara um modal quando a página carrega
$(document).ready(function(){
    $("#alerta").modal('show');
});

// Dicionário de paramêtros dos IDs
const nomesIDs = {
    // parâmetros do Sobre
    blurSobre: "blur-sobre",
    imgSobre: "img-sobre",
    botaoSobre: "btn-comprar-sobre",
    imgBtnSobre: "btn-sobre",
    desbloqSobre: "desbloq-sobre",
    // parâmetros do Baixar
    blurBaixar: "blur-baixar",
    imgBaixar: "img-baixar",
    botaoBaixar: "btn-comprar-baixar",
    imgBtnBaixar: "btn-baixar",
    desbloqBaixar: "desbloq-baixar",
    // parâmetros do Nawat
    blurNawat: "blur-nawat",
    imgNawat: "img-nawat",
    botaoNawat: "btn-comprar-nawat",
    imgBtnNawat: "btn-nawat",
    desbloqNawat: "desbloq-nawat",
    // parâmetro botão RapTap
    rapTapId: "img-RapTap"
}

// Dicionário de paramêtros dos hovers
const hover = {
    // parâmetros para o Hover dos elementos
    cadeadoHover: "images/cadeadoHover.png",
    cadeado: "images/cadeado.png",
    comprarHover: "images/botaoComprarHover.png",
    comprar: "images/botaoComprar.png",
    rapTapHover: "images/RapTapHover.png",
    rapTap: "images/RapTap.png"
}

   // Contador que guarda o número de Moedas
   var moedas = 0;

    //Função que atualiza o número de moedas no Html
    function updateDisplay(val) {
        document.getElementById("moedas").innerHTML = val;
    }

   // Função que conta as Moedas
   function contadorMoedas(btnP,imgHover) 
   {   
       updateDisplay(moedas+=1)

       //Com 99 moedas dispara um alerta e desabilita o botão
       if(moedas == 99){
           desabilitar(btnP,imgHover);
           $(document).ready(function () {
             $("#alertaParabens").modal('show');
           });
           confete();
       }

        //Remove o aviso inicial se o contador/moedas for igual à 10
       if(moedas == 10 ){
           dispararAlertaDesbloqueio();
           document.getElementById("div-aviso-inicial").remove();
       }
   }

   //Função que desabilita o botão RapTap
   function desabilitar(btnP,imgHover){
       document.getElementById("RapTap").disabled = true;
       document.getElementById("RapTap").style.animation = "none";
       document.getElementById("RapTap").style.cursor = "default";
       imageHoverPrincipal(btnP,imgHover);
   }

   //Função que remove os itens da tela e tira o blur
   function remover(blur,desbloq){
       document.getElementById(blur).style.filter = "blur(0px)";
       document.getElementById(desbloq).remove();
   }

    //Função que atualiza a imagem do botão e cadeado quando está com o mouse em cima
    function imageHover(img,imgBtn,imgHover,imgBtnHover){
        document.getElementById(img).src = imgHover;
        document.getElementById(imgBtn).src = imgBtnHover;
    }
 
    //Função que atualiza a imagem do RapTap quando você está com o mouse em cima
    function imageHoverPrincipal(btnP,imgHover){
        document.getElementById(btnP).src = imgHover;    
    }
 
    //Função que faz o efeito de clicar no botão, atualizando a imagem
    function apertarBtn(imgBtn){
        document.getElementById(imgBtn).src = "images/botaoComprarHoverApertado.png";
    }
 
    //Função que faz o efeito de voltar o botão, atualizando a imagem
    function voltarBtn(imgBtn){
        document.getElementById(imgBtn).src = "images/botaoComprarHover.png";
    }
 
    //Função que faz o efeito de voltar e sumir com o botão, atualizando a imagem para um Gif rodando sua animação
    function voltarSumindo(imgBtn){
        document.getElementById(imgBtn).src = "images/botaoComprarSumindo.gif";
    }
 
    //Função que altera a imagem do cadeado para um Gif rodando sua animação
    function animacaoCadeado(img){
        document.getElementById(img).src = "images/cadeadoAbrindo.gif";
        document.getElementById(img).style.animation = "tilt-shaking 1s";
    }

   //Função de comprar um seção 
   function comprar(blur,botao,img,imgBtn,desbloq){
       // Com 10 moedas será possível desbloquear uma seção, rodar a animação do cadeado, desabilitar o botão e colocar um delay de 1s para remover os itens
       if(moedas>=10){
           updateDisplay(moedas-=10);
           document.getElementById(botao).disabled = true;
           document.getElementById(botao).style.cursor = "default";
           document.getElementById(img).src = "images/cadeado.png";
           document.getElementById(img).style.animation = "tilt-shaking 0.2s linear infinite";
           setTimeout(remover,2400,blur,desbloq); 
           setTimeout(animacaoCadeado,1000,img);  
           apertarBtn(imgBtn);
           setTimeout(voltarSumindo,200,imgBtn);
       }
       
       // Se não tiver 10 moedas dispara um alerta
        else{
            apertarBtn(imgBtn);
            setTimeout(voltarBtn,200,imgBtn);
            setTimeout(dispararAlertaSaldo,300);
       }
   }

    //função que dispara o modal/alerta de Saldo insuficiente
    function dispararAlertaSaldo() {
        $(document).ready(function () {
            $("#alertaSaldo").modal('show');
        });
    }

    //função que dispara o modal/alerta de Desbloqueio
    function dispararAlertaDesbloqueio(){
        $(document).ready(function () {
            $("#alertaDesbloquear").modal('show');
          });
    }

   // Funcção que remove todos os elementos "Jogáveis" do site
   function removerTudo(btnP,imgHover){
        // Remove os "bloqueios"
        document.getElementById("desbloq-sobre").remove();
        document.getElementById("desbloq-baixar").remove();
        document.getElementById("desbloq-nawat").remove();
        // Remove o blur
        document.getElementById("blur-sobre").style.filter = "blur(0px)";
        document.getElementById("blur-baixar").style.filter = "blur(0px)";
        document.getElementById("blur-nawat").style.filter = "blur(0px)";
        // Remove o aviso inicial 
        document.getElementById("div-aviso-inicial").remove();
        // Remove as moedas
        document.getElementById("div-moedas").remove();
        // Desabilita o botão
        desabilitar(btnP,imgHover);
   }



   