import React from 'react';
import { Container, Paper } from "@mui/material";
import UnstyledTabsCustomized from '../../Components/FormTabs/FormTabs';
import FanForm from '../../Components/FanForm/FanForm';
import TalentForm from '../../Components/TalentForm/TalentForm';
import styles from './Home.module.css';
function Home(props) {
    return <>
        <Container maxWidth="md">
            <Paper elevation={1} className={styles.tabWrapbox}>
                <UnstyledTabsCustomized
                    tabs={[
                        {
                            title: 'Fan Signup',
                            component: FanForm
                        },
                        {
                            title: 'Talent Signup',
                            component: TalentForm
                        }
                    ]}
                />
            </Paper>
        </Container>
    </>;
}

export default Home;