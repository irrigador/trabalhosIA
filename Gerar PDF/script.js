document.getElementById("btnGerar").addEventListener("click", function() {
  var cpf = document.getElementById("cpf").value;
  var doc = new jsPDF();
  doc.text("Certidão Negativa\n\n", 10, 10);
  doc.text("CPF: " + cpf, 10, 20);
  doc.save("certidao_negativa.pdf");
});
