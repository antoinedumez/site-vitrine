console.log('service.js chargé !');
function showPhoneNumber() {
    // Sélectionnez la div par son ID
    var phoneNumberDiv = document.getElementById('phone_number');

    // Modifiez le contenu de la div
    phoneNumberDiv.innerHTML = '<a href="tel:+33627676385" class="text-white">06 27 67 63 85</a>';

    // Supprimez l'attribut onclick
    phoneNumberDiv.removeAttribute('onclick');
}

function forceRefresh(element) {
    console.log('coucou');
        // window.location.reload();
    window.location.href = "../../accueil.html/#quotation"
    // element.preventDefault();
    // const targetUrl = element.target.getAttribute('href');
    // if (window.location.href.split('#')[0] === targetUrl.split('#')[0]) {
    // } else {
    //     window.location.href = targetUrl;
    // }
}
