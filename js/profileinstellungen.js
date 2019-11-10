function profileinstellungen() {
    document.querySelector('.pE-Modal').style.display = 'flex';
}

function closeModalPE() {
    document.querySelector('.pE-Modal').style.display = 'none';
}



/* function bildPruefen() {
    var erlaubteEndungen = ['jpeg', 'jpg', 'npg'];
    var dateiEndung = document.getElementById('newProfilePicture').value.split('.').pop().toLowerCase();
    var istInOrdnung = false;
        for(var index in dateiEndung) {
            if(dateiEndung === erlaubteEndungen[index]) {
                istInOrdnung = true;
                break;
            }
        }
        if(!istInOrdnung) {
            alert('Erlaubte Dateiendungen sind: *.' + erlaubteEndungen.join(', *.'));
        }
        return istInOrdnung;

    } */