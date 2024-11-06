//your JS code here. If required.
function moveFocus(currentInput) {
    let nextInput = document.getElementById(`otp-${currentInput + 1}`);
    if (nextInput) {
        nextInput.focus();
    }
}

// Move focus to the previous input when backspace is pressed
function moveFocusBack(event, currentInput) {
    if (event.key === 'Backspace') {
        let prevInput = document.getElementById(`otp-${currentInput - 1}`);
        if (prevInput) {
            prevInput.focus();
        }
    }
}