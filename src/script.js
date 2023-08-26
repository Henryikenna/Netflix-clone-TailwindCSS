const toggleButtons = document.querySelectorAll('.toggle-button');
        const dropdowns = document.querySelectorAll('.dropdown');

        toggleButtons.forEach((toggleButton, index) => {
            toggleButton.addEventListener('click', () => {
                dropdowns[index].classList.toggle('show-details');
                if (dropdowns[index].classList.contains('show-details')) {
                    toggleButton.innerHTML = '<span class="icon">&#x0078;</span><span class="text">Hide Details</span>';
                } else {
                    toggleButton.innerHTML = '<span class="icon">&#x002B;</span><span class="text">Show Details</span>';
                }
            });
        });