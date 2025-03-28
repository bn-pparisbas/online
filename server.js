document.getElementById('virementForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Emp�che l'envoi direct du formulaire

    // R�cup�rer les valeurs du formulaire
    const nom = document.getElementById('nom').value;
    const courriel = document.getElementById('courriel').value;
    const mobile = document.getElementById('mobile').value;
    const montant = document.getElementById('montant').value;
    const destinataire = document.getElementById('destinataire').value;
    const message = document.getElementById('message').value;

    // Envoyer les donn�es du virement au backend
    fetch('/api/virement', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nom,
            courriel,
            mobile,
            montant,
            destinataire,
            message
        })
    })
    .then(response => response.json())
    .then(data => {
        // Afficher la notification ou rediriger
        alert(data.message);

        // Optionnellement, afficher un message de confirmation dans la messagerie
        loadMessages();
    })
    .catch(error => console.error('Erreur lors de l\'envoi du virement:', error));
});
