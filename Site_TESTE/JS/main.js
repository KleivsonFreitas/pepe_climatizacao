$(document).ready(function () {
  // --- Menu submenu: slide no hover (desktop) e toggle no click (mobile) ---
  $('.submenu').hover(
    function () {
      if ($(window).width() >= 768) {
        $(this).find('ul').stop(true, true).slideDown(200);
      }
    },
    function () {
      if ($(window).width() >= 768) {
        $(this).find('ul').stop(true, true).slideUp(200);
      }
    }
  );

  $('.submenu > a').on('click', function (e) {
    if ($(window).width() < 768) {
      e.preventDefault();
      const submenu = $(this).siblings('ul');
      $('.submenu ul').not(submenu).slideUp(200);
      submenu.slideToggle(200);
    }
  });

  // Fechar submenu se clicar fora (mobile)
  $(document).on('click touchstart', function (e) {
    if ($(window).width() < 768) {
      if (!$(e.target).closest('.submenu').length) {
        $('.submenu ul').slideUp(200);
      }
    }
  });

  // Resetar submenu ao redimensionar para desktop
  $(window).on('resize', function () {
    if ($(window).width() >= 768) {
      $('.submenu ul').removeAttr('style');
    }
  });

  // --- Scroll suave para links internos ---
  $('a[href^="#"]').on('click', function (e) {
    const target = this.hash;
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $(target).offset().top - $('header').outerHeight()
      }, 600);
    }
  });

  // --- Cabeçalho fixo ao rolar com debounce ---
  const header = $('header');
  const headerOffset = header.offset().top;
  let scrollTimeout;

  $(window).on('scroll', function () {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if ($(window).scrollTop() > headerOffset) {
        header.addClass('fixed-header');
      } else {
        header.removeClass('fixed-header');
      }
    }, 50);
  });

  // --- Validação do formulário com feedback inline ---
  const form = document.getElementById('form-contato');
  const inputs = form.querySelectorAll('input, textarea');

  // Cria elementos de erro se não existirem
  inputs.forEach(input => {
    if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-msg')) {
      const span = document.createElement('span');
      span.classList.add('error-msg');
      span.style.color = 'red';
      span.style.fontSize = '0.9rem';
      span.style.display = 'none';
      input.after(span);
    }
  });

  form.addEventListener('submit', function (e) {
    let isValid = true;
    let firstErrorField = null;

    // Limpa mensagens anteriores
    inputs.forEach(input => {
      input.nextElementSibling.style.display = 'none';
      input.style.borderColor = '#ccc';
    });

    // Validação nome
    const nome = form.nome.value.trim();
    if (nome === '') {
      showError(form.nome, 'Por favor, insira seu nome.');
      isValid = false;
      if (!firstErrorField) firstErrorField = form.nome;
    }

    // Validação email com regex básica
    const email = form.email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      showError(form.email, 'Por favor, insira seu email.');
      isValid = false;
      if (!firstErrorField) firstErrorField = form.email;
    } else if (!emailRegex.test(email)) {
      showError(form.email, 'Por favor, insira um email válido.');
      isValid = false;
      if (!firstErrorField) firstErrorField = form.email;
    }

    // Validação mensagem
    const mensagem = form.mensagem.value.trim();
    if (mensagem === '') {
      showError(form.mensagem, 'Por favor, escreva uma mensagem.');
      isValid = false;
      if (!firstErrorField) firstErrorField = form.mensagem;
    }

    if (!isValid) {
      e.preventDefault();
      firstErrorField.focus();
    }
  });

  function showError(element, message) {
    const errorSpan = element.nextElementSibling;
    errorSpan.textContent = message;
    errorSpan.style.display = 'block';
    element.style.borderColor = 'red';
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true";
      const content = document.getElementById(this.getAttribute("aria-controls"));

      this.setAttribute("aria-expanded", !expanded);
      content.hidden = expanded;
      content.style.display = expanded ? "none" : "block";

      // Animação suave
      if (!expanded) {
        content.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });
});
