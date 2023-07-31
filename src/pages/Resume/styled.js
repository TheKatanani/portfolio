import styled from "styled-components";

export const StyledResume = styled.div`
  padding: 200px 0;
  background-color:${(props) => props.theme.palette.ColorApp.secondary};
  h2, h1{
    margin: 30px 0;
    font-size:${(props) => props.theme.fontSizes.h1}rem;
    text-transform: capitalize;
    color:${(props) =>  props.theme.palette.ColorApp.dark};
  }
  .container{
  max-width: 850px;
}
section:not(:first-child){
  margin: 70px 0;
}
.experience{
  display: flex;
  justify-content:space-between;
  align-items: center; 
  button{
    width: fit-content;
    padding: 5px 15px;
    text-transform: uppercase;
  }
}
.skills{
  div ul{
    gap:25px;
    display: flex;
    flex-wrap: wrap;
  }
}
`
export const StyledBox = styled.div`
  background-color:${(props) => props.theme.palette.main};
  color:${(props) =>  props.theme.palette.font};
  padding: 50px 30px 25px;
  margin: 20px 0;
  line-height: 1.8;
`
export const StyledExperience = styled(StyledBox)`
  h2{
    font-size:${(props) => props.theme.fontSizes.h4}rem;
    color:${(props) =>  props.theme.palette.ColorApp.third};
    min-width: 30%;
    position: relative;
    margin-left: 25px;
    height: fit-content;
    ::before{
      content: "";
      width: 15px;
      height: 15px;
      background-color: ${(props) =>  props.theme.palette.ColorApp.third};;
      position: absolute;
      top: 50%;
      left: -25px;
      transform: translateY(-50%);
    }
  }
  ul{
    margin: 30px 0px 30px 40px;
    list-style:initial;
  }
`