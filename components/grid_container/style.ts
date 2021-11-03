import css from 'styled-jsx/css'

export default css`
  .container-grid{
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));
  }
`