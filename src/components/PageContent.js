import styled from 'styled-components';

const PageContent = styled.div`
  margin-left: 180px;
  padding-left: 2rem;
  display: ${props => (props.displayBlock ? 'block' : 'flex')};
  flex-wrap: wrap;
  min-height: calc(100vh - 164px);
`;

export default PageContent;
