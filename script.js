const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1-O que são recifes de coral e por que são impostantes?",
        alternativas: [
            "a)Estruturas rochosas subaquáticas formadas por corais que forncem habitat para uma grande variedade de vida marinha.",
            "b)Formação de gelo flutuantes que abrigram pinguins e focas.",
            "c)Depósitos minerais encontrados no fundo do oceano."
        ]
    },
    {
        enunciado: "2-Qualé a principal fonte de energia nos ecossistemas submarinos?",
        alternativas: [
            "a)Luz solar.",
            "b)Gás metano.",
            "c)Alimentos trazidos por correntes oceânicas."
        ]
    },
    {
        enunciado: "3-O que é um sítioaequeológico subaquático?",
        alternativas: [
            "a)Um local onde,são realizadas escavações submarinas em busca de artefatos antigos. ",
            "b)Uma área onde naúfragios foram documentados.",
            "c)Uma caverna submersa onde foram encontrados vestígios de civilização antiga."
        ]
    },
    {
        enunciado: "4-Por que a preservação de sítios arqueológicos subaquáticos é importante?",
        alternativas: [
            "a)Para proteger a integridade histórica e cultural dos artefatos encontrados.",
            "b)Para fornecer habitat para a vida marinha.",
            "c)Para criar atrações turísticas subaquáticas."
        ]
    },
]; 