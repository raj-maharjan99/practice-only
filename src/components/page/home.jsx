import React   from 'react'
import styles from "./home.module.css"
import { useState } from 'react';

function Home() {

    const [count, xyz] = useState(0);

    function ab () {
        xyz(count +1);
    }
 function abc () {
    xyz(count -1);
 }
 function abcd () {
    xyz(0);
 }

  return   <>
  
 <div className={styles.box}>
    <h1>{count}</h1> 

<button onClick={ab}>Add</button>
<button onClick={abc}>Less</button>
<button onClick={abcd}>Reset</button>
</div> 
 <div className={styles.box1}><h1>{count}</h1>
<button onClick={() => xyz(count + 1)}>Expenses</button>
<button onClick={() => xyz(count - 1)}>Income</button>
<button onClick={() => xyz(0) }>Pocket</button>
  </div>


  
  </>
}

export default Home


