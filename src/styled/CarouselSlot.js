import styled from 'styled-components';

const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 80%;
  margin-right: 20px;
  padding: 20px;
  order: ${(props) => props.order}
  background-color: blue;
`

export default CarouselSlot;