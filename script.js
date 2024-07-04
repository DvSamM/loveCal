
function calculate(){
    let yourName =     document.getElementById('firstName').value
    let yourBabeName = document.getElementById('secondName').value
    let loveScore = Math.random() * 100;
    let finalScore = Math.round(loveScore);

    if (yourName == '' || yourBabeName == '') {
        alert('Fill in the Empty Gap')
    } else {
        //  document.getElementById('firstName').value = ''
        //  document.getElementById('secondName').value = ''
    document.getElementById('lovefinal').innerHTML += `
        
       <p style="color: red; font-size: 19px; ">  ${yourName} and ${yourBabeName}  loveScore is ${finalScore}% </p>
    `
    }

}
function reset() {
    location.reload();
   }