window.onload = function() {
            document.getElementById('bs').addEventListener('submit', function(event) {
                event.preventDefault();
                const form = document.getElementById('bs');
                emailjs.sendForm('bs_id', 'bs', this)
                    .then(function() {
                        console.log('SUCCESS!');
                        form.reset();
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            });
        }