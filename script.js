function moveFocus(index) {
    const input = document.getElementById(`code-${index}`);
    const value = input.value;

    if (!/^\d$/.test(value)) {
        input.value = '';
        return;
    }

    if (index < 6) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput.focus();
    }
}

function moveFocusBack(event, index) {
    const input = document.getElementById(`code-${index}`);

    if (event.key === "Backspace") {
        if (input.value === '') {
            if (index > 1) {
                const prevInput = document.getElementById(`code-${index - 1}`);
                prevInput.focus();
                prevInput.value = '';
            }
        } else {
            input.value = '';
        }

        event.preventDefault();
    }
}
