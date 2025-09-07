document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('input[type="text"], input[type="password"]').forEach(input => {
        input.addEventListener('input', function() {
            if (this.value) {
                this.style.color = 'white';
            } else {
                this.style.color = 'gray';
            }
            this.style.backgroundColor = 'rgba(0, 0, 0, .55)';
        });

        input.addEventListener('blur', function() {
            if (this.value) {
                this.style.color = 'white';
            } else {
                this.style.color = 'gray';
            }
            this.style.backgroundColor = 'rgba(0, 0, 0, .55)';
        });
    });

    document.querySelector('button').addEventListener('click', function() {
        this.style.backgroundColor = 'green';
        this.style.color = 'white';
    });
});
