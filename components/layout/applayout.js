import React, {useState} from "react";
import API from '../../lib/api';
import { Layout } from "antd";
import styled, {css} from 'styled-components';
import {LogoutOutlined} from "@ant-design/icons";
// not create
import AppMenu from "./appmenu";
import AppBreadcrumb from "./appbreadcrumb";

//property
const {Header, Content, Footer, Sider } =Layout;
// finish

//style componets
const sharedBackGroundColor = css`
background: #fff;
`;

const StyledLogoDiv = styled.div`
    height:32px;
    background: rgba(255, 255, 255, 0.2);
    margin:16px;
`
const StyledlayoutHeader = styled(Header)`
    &&&{
        ${sharedBackGroundColor}
    }
`;

const StyledLayoutDiv = styled.div`
    ${sharedBackGroundColor}
    `;
//end style components

function AppLayout(props){
    const [collapsed, ToggkeCollapse] = useState(false);

    const onCollapse = (collapsed) =>{
        ToggkeCollapse(collapsed);
    };

    const onLogout = () =>{
        API.logout();
    }

    return (
        <Layout style={{ minHeight: "100vh"}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <StyledLogoDiv />
            <AppMenu />
            </Sider>
            <Layout>
                <StyledlayoutHeader style={{ padding :0}}>
                    <div style={{ textAlign:"right", marginRight: '16px' }}>
                        <a onClick={onLogout}>
                            <LogoutOutlined style={{fontSize: '20px'}} />
                        </a>
                    </div>
                </StyledlayoutHeader>
                <Content style={{ margin:"0 16px" }}>
                    <AppBreadcrumb />
                    <StyledLayoutDiv style={{ padding: 24,minHeight:360 }}>
                        {props.content}
                    </StyledLayoutDiv>
                </Content>
                <Footer style={{ textAlign: "center"}}>Curriculum Assisstant</Footer>
            </Layout>
        </Layout>
    )
}

export default AppLayout;
