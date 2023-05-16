
function toggleBackground() {
    if (document.body.style.backgroundColor === "black") {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "black";
    }
  }
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "toggleBackground") {
      toggleBackground();
    }
  });



  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

      //esta es la parte donde yo tendria que popular el form (el form de la pagina en la cual queremos autocompletar) 
      // obviamente si se el ID del input simplemente lo agarro por ref y listo, pero sino lo que puedo hacer
      //es  agarrar el form por getelementsbytagname("form"), dsp acceder a los elements haciendo 
      //let elements = form[0].elements y despues hacer un foreach a todos los elmeentos y dsp si 
      // if (elements[i].id.includes("name")  || elements[i].id.includes("nombre")){ element.value= request.name}
      //ESTO tener en cuenta que por ahi tengo que hacer un for (i=0; i < length; i++) porque es una html collection, y si bien se puede hacer foreach a veces no anda.

      //prestar atencion que puedee que tenga que agregar un Request.message como est'a arriba, porque el listener es el mismo para el toogle y para el atuofill, por ahi tendria que diferenciarlos
      //si quiero quedarme las dos funciones, testear que pasa si todo el toogle con el form leno
      
      //de momeno hago un testeo en el HTML test
      document.getElementById("name").value = request.name
      document.getElementById("apellido").value = request.apellido
      document.getElementById("country").value = request.country
      document.getElementById("email").value = request.email
      document.getElementById("birthdate").value = request.birthdate
      sendResponse({status: "Succes!"});
    
  });
