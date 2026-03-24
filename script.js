const casas = [45, 60, 80, 70, 90, 100, 75, 110, 85, 120, 130, 0];

let estado = {
  nome: "",
  cosmo: 0,
  casa: 0
};

function log(msg) {
  document.getElementById("log").innerHTML += `<p>${msg}</p>`;
}

function iniciar() {
  const nome = document.getElementById("nome").value;
  const cosmo = +document.getElementById("cosmo").value;

  if (!nome || cosmo <= 0) {
    alert("Preencha corretamente!");
    return;
  }

  estado.nome = nome;
  estado.cosmo = cosmo;
  estado.casa = 0;

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("status").classList.remove("hidden");
  document.getElementById("acoes").classList.remove("hidden");

  atualizar();
  log("⚔ Jornada iniciada!");
}

function atualizar() {
  document.getElementById("nomePlayer").textContent = estado.nome;
  document.getElementById("cosmoPlayer").textContent = estado.cosmo;
  document.getElementById("casaAtual").textContent = estado.casa + 1;
}

function lutar() {
  let dano = casas[estado.casa];
  estado.cosmo -= dano;

  log(`💥 Você levou ${dano} de dano`);

  if (estado.cosmo <= 0) {
    log("☠ Você morreu!");
    return;
  }

  estado.casa++;
  atualizar();
}

function pular() {
  let dano = Math.floor(casas[estado.casa] * 0.3);
  estado.cosmo -= dano;

  log(`→ Pulou casa (-${dano})`);

  if (estado.cosmo <= 0) {
    log("☠ Você morreu!");
    return;
  }

  estado.casa++;
  atualizar();
}

function sacrificar() {
  estado.cosmo *= 2;
  log("⚡ Cosmo dobrado!");
  atualizar();
}