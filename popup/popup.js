
document.addEventListener("DOMContentLoaded", function() {
    var toggleButton = document.getElementById("toggleButton");
  
    toggleButton.addEventListener("click", function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { message: "toggleBackground" });
      });
    });

//SENDS the info to the content js.
//funcion funcionando y testeada con el html del test.
  document.getElementById("autofill").addEventListener("click", () => {
      chrome.tabs.query({ active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {
          name: document.getElementById('name').value,
          apellido: document.getElementById('apellido').value,
          country: document.getElementById('country').value,
          email: document.getElementById('email').value,
          birthdate: document.getElementById('birthdate').value,

        })

      })
  })


//Saves info into cookielike variable
//dont know if funciona, testear.
document.getElementById("save").addEventListener("click", () => {
  chrome.storage.sync.set({
      name: document.getElementById('name').value,
      apellido: document.getElementById('apellido').value,
      country: document.getElementById('country').value,
      email: document.getElementById('email').value,
      birthdate: document.getElementById('birthdate').value,

    })
})

//Load from the info saved using SEt.
//dont know if funciona, testear.
//si anda elset dsp aca al get le tengo qeu agregar la parte donde poupla el html
document.getElementById("load").addEventListener("click", () => {
  chrome.storage.sync.get([
          'name',
          'apellido',
          'country',
          'email',
          'birthdate'
  ], function (result) {
    document.getElementById('name').value = result.name
    document.getElementById('apellido').value = result.apelido
    document.getElementById('country').value = result.country
    document.getElementById('email').value = result.email
    document.getElementById('birthdate').value = result.birthdate

  })
})


  });


