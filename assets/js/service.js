console.log('service.js chargé !');
function showPhoneNumber() {
    // Sélectionnez la div par son ID
    var phoneNumberDiv = document.getElementById('phone_number');

    // Modifiez le contenu de la div
    phoneNumberDiv.innerHTML = '<a href="tel:+33627676385" class="text-white">06 27 67 63 85</a>';

    // Supprimez l'attribut onclick
    phoneNumberDiv.removeAttribute('onclick');
}
