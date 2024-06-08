const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o material usado pelo primeiro porquinho para construir sua casa?",
        alternativas: [{
            texto: "A) Palha",
            afirmacao: "acertou"
        },
        {
            texto: "B) Madeira",
            afirmacao:"errou"
        }
            
    ]
    },
    {
        enunciado: "O que o lobo faz para tentar destruir a casa dos porquinhos?",
        alternativas: [{
            texto: "A) Sopra com força",
            afirmacao: "acertou"
        },
        {
            texto: "B) Escava um túnel" ,
            afirmacao: "errou"  
        }
    
        ]
    },
    {
        enunciado: "Qual casa consegue resistir ao lobo?",
        alternativas: [{
            texto: "A) A casa de madeira",
            afirmacao: "errou"
        },
        {
            texto: "B) A casa de tijolos",
            afirmacao: "acertou"
        }
            
         
        ]
    },
    {
        enunciado: "Como os porquinhos se sentem ao final da história?",
        alternativas: [{
            texto:"A) Felizes e seguros",
            afirmacao:"acertou"
        },
        {
            texto: "B) Amedrontados e inseguros",
            afirmacao:"errou"
        }
            
           
        ]
    },
    {
        enunciado: "O que acontece com o lobo no final da história?",
        alternativas: [{
            texto:"A) Ele foge",
            afirmacao:"acertou"
            
        },
        {
            texto:"B) Ele é capturado",
            afirmacao:"errou"
        }
            
            
        ]
    },
]

let atual = 0;
let perguntaAtual;
let hitoriaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado()
        return;
    }
   
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", ()=>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    hitoriaFinal += afirmacao + " "; 
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = 
"No conto clássico Os Três Porquinhos, três irmãos porquinhos decidem construir casas para se proteger do grande e mau lobo. O primeiro porquinho constrói uma casa de palha, o segundo porquinho constrói uma casa de madeira um pouco mais resistente, enquanto o terceiro porquinho constrói uma casa robusta de tijolos. O lobo, determinado a devorar os porquinhos, primeiro sopra e derruba as casas mais frágeis. No entanto, ele não consegue destruir a casa de tijolos, e os porquinhos conseguem se manter seguros lá dentro. No final, o lobo desiste e foge, sendo incapaz de derrubar a casa mais resistente dos porquinhos. "
"Essa história clássica ensina sobre a importância da persistência e da construção sólida em face dos desafios."
    textoResultado.textContent = hitoriaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();




