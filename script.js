/* Modal é uma tela a qual possui um botão, que ao ser selecionado, ele abre uma tela, que no caso trata-se de uma div, sobrepondo os demais elementos.

 Usaremos somente os id's para controlar o modal.

 (mn) significa modal name.

*/

// Função para abertura do modal
function openModal(mn) {

    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

        modal.style.display = 'Block';

        //ocultando barra de rolagem
        document.body.style.overflow = 'hidden';
}

// Função para fechamento do modal
function closeModal(mn) {

    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;
    
        modal.style.display = 'none';

        //mostrando barra de rolagem
        document.body.style.overflow = 'auto';
}