function xuLy() {
    let w = parseFloat(document.getElementById("weight").value);
    let h = parseFloat(document.getElementById("height").value);
    let bmi = w / (h * h);
    if (bmi < 18) {
        document.getElementById("showMess").innerHTML = "Gầy";
    } else if (bmi < 25.0) {
        document.getElementById("showMess").innerHTML ="Bình thường";
    } else if (bmi < 30.0) {
        document.getElementById("showMess").innerHTML ="Béo";
    } else {
        document.getElementById("showMess").innerHTML ="Béo phì";
    }
}