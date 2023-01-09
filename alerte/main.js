// function selectText() {
//     let contenu = document.getElementById('text');
//     contenu.focus();
//     contenu.select();
// }
// function check() {
//     let contenu = document.getElementById('text').value;
//     if (contenu) {
//         selectText();
//     }
//     else {
//         alert("Veuillez nous ecrire votre message.");
//     }
// }

let btn = document.querySelector(".someclass");
let contenu = document.getElementById('text');
btn.addEventListener('click', (e) => {
    if (!contenu.value) {
        alert("champ vide");
    }
    else {
        alert(contenu.value);
    }
});
