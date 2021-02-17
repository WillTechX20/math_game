var form=document.querySelector('form');

form.addEventListener('submit', eventVar=>{
    eventVar.preventDefault();

    var formData=new FormData(form);

    localStorage.setItem('player1NameStr', formData.get('player_1_name'));
    localStorage.setItem('player2NameStr', formData.get('player_2_name'));
    location='math_game.html';
})