if (document.querySelector('._counter')) {
    const counterInput = document.querySelectorAll('._counter input');

    counterInput.forEach(input => {
        input.addEventListener('focus', (e) => {
            input.value = '';
        })
    })

}