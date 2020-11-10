function copyEmail() {
   const copyText = document.getElementById("email");
   copyText.select();
   copyText.setSelectionRange(0, 99999)
   document.execCommand("copy")

   const clipboardBtn = document.getElementById('clipboard')
   clipboardBtn.classList.remove('fa-clipboard')
   clipboardBtn.classList.add('fa-check-square')
}