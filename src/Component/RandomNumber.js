import React, {useState} from 'react';
import styles from './RandomNumber.module.css';

export default function RandomNumber(){

    const [lucky,setLucky] = useState(Math.floor(Math.random()*100)+1);
    const [guess,setGuess] = useState("");
    const [message,setMessage] = useState("");
    const [count,setCount] = useState(0);

    function handleGuess(e){
        setGuess(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();

        const guessNumber=parseInt(guess);

        if(guessNumber===lucky){
            setMessage(`Congratulations! You guessed correct number in ${count} attempts`);
            setLucky(Math.floor(Math.random()*100)+1);
            setGuess("");
            setCount(0);
        }
        else if(guessNumber<lucky){
            setMessage(`You guessed a smaller Number`);
            setGuess("");
            setCount(count+1);
        }
        else{
            setMessage(`You guessed a bigger Number`);
            setGuess("");
            setCount(count+1);
        }
    }

    return(

        <div className={styles.parentCont}>
            <div className={styles.parent}>
                <h1>Guess the lucky Number!</h1>
                <p>Guess the Number between 1 and 100 :</p>

                <form onSubmit={handleSubmit} className={styles.formData}>
                    <input className={styles.inputData} type = "text" value = {guess} onChange = {handleGuess}/>
                    <button className={styles.button} type = "submit">Guess</button>
                </form>

                {message && <p>{message} </p>}
            </div>
        </div>

    )
}