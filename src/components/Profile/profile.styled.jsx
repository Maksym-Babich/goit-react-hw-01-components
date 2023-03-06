import styled from '@emotion/styled'

export const Card = styled.div`
background-color: #ffffff;
width: 200px;
margin: 50px auto;
text-align: center
`;

export const Description = styled.div`
padding: 15px 15px 30px 15px;
`;

export const Avatar = styled.img`
width: 50px;
display: block;
margin: 0 auto 20px;
border-radius: 50%;
`;

export const Name = styled.p`
font-weigth: 700;
font-size: 20px;
margin-bottom: 20px;

`;

export const Tag = styled.p`
color: grey;
margin-bottom: 10px;
`;

export const Location = styled.p`
color: grey;
`;

export const Stats = styled.ul`
list-style: none;
margin: 0;
padding: 0;
display: flex;
background-color: #fafafa;

li {
    flex-basis: 33.33%;
    
    padding: 15px 0;
    display: flex;
    flex-direction: column;

}
`;

export const Label = styled.span`
margin-bottom: 5px;
font-size: 12px;
`;

export const Quantity = styled.span`
font-weight: 500;
color: black;
font-size: 15px;
`;
