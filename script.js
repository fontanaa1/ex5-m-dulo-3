const CASAS = [45, 60, 80, 70, 90, 100, 75, 110, 85, 120, 130, 0];

let estado = {
  nome: "",
  cosmoInicial: 0,
  cosmoAtual: 0,
  casaAtual: 0,
  statusVida: "Vivo"
};

function log(msg) {
  document.getElementById("battle-log").innerHTML += `<p>${msg}</p>`;
}

function atualizar() {
  document.getElementById("stat-nome").textContent = estado.nome;
  document.getElementById("stat-cosmo").textContent = estado.cosmoAtual;
  document.getElementById("stat-casas").textContent = estado.casaAtual + " / 12";
}

function iniciarBatalha() {
  const nome = document.getElementById("nome-input").value;
  const cosmo = Number(document.getElementById("cosmo-input").value);

  if (!nome || cosmo <= 0) {
    alert("Preencha corretamente!");
    return;
  }

  if (cosmo < 1000) {
    if (confirm("Deseja dobrar seu cosmo inicial?")) {
      estado.cosmoAtual = cosmo * 2;
    } else {
      estado.cosmoAtual = cosmo;
    }
  } else {
    estado.cosmoAtual = cosmo;
  }

  estado.nome = nome;
  estado.cosmoInicial = estado.cosmoAtual;
  estado.casaAtual = 0;

  document.getElementById("setup-panel").style.display = "none";
  document.getElementById("stats-panel").style.display = "block";
  document.getElementById("battle-arena").style.display = "block";

  atualizar();
  log("🔥 Jornada iniciada!");
}

function lutarCasa() {
  let dano = CASAS[estado.casaAtual];
  estado.cosmoAtual -= dano;

  log(`⚔️ Levou ${dano} de dano`);

  if (estado.cosmoAtual <= 0) {
    perder();
    return;
  }

  estado.casaAtual++;

  if (estado.casaAtual >= 12) {
    vencer();
    return;
  }

  atualizar();
}

function pularCasa() {
  let dano = Math.floor(CASAS[estado.casaAtual] * 0.3);
  estado.cosmoAtual -= dano;

  log(`🏃 Pulou casa (-${dano})`);

  if (estado.cosmoAtual <= 0) {
    perder();
    return;
  }

  estado.casaAtual++;
  atualizar();
}

function perguntarSacrificio() {
  if (confirm("Tem certeza que deseja dobrar seu cosmo?")) {
    estado.cosmoAtual *= 2;
    atualizar();
    log("💥 Cosmo dobrado!");
  }
}

function vencer() {
  document.getElementById("result-banner").style.display = "block";

  document.getElementById("result-title").textContent =
    `🏆 Parabéns ${estado.nome}!`;

  document.getElementById("result-msg").textContent =
    `Você salvou Athena com ${estado.cosmoAtual} de cosmo!`;
}

function perder() {
  document.getElementById("result-banner").style.display = "block";

  document.getElementById("result-title").textContent =
    "💀 Você morreu";

  document.getElementById("result-msg").textContent =
    "Seu cosmo acabou...";
}

/* GARANTE QUE OS BOTÕES FUNCIONEM */
window.iniciarBatalha = iniciarBatalha;
window.lutarCasa = lutarCasa;
window.pularCasa = pularCasa;
window.perguntarSacrificio = perguntarSacrificio;
