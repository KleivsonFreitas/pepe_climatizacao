document.getElementById('form-contato').addEventListener('submit', function(event) {
  event.preventDefault(); // evitar reload

  const form = this;
  const data = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      form.reset();
    } else {
      alert('Oops! Ocorreu um erro ao enviar sua mensagem.');
    }
  }).catch(() => {
    alert('Oops! Ocorreu um erro ao enviar sua mensagem.');
  });
});
