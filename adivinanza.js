document.getElementById('enviarBtn').addEventListener('click', function() {
    console.log(/Gimnasio/i.test('Gimnasio'));
    if (document.getElementById('respuesta').value)   {
        console.log('respuesta valida');
    } else {
        console.log('respuesta invalida');
    }
});