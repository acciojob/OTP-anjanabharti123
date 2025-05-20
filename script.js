const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        const value = e.target.value;
        if (!/^\d$/.test(value)) {
            e.target.value = ""; // allow only digits
            return;
        }

        if (value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (e.target.value === "") {
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            } else {
                e.target.value = "";
            }
        }
    });
});
