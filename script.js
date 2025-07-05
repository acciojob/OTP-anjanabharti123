function moveFocus(index) {
    const input = document.getElementById(`otp-${index}`);
    const value = input.value;

    if (!/^\d$/.test(value)) {
        input.value = ''; // Only allow digits
        return;
    }

    if (index < 6) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput.focus();
    }
}

function moveFocusBack(event, index) {
    const input = document.getElementById(`otp-${index}`);

    if (event.key === "Backspace") {
        if (input.value === '') {
            if (index > 1) {
                const prevInput = document.getElementById(`otp-${index - 1}`);
                prevInput.focus();
                prevInput.value = ''; // Also delete the value in the previous field
            }
        } else {
            input.value = '';
        }

        // Prevent default backspace behavior (like navigating away)
        event.preventDefault();
    }
}
