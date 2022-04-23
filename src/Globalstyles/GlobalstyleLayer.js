import { createGlobalStyle } from "styled-components";

export const GlobalStyleLayer = createGlobalStyle`
     *,*:after,*:before{
         margin:0px ;
         padding:0px ;
        box-sizing:border-box ;
        
     }
     
     body{
        background-color: #f3f2ef ;
          font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Emoji,
    Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif; 
      }

li,ul{
  list-style-type:none ;
  
}
a{
  text-decoration:none ;
  cursor:poiner ;
}


`;
