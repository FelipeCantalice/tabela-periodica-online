

import css from 'styled-jsx/css'

export default css`
.small-item{
    width: 45rem;
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    border: 1px dotted black;

    color: white;

    text-shadow: 1.3px 1.3px 0 black, 1.3px -1.3px 0 black, -1.3px 1.3px 0 black, -1.3px -1.3px 0 black, 1.3px 0px 0 black, 0px 1.3px 0 black, -1.3px 0px 0 black, 0px -1.3px 0 black;
}

.small-item p:first-child{
    font-size: 2rem;
}
.small-item p:last-child{
    font-size: 1.1rem;
}
`