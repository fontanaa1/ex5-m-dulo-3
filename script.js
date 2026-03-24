function iniciarJornada() {
  // Entrada
  let nome = prompt("Digite seu nome:");
  let cosmo = +prompt("Digite seu cosmo inicial:");

  // Decisão
  let sacrificio = confirm("Deseja sacrificar sentido para dobrar o cosmo?");
  if (sacrificio) {
    cosmo *= 2;
  }

  // Batalha (12 casas → vamos simular com danos)
  for (let i = 1; i <= 12; i++) {
    let dano = 100;
    cosmo -= dano;

    if (cosmo <= 0) {
      alert("Você foi derrotado na casa " + i);
      return;
    }
  }

  // Validação
  let statusVida = cosmo > 0 ? "Vivo" : "Morto";

  if (cosmo >= 1000 && statusVida === "Vivo") {
    alert("Parabéns, " + nome + "! Você salvou Athena com " + cosmo + " de cosmo restante!");
  } else {
    alert(nome + ", você não conseguiu salvar Athena. Cosmo final: " + cosmo);
  }
}