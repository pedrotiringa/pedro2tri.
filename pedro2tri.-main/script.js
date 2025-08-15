const caixaPrincipal=document.querySelector('.caixa-principal');
const caixaPergunta=document.querySelector('caixa-perguntas');
const caixaAlternativa=document.querySelector('caixa-alternativa');
const caixaResultado=document.querySelector('caixa-resultado');
const textoResultado=document.querySelector('texto-resultado');

const perguntas =[
    {
        enunciado:"Assim que saiu do colégio você se depara com uma nova tecnologia, um chat que consegue responder todas as duvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas, Qual é seu primeiro pensamento?",
        alternativas:[
            {
            texto:"Isso é assustador!";
            afirmacao:"No início, eu ficaria com medo do que essa tecnologia pode fazer."
    },
    {
        texto:"Isso é incrivel!",
        afirmacao:"Sempre quis saber como usar uma IA em meu dia a dia."
    }
        ]
    }
]