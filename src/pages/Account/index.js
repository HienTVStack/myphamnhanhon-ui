import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Typography, useMediaQuery } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import DescriptionIcon from "@mui/icons-material/Description";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import KeyIcon from "@mui/icons-material/Key";

import General from "./General";
import ChangePassword from "./ChangePassword";

function Account() {
    const theme = useTheme();
    const navigate = useNavigate();
    const matches = useMediaQuery(theme.breakpoints.up("lg"));
    const user = useSelector((state) => state.data.user);
    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Container sx={{ marginTop: matches ? "180px" : "200px" }}>
            <Typography variant="subtitle1">Hi, {user?.fullName}</Typography>

            <TabContext value={value}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                            "&.Mui-disabled": { opacity: 0.3 },
                        },
                    }}
                >
                    <Tab icon={<AssignmentIndIcon />} iconPosition="start" label="Tổng quan" value="1" />
                    <Tab icon={<DescriptionIcon />} iconPosition="start" label="Hóa đơn" value="2" />
                    <Tab icon={<CardGiftcardIcon />} label="Voucher" iconPosition="start" value="3" />
                    <Tab icon={<KeyIcon />} label="Thay đổi mật khẩu" iconPosition="start" value="4" />
                </Tabs>
                <TabPanel value="1">
                    {
                        <General
                            fullName={user?.fullName}
                            email={user?.email || user?.emailFacebook || user?.emailGoogle}
                            phone={user?.phone}
                            address={user?.address}
                        />
                    }
                </TabPanel>
                <TabPanel value="2">Đang cập nhật....</TabPanel>
                <TabPanel value="3">Đang cập nhật....</TabPanel>
                <TabPanel value="4">{<ChangePassword />}</TabPanel>
            </TabContext>
        </Container>
    );
}

export default Account;