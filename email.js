// Email JS Contact Form
(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "SRfBUFTvlGSuTD8YL",
  });
})();

window.onload = function() {
  var form = document.getElementById('contact-form')
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm('service_xdforqo', 'template_es426uy', this)
          .then(() => {
              console.log('SUCCESS!');
              form.reset();
              alert("Success! Thanks for your message!");
          }, (error) => {
              console.log('FAILED...', error);
              form.reset();
              alert("Failed. Unable to send message.");
          });
  });
}