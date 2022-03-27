import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width; 100%;
    border: 1px solid lightblue;
    border-radius: 3px;
    height: 100%;


    button{
        border-radius: 0 0 20px 20px;
    }
    img{
        min-height: 250px;
        max-height: 250px;
        object-fit: contain;
        border-radius: 20px 20px 0 0;
    }
    div{
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%;
    }
    .title{
        height: 80px;
        color: rgba(0, 0, 0, 0.8);
        
    }
    .price{
        padding 6px 0;
        color: rgba(0, 0, 0, 0.7);
        margin: 5px 0;
    }
    .trancate{
        width: 250px;
        height: 80px;
        text-align: justify;
        text-justify: inter-word;


    }
`;