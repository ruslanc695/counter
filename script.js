let decreaseBtn = document.getElementById('button__decrease');
        let increaseBtn = document.getElementById('button__increase');
        let counter = document.getElementById('counter');
        let count = 0;


        decreaseBtn.addEventListener('click', dec);
        function dec(){
            count --;
            counter.innerHTML = count;
            counterStyle();
        }

        increaseBtn.addEventListener('click', inc);
        function inc(){
            count ++;
            counter.innerHTML = count;
            counterStyle();
        }



        
        //********** Javascript style **********

        function counterStyle(){
            if(count < 0){
                counter.classList.add('negative');
            }else if(count > 0){
                counter.classList.add('positive');
            }else{
                counter.classList.remove('negative');
                counter.classList.remove('positive');
            }
        }