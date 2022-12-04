        const form = document.querySelector('[name="verify_form"]');
        const inputs = form.querySelectorAll('.number-code input');

        form.addEventListener('input', NextInput);
        form.addEventListener('keydown', DeleteInput);
        inputs[0].addEventListener('paste', PasteInput);

        function NextInput(e){

            const input = e.target;

            if(input.nextElementSibling && input.value){
            input.nextElementSibling.focus();
            }
        }

        function DeleteInput(e){
            const input = e.target;
            if(input.previousElementSibling && e.keyCode === 8){
                input.value='';
                input.previousElementSibling.focus();

            }

        }
        function PasteInput(e){
            const paste = e.clipboardData.getData('text');
            inputs.forEach((input,i)=>{
                console.log(input);
                input.value=paste[i];
            });
        }
