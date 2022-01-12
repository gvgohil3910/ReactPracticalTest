import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { grey, green } from '@mui/material/colors';

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 3px 3px;
  border: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;
    text-transform: uppercase;
  &:hover {
    background-color: ${green[400]};
  }

  &:focus {
    color: #fff;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${green['A700']};
    color: ${grey[900]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
width:300px;
max-widht: 100%;
margin-left: auto;
margin-right: auto;
  background-color: ${grey[900]};
  border-radius: 22px;
  margin-top: 15px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export default function UnstyledTabsCustomized(props) {
    const { tabs } = props;
    return (
        <TabsUnstyled defaultValue={0}>
            <TabsList>
                {tabs?.length > 0 && tabs.map((tabitem, index) => {
                    return <Tab key={'tabstitle' + index}>{tabitem.title}</Tab>;
                })}
            </TabsList>
            {tabs?.length > 0 && tabs.map((tabitem, index) => {
                return <TabPanel key={'tabcontent' + index} value={index}>{React.createElement(tabitem.component)}</TabPanel>;
            })}
        </TabsUnstyled>
    );
}
