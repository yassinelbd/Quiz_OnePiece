function calculer() {
    let nom = document.getElementById("nom").value.trim();
    if (nom === "") {
        alert("Entre ton nom d'abord !");
        return;
    }

    let score = 0;
    let totalQuestions = 6; // tu mettras 6 quand tu auras fini

    // Exemple pour Q1
    let q1 = document.querySelector('input[name="q1"]:checked');
    if (q1) {
        if (q1.value === "a") score += 2;
        else score -= 1;
    }
    
    let q2 = document.querySelector('input[name="q2"]:checked');
    if (q2) {
        if (q2.value === "c") score += 2;
        else score -= 1;
    }

    let q3 = document.querySelector('input[name="q3"]:checked');
    if (q3) {
        if (q3.value === "a") score += 2;
        else score -= 1;
    }

   let q4 = document.querySelectorAll('input[name="q4"]:checked');
   
    let scoreQ4 = 0;

q4.forEach(el => {
    if (el.value === "a" || el.value === "c") {
        scoreQ4 += 1;   // bonnes réponses
    } else {
        scoreQ4 -= 1;   // mauvaises réponses
    }
});

score += scoreQ4;


let q5 = document.querySelector('input[name="q5"]:checked');
    if (q5) {
        if (q5.value === "nule") score += 0;
        else score -= 1;
    }


    let q6 = document.querySelector('input[name="q6"]:checked');
    if (q6) {
        if (q6.value === "b") score += 2;
        else score -= 1;
    }


    // À la fin
    let msg = "";
    if (score >= 10) msg = "Légende de la Grand Line !";
    else if (score >= 7) msg = "Très fort !";
    else if (score >= 4) msg = "Pas mal du tout";
    else msg = "Va relire One Piece frère";

    alert(nom + ", ton score : " + score + "/12\n" + msg);
}