const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const steps = document.querySelectorAll('.progress-step');

let currentStep = 1;

next.addEventListener('click', () => {
    currentStep++;
    if (currentStep > steps.length) {
        currentStep = steps.length;
    }
    updateProgress();
});

prev.addEventListener('click', () => {
    currentStep--;
    if (currentStep < 1) {
        currentStep = 1;
    }
    updateProgress();
});

function updateProgress() {
    steps.forEach((step, idx) => {
        if (idx < currentStep) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (idx === currentStep - 1) {
            step.classList.add('active');
        } else {
            step.classList.remove('completed');
            step.classList.remove('active');
        }
    });

    const progressWidth = ((currentStep - 1) / (steps.length - 1)) * 100;
    progress.style.width = `${progressWidth}%`;

    prev.disabled = currentStep === 1;
    next.disabled = currentStep === steps.length;
}