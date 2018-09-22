const inputs = document.querySelectorAll('.controls input');

function handleInputs() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, (this.value + suffix))
}

inputs.forEach(item => item.addEventListener('change', handleInputs));
inputs.forEach(item => item.addEventListener('mousemove', handleInputs));