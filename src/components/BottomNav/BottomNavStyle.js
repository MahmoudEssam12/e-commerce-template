import css from "styled-jsx/css";

export default css`
  .pages-nav {
    background-color: var(--default-color);

    ul {
      list-style: none;
      display: flex;
      gap: 1rem;
      span {
        color: #fff;
        display: block;
        padding: 0.5rem 2rem;
      }
      li {
        padding: 1rem 2rem 0;
        span{
          transition: all .3s ease;
          padding-bottom: 1rem;
        }
        .active {
          color: var(--secondary-color);
          position: relative;
          &:after{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            border-radius: 5px;
            background-color:var(--secondary-color) ;
          }
        }
        &:hover span{
          color: var(--secondary-color);

        }
      }
    }
    @media(max-width:600px){
      ul{
        justify-content: space-between;
        li{
          padding: 0.5rem 0 0;
          span{
            padding: 1rem 1rem;
          }
        }
      }
    }
  }

`;
