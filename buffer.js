const specs = {
    "shelln": "Make sure to write the #n shell utility in a standalone function with signature shell_341_05(int n, ...). You can use variadic arguments inorder to customize this function how you need but make sure n is the first argument and the function shell_341_05 is present for the autograder.",
    "shellor": "For readability we recommend implementing the or function separately in a function named shell_or_341_01(). This will help staff review your code.",
};

document.addEventListener("DOMContentLoaded", () => {
    // Find all spans with the 'dynamic-spec' class
    document.querySelectorAll('.spec').forEach(el => {
        const specId = el.getAttribute('data-spec-id');
        if (specs[specId]) {
            el.innerHTML = specs[specId];
        }
    });
});
