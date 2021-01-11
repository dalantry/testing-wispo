const lightningExplanation = document.querySelector('.explanation-lightning');
const lightningExplanationButton = document.querySelector('.button__lightning');
 
lightningExplanationButton.addEventListener('click', function(){
    lightningExplanation.classList.toggle('explanation-lightning_visible');
});
