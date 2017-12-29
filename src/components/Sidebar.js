import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from 'react-icons/lib/fa/home';
import WarningIcon from 'react-icons/lib/md/warning';
import InfoCircleIcon from 'react-icons/lib/fa/info-circle';
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-up';
import PlusIcon from 'react-icons/lib/fa/plus';
import CogIcon from 'react-icons/lib/fa/cog';

const StyledSidebar = styled.section`
  width: 180px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  background-color: #3f6695;
  font-size: 14px;
  overflow: hidden;
  font-weight: 200;
`;

const NavMenu = styled.ul`
  padding: 0;
  margin: 20px 0;
`;

const NavListItem = styled.li`
  list-style: none;
`;

const NavListLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  width: 100%;
  display: inline-block;
  padding: 10px;
  letter-spacing: 1px;

  &:hover,
  &:active,
  &:focus {
    background-color: #fff;
    color: #3f6695;
  }
`;

const HomeIconLink = styled(HomeIcon)`
  font-size: 16px;
  margin-right: 10px;
  padding-bottom: 5px;
`;

const WarningIconLink = styled(WarningIcon)`
  font-size: 16px;
  margin-right: 10px;
  padding-bottom: 5px;
`;

const InfoCircleIconLink = styled(InfoCircleIcon)`
  font-size: 18px;
  margin-right: 10px;
  padding-bottom: 5px;
`;

const ThumbsUpIconLink = styled(ThumbsUpIcon)`
  font-size: 16px;
  margin-right: 10px;
  padding-bottom: 5px;
`;

const PlusIconLink = styled(PlusIcon)`
  font-size: 16px;
  margin-right: 10px;
  padding-bottom: 5px;
`;

const CogIconLink = styled(CogIcon)`
  font-size: 16px;
  margin-right: 10px;
  padding-bottom: 5px;
`;

const NavListLinkActive = {
  backgroundColor: '#fff',
  color: '#3F6695'
};

const Sidebar = () => (
  <StyledSidebar>
    <NavMenu>
      <NavListItem>
        <NavListLink
          activeStyle={NavListLinkActive}
          to="/"
          className="NavListLink"
          exact
        >
          <HomeIconLink />
          All Projects
        </NavListLink>
      </NavListItem>
      <NavListItem>
        <NavListLink
          activeStyle={NavListLinkActive}
          to="/red"
          className="NavListLink"
        >
          <WarningIconLink />
          Red Projects
        </NavListLink>
      </NavListItem>
      <NavListItem>
        <NavListLink
          activeStyle={NavListLinkActive}
          to="/yellow"
          className="NavListLink"
        >
          <InfoCircleIconLink />
          Yellow Projects
        </NavListLink>
      </NavListItem>
      <NavListItem>
        <NavListLink
          activeStyle={NavListLinkActive}
          to="/green"
          className="NavListLink"
        >
          <ThumbsUpIconLink />
          Green Projects
        </NavListLink>
      </NavListItem>
      <NavListItem>
        <NavListLink
          activeStyle={NavListLinkActive}
          to="/create"
          className="NavListLink"
        >
          <PlusIconLink />
          Create Project
        </NavListLink>
      </NavListItem>
      <NavListItem>
        <NavListLink
          activeStyle={NavListLinkActive}
          to="/admin"
          className="NavListLink"
        >
          <CogIconLink />
          Admin
        </NavListLink>
      </NavListItem>
    </NavMenu>
  </StyledSidebar>
);

export default Sidebar;
