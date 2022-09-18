const msg = document.querySelector('#msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let start;
let end;
let totaltime;
let newWords=" ";
let randWords = " ";
let words = ['html','php','java','hello','typescript','javascript','web3','python','nodejs','react','mongodb'];

const createWord=()=>{
        let randum = Math.floor(Math.random()*words.length);
        // console.log(randum);
        let newTempword = words[randum];
        // console.log(newTempword);
        return newTempword; 
}
const scramble=(arr)=>{
        for(let i=arr.length-1;i>0;i--){
            let temp = arr[i];
            // console.log(temp);
            let j = Math.floor(Math.random()*(i+1));
            // console.log(i);
            // console.log(j);
            arr[i]=arr[j];
            arr[j]=temp;
        }
        return arr;
}
const startPlay=()=>{
    let date = new Date();
    start = date.getTime();
}
const endPlay=()=>{
    let date = new Date();
    end = date.getTime();
     totaltime= ((end-start)/1000);
}
btn.addEventListener('click',function(){
    if(!play){
        play=true;
        btn.innerHTML ='GUESS';
        guess.classList.toggle('hidden');
        newWords = createWord();
        randWords = scramble(newWords.split('')).join('');
        // console.log(randWords.join(''));
        // console.log(randWords);
        msg.innerText = randWords;
        startPlay();
    }
    else{
       
        let tempWord = guess.value;
        if(tempWord===newWords){
            // console.log('correct');
            play=false;
            endPlay();
            msg.innerHTML='Great Job!,Your guess is correct.  '+ 'TOTAL TIME: '+totaltime;
           
            btn.innerHTML='START AGAIN!';
            guess.classList.toggle('hidden');
        }
        else{
            // console.log('incorrect');
            msg.innerHTML ='Oops!!Try Again.';
        }
    }
})