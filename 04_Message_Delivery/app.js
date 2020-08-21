const FORM = document.querySelector('#message-form');

FORM.addEventListener('submit', event => {
    event.preventDefault();
    const MESSAGE = document.querySelector('#message');
    const FEEDBACK = document.querySelector('.feedback');
    const MESSAGE_CONTENT = document.querySelector('.message-content');

    if (MESSAGE.value === '')
    {
        FEEDBACK.classList.add('show')
        
        setTimeout(function()
        {
            FEEDBACK.classList.remove('show')
        }, 5000)
    } 
    else 
    {
        //Change message content and clear the message input
        MESSAGE_CONTENT.textContent = MESSAGE.value
        MESSAGE.value = ''
    }
})