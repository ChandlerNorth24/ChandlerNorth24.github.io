window.onload = function currentDate() {
    var d = new Date ();
    let curYear = d.getFullYear();
    document.getElementById('currentDate').textContent = curYear;
}
window.onload = function lastUpdate () {
    var lastUpdate = document.lastModified;
    document.getElementById('lastModified').textContent = lastUpdate;
}