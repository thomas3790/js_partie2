function setNewImage() {
    document.getElementById('img1').src ="assets/img/gmail.png"; // A ce stade, en passant ma souris sur l'image Github, l'image Gmail apparait mais ne revient pas sur Github lorque mon curseur quitte l'image. On règle ça ci-dessous
}
function setOldImage() {
    document.getElementById('img1').src ="assets/img/github.png";
}

// Pour le chemin d'accès, recopier celui écrit dans le HTML. Ne pas imaginer le chemin d'accès type : ../img/'...'png