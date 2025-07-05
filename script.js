// On page load, focus the first input
window.onload = () => {
  const firstInput = document.getElementById('code-1');
  if (firstInput) firstInput.focus();
};

function moveFocus(index) {
    const currentInput = document.getElementById(`code-${index}`);
    let value = currentInput.value;

    // Keep only the first digit typed/pasted
    if (value.length > 1) {
        value = value.slice(0, 1);
        currentInput.value = value;
    }

    // Validate digit
    if (!/^\d$/.test(value)) {
        currentInput.value = '';
        return;
    }

    // Move focus immediately to next input
    if (index < 6) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput.focus();
    }
}

function moveFocusBack(event, index) {
    const currentInput = document.getElementById(`code-${index}`);

    if (event.key === "Backspace") {
        if (currentInput.value === '') {
            if (index > 1) {
                const prevInput = document.getElementById(`code-${index - 1}`);
                prevInput.focus();
                prevInput.value = '';
            }
        } else {
            currentInput.value = '';
        }
        event.preventDefault();
    }
}
