function copyEmail() {
   var copyText = document.getElementById("email");
   copyText.select();
   copyText.setSelectionRange(0, 99999)
   document.execCommand("copy")
}