import css from 'styled-jsx/css'

export default css`
  .container{
    margin: 1rem;
  }
  .intro{
    display: grid;
    grid-template-columns: 0.2fr 1.7fr;

    margin-top: 5vh;
    margin-bottom: 6vh;
  }

  .intro div:last-child p:first-child{
    font-size: 1.3rem;
    font-weight: bold;
  }

  .intro div:last-child p:last-child{
    font-size: 1.2rem;
    font-weight: lighter;
  }
  .symbol {
    display: flex;
    background-color: red;
    margin: 0.5em;
    text-align: center;
    justify-content: center;
  }

  .symbol p{
    text-align: center;
    font-size: 3rem;
    color: white;
    letter-spacing: 0.2em;
  }

  

  .descriptions {
    text-align: center;
    width: 90vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10 50px;
  }

  .descriptions .item{
    background-color: lightblue;
    margin: 10px;
    border-radius: 15px;
    height: 11vh;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

  }

  .descriptions .item .title {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .descriptions .item .value {
    font-size: 1.1rem;
    font-weight: lighter;
  }


`