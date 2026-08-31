document.getElementById("btn-localstorage").addEventListener("click",function(event) {
    localStorage.clear();
    console.log("Limpiar local storage");
    alert("Limpiar local storage");
});