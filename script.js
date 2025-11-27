function submitForm(button){
  button.value = "⏳ Processing...";
  button.style.pointerEvents = "none";

  setTimeout(()=>{
    button.value = "✔ Success!";
    button.style.background = "#00ff15";
    button.style.filter = "drop-shadow(0 0 20px #00ff15)";
  },1500);
}