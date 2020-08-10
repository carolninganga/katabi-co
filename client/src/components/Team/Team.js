import React from 'react'
import styles from './Team.module.css'


const Team = () => (
<div className="container">

<div className="row mt-3">
<h4 className="mt-3" style={{margin: "0 auto", color: "white"}}>Our Team</h4>
</div>

<div className="row justify-content-center">

<div className="col-md-3 mt-3">
  <div className={styles.member}>
    <img alt="phot" src="https://avatars1.githubusercontent.com/u/34685781?s=460&u=74ef7ea83f1102f4fa3bfd9d7331b8ef66da8330&v=4"/>
    <h2>Josephine Dorado</h2>
    <p className={styles.who}>Web Developer</p>
    <p className={styles.membertext}>Full-Stack Web Developer with a background in Education and Healthcare industry.</p>
    
    <div className={styles.socicons}>
  
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/funksoup/"><i className="fab fa-linkedin-in"></i></a>
     
    </div>
    
  </div>
  </div>

  <div className="col-md-3 mt-3">
  <div className={styles.member}>
    <img alt="phot" src="https://ca.slack-edge.com/TSVUWLRHS-UT0BZU52A-930e7aa6ae9c-512"/>
    <h2>Robert Han</h2>
    <p className={styles.who}>Web Developer</p>
    <p className={styles.membertext}>Full-Stack Web Developer with a background in Accounting and Information Systems.</p>
    
    <div className={styles.socicons}>
   
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hanrobert/"><i className="fab fa-linkedin-in"></i></a>
  
    </div>
    
  </div>
  </div>

  <div className="col-md-3 mt-3">
  <div className={styles.member}>
    <img alt="phot" src="https://cdn.glitch.com/c0dcb651-5b19-4756-a6e6-25b3982ca367%2Fmoi-2.jpg?v=1597010269116"/>
    <h2>Joyce Bettencourt</h2>
    <p className={styles.who}>Web Developer</p>
    <p className={styles.membertext}>Full-Stack Web Developer with a background in Accounting and Information Systems.</p>
    
    <div className={styles.socicons}>
   
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joycebettencourt/"><i className="fab fa-linkedin-in"></i></a>
  
    </div>
    
  </div>
  </div>




  </div>


  <div className="row justify-content-center">

<div className="col-md-3 mt-3">
  <div className={styles.member}>
    <img alt="phot" src="https://cdn.glitch.com/f28949c6-6f44-4abb-a9a1-6a9e90371a91%2FIMG-20200729-WA0000_mh1596115301303.jpg?v=1596115348329"/>
    <h2>Caroline Ninganga</h2>
    <p className={styles.who}>Web Developer</p>
    <p className={styles.membertext}>Full-Stack Web Developer with a background in Education and Healthcare industry.</p>
    
    <div className={styles.socicons}>
  
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/carolineninganga/"><i className="fab fa-linkedin-in"></i></a>
     
    </div>
    
  </div>
  </div>

  <div className="col-md-3 mt-3">
  <div className={styles.member}>
    <img alt="phot" src="https://avatars1.githubusercontent.com/u/20895?s=460&v=4"/>
    <h2>Jeroen Frans</h2>
    <p className={styles.who}>Web Developer</p>
    <p className={styles.membertext}>Full-Stack Web Developer with a background in Accounting and Information Systems.</p>
    
    <div className={styles.socicons}>
   
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mrfrans/"><i className="fab fa-linkedin-in"></i></a>
  
    </div>
    
  </div>
  </div>

  <div className="col-md-3 mt-3">
  <div className={styles.member}>
    <img alt="phot" src="https://cdn.glitch.com/f28949c6-6f44-4abb-a9a1-6a9e90371a91%2F52837649.jpg?v=1596115147721"/>
    <h2>Yaheng Wu</h2>
    <p className={styles.who}>Web Developer</p>
    <p className={styles.membertext}>Full-Stack Web Developer with a background in Accounting and Information Systems.</p>
    
    <div className={styles.socicons}>
   
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yahengwu/"><i className="fab fa-linkedin-in"></i></a>
  
    </div>
    
  </div>
  </div>




  </div>


</div>
)


export default Team;