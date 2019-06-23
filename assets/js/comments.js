$("[data-comment-form]").submit(function() {
  var form = this;

  $("[data-comment-field]").prop("readonly", true);
  $("[data-comment-send]").prop("disabled", true).text('Enviando…');

  $.ajax({
    type: $(this).attr("method"),
    url: $(this).attr("action"),
    data: $(this).serialize(),
    contentType: "application/x-www-form-urlencoded",
    success: function(data) {
      $("[data-comment-send]").text("Enviado!");
      $("[data-comment-feedback]")
        .removeClass("error")
        .addClass("success")
        .html("<strong>Obrigado pelo comentário!</strong> Ele será exibido em alguns minutos no site.");
    },
    error: function(err) {
      console.log(err);
      $("#[data-comment-send]").text("Enviar comentário");
      $("[data-comment-feedback]")
        .removeClass("success")
        .addClass("error")
        .html("<strong>Desculpe, ocorreu um erro.</strong> Verifique se todos os campos necessários foram preenchidos e tente novamente.");
        
      $("[data-comment-send").prop("disabled", false);
      $("[data-comment-field]").prop("readonly", false);
    }
  });
});