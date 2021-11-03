import css from 'styled-jsx/css'

export default css`
  .container > div{
      border: 2px dotted black;
      display: grid;
      margin: 0.5rem;
      justify-items: center;
      grid-template-columns: 1.8fr 0.2fr;
  }

  .container p{
     font-size: 1.2rem;
    color: #FFFFFF;
    text-shadow: 2px 2px 0 #4074b5, 2px -2px 0 #4074b5, -2px 2px 0 #4074b5, -2px -2px 0 #4074b5, 2px 0px 0 #4074b5, 0px 2px 0 #4074b5, -2px 0px 0 #4074b5, 0px -2px 0 #4074b5;
  }

  .container:hover > div{
    background-color: blue !important;
    color: #FFFFFF !important;
  }


  .description > p:first-child{
      
      font-size: 1.7rem;
      font-weight: bold;
      text-align: center;
  }

  .description > p:last-child{
      
      font-weight: bold;
      text-align: center;
  }

  .shells {
    display: flex;
    flex-direction: column;
  }

  .shells > span {
    font-size: 0.8rem;
    text-align: end;
    font-weight: bold;
    color: black;
  }
`