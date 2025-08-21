const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    
    {
        enunciado: "Sua professora de ciências decidiu abordar como a IA está revolucionando as áreas da medicina. Você foi convidado a escrever um relatório sobre as aplicações da IA na área da saúde. Como você procede?",
        alternativas: [
            {
                texto: "Utiliza um assistente de IA para pesquisar artigos e materiais sobre as inovações mais recentes na medicina, utilizando uma linguagem técnica e precisa.",
                afirmacao: "Conseguiu usar a IA para pesquisar informações avançadas sobre medicina."
            },
            {
                texto: "Busca informações sobre o tema em livros, artigos acadêmicos e conversa com colegas para aprofundar seu entendimento sobre a IA na medicina.",
                afirmacao: "Preferiu usar recursos tradicionais e pessoais para desenvolver o relatório."
            }
        ]
    },
    {
        enunciado: "Durante uma atividade prática em sala, a professora pede para você explorar como a IA pode ajudar na educação personalizada. O que você acha que é mais relevante para discutir sobre isso?",
        alternativas: [
            {
                texto: "Defende que a IA pode ajudar os professores a criar conteúdos mais específicos para o aprendizado de cada aluno, tornando a educação mais individualizada.",
                afirmacao: "Acredita que a IA pode melhorar a personalização da educação."
            },
            {
                texto: "Acredita que a IA não pode substituir a interação humana no ensino e que o papel do professor continua essencial para a aprendizagem.",
                afirmacao: "Defende que a presença humana no ensino é insubstituível."
            }
        ]
    },
    {
        enunciado: "Em uma aula sobre IA e seu impacto no mercado de trabalho, você é desafiado a criar uma apresentação digital explicando os efeitos da automação nas profissões tradicionais. Como você cria sua apresentação?",
        alternativas: [
            {
                texto: "Utiliza ferramentas como PowerPoint e Google Slides para criar uma apresentação visualmente impactante, destacando os principais pontos sobre automação.",
                afirmacao: "Criou uma apresentação focada na clareza visual e nos principais tópicos sobre automação."
            },
            {
                texto: "Opta por usar uma IA de geração de slides, que cria automaticamente os tópicos, e depois personaliza a apresentação com suas próprias ideias.",
                afirmacao: "Usou a IA para agilizar a criação da apresentação e personalizou com ideias próprias."
            }
        ]
    },
    {
        enunciado: "Você é designado a ilustrar como imagina o futuro com IA. Como você representa essa visão em uma imagem digital?",
        alternativas: [
            {
                texto: "Desenha uma imagem futurista à mão e usa ferramentas de edição digital para aprimorar a arte.",
                afirmacao: "Optou por um processo manual de criação, utilizando ferramentas digitais para aprimorar a imagem."
            },
            {
                texto: "Usa uma ferramenta de IA para criar uma imagem futurista automaticamente, ajustando a imagem conforme a sua visão do futuro.",
                afirmacao: "Criou uma imagem futurista rapidamente com o auxílio da IA."
            }
        ]
    },
    {
        enunciado: "Você está fazendo parte de um projeto de ciências onde o grupo precisa apresentar uma pesquisa sobre a IA em diferentes indústrias. Um dos membros do grupo decidiu utilizar uma IA para gerar todo o conteúdo. O que você acha disso?",
        alternativas: [
            {
                texto: "Acredita que utilizar a IA para gerar o conteúdo do trabalho é uma boa estratégia para ganhar tempo, e que revisar o trabalho depois é o suficiente.",
                afirmacao: "Achou que o uso da IA para gerar conteúdo foi uma forma eficiente de otimizar o tempo."
            },
            {
                texto: "Percebe que é importante que todos os membros do grupo contribuam pessoalmente para a pesquisa, utilizando a IA como uma ferramenta de apoio, e não como a fonte principal.",
                afirmacao: "Considera fundamental que todos participem ativamente da pesquisa e usem a IA como suporte."
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
