// variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const fortuneCookie = document.querySelector("#fortuneCookie");
const brokenCookie = document.querySelector("#brokenCookie");
const openAnotherCookie = document.querySelector("#openAnotherCookie");
let phrases = [];
phrases.push("Comece onde você está, use o que você tem e faça o que você pode.");
phrases.push("Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.");
phrases.push("Ação sempre gera inspiração. Inspiração raramente gera ação.");
phrases.push("Não importa que você vá devagar, contanto que você não pare.");
phrases.push("A inspiração existe, porém temos que encontrá-la trabalhando.");
phrases.push("Coragem é saber o que não temer.");
phrases.push("Conhecer a si mesmo é o começo de toda sabedoria.");
phrases.push("Descubra quem é você, e seja essa pessoa. A sua alma foi colocada nesse mundo para ser isso, então viva essa verdade e todo resto virá.");
phrases.push("Acredite em milagres, mas não dependa deles.");
phrases.push("Não é a carga que o derruba, mas a maneira como você a carrega.");
phrases.push("A vida é 10% o que acontece a você e 90% como você reage a isso.");

// eventos
fortuneCookie.addEventListener("click", openCookie);
openAnotherCookie.addEventListener("click", anotherCookie);

// funções
function toggleScreen () {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function phrasesSort() {
  screen2.querySelector("p")
    .innerText = phrases[Math.floor(Math.random() * phrases.length)]; 
}

function openCookie() {
  toggleScreen();

  phrasesSort()
}

function anotherCookie() {
  toggleScreen();

  phrasesSort()
}