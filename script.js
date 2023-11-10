function media() {
  let nom = window.prompt("Qual é o nome do aluno?");
  let n1 = Number(window.prompt(`Digite sua primeira nota   ${nom}?`));
  let n2 = Number(
    window.prompt(`Além de ${n1}, qual foi sua outra nota, por favor,${nom}?`)
  );
  med = (n1 + n2) / 2;
  let res = document.getElementById("situacao");
  res.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark>.</p>`;
  res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`;
  res.innerHTML += `<p>Sua média final será <mark>${med}</mark>.</p>`;
}
