const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Com que frequência você sente ansiedade em seu dia a dia?",
        alternativas: [
            {
                texto: " Raramente",
                afirmacao: " Raramente a ansiedade te domina, você cultiva presença e gratidão para manter sua paz.",
            },
            {
                texto: " Frequentemente ",
                afirmacao: " Quando a ansiedade chega, você respira, aceita o que sente e lembra que tem recursos para  se acalmar.",
            }
        ]
    },
    {
        enunciado: " Quando você se sente ansioso, você tem alguma estratégia ou hábito que tenta praticar para se acalmar?",
        alternativas: [
            {
                texto: " Eu foco na respiração, fazendo-a de forma lenta e controlada, e também escrevo sobre meus sentimentos para processá-los.",
                afirmacao: " Essa abordagem demonstra uma maneira eficaz de lidar com a ansiedade, pois combina técnicas de relaxamento físico, como a respiração controlada, com a expressão emocional, por meio da escrita.",
            },
            {
                texto: "  Eu saio para caminhar e tento me concentrar no momento presente, usando os sentidos para me acalmar, além de recorrer a um aplicativo de meditação para relaxar rapidamente.",
                afirmacao: " Caminhar com atenção e meditar trazem calma e equilíbrio imediato.",
            }
        ]
    },
    {
        enunciado: " A ansiedade pode causar sintomas físicos, como palpitações ou falta de ar?",
        alternativas: [
            {
                texto: " Não, os sintomas da ansiedade são apenas emocionais.",
                afirmacao: " Palpitações, sudorese, tontura e tensão muscular são manifestações físicas comuns da ansiedade, resultantes da ativação do sistema nervoso.",
            },
            {
                texto: " Sim, o corpo reage à ansiedade como se estivesse em perigo real.",
                afirmacao: " O corpo reage à ansiedade como se estivesse em perigo real para enfrentar ou fugir de uma ameaça, o que explica os sintomas físicos como batimentos cardíacos acelerados, respiração ofegante e tensão muscular.",
            }
        ]
    },
    {
        enunciado: "  Ansiedade interfere no seu trabalho ou estudos?",
        alternativas: [
            {
                texto: " Sim",
                afirmacao: " Quando a ansiedade interferir no seu trabalho ou estudos, busque estratégias para retomar o equilíbrio.",
            },
            {
                texto: " Não",
                afirmacao: " Como a ansiedade não atrapalha nas suas atividades, aproveite esse estado de tranquilidade para manter meu foco e produtividade.",
            }
        ]
    },
    {
        enunciado: " Práticas como meditação e exercícios de respiração podem realmente ajudar a controlar a ansiedade?",
        alternativas: [
            {
                texto: " Não, elas são ineficazes para sintomas de ansiedade.",
                afirmacao: "A afirmação de que meditação e exercícios de respiração são ineficazes é falsa. Na verdade, essas práticas são ferramentas valiosas e acessíveis para o gerenciamento da ansiedade.",
            },
            {
                texto: " Sim, elas ajudam a acalmar o sistema nervoso e a focar a mente.",
                afirmacao: " Ao focar a atenção na respiração e no momento presente, essas práticas ajudam a reduzir a frequência cardíaca, a pressão arterial e a liberar a tensão muscular, combatendo os sintomas físicos da ansiedade.",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();