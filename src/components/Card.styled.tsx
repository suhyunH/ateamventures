import styled from 'styled-components';
  

export const CardContainer = styled.div`
.card-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    place-items: center;
}
.card{
    width: 300px;
    margin: 10px;
    border: 1px solid grey;
    border-radius: 2px;
    padding: 10px;

    .head{
        display: flex;
        align-items: center;
        span{
            display: block;
        }
    }
    &:hover{
        border: 1px solid blue;

    }
    td{
        &:last-child{
            font-weight: bold;
        }
    }
}


`