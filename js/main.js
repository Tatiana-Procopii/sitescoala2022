new SimpleLightbox({ elements: '.container-galerie a' })
new SimpleLightbox({ elements: '.orar-imagini a' })

// initializarea librariei aos
AOS.init({
    duration: 900,
    offset: 100,
    once: true
});

// codul de legatura cu email pt a lasa mesaje
emailjs.init("user_vFbROt1l9IOkMhIJlnDG7");

/**functia de mobile */
function mobile() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className = "nav mobile";
    } else {
        x.className = "nav";
    }
}


/* transmitere de formular*/


function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_ukowag6", "template_a3c043a", date)
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function (error) {
            alert("Eroare la transmitere. Contactati programatorul.")
        })
}
/*////////////////////////////////////////////////////////////////////////////// */


