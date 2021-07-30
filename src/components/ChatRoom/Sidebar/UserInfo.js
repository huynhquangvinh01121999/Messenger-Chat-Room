import React from "react";
import { Button, Avatar, Typography } from "antd";
import styled from "styled-components";
import { auth } from "../../../firebase/config";
import { AuthContext } from "../../../Context/AuthProvider";

const { Text } = Typography;

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  border-bottom: 0.3px solid silver;

  .userName {
    color: black;
    margin-left: 10px;
    font-size: 18px;
  }
`;

const ButtonStyled = styled(Button)`
  color: black;
  border: 1px solid red;
`;

export default function UserInfo() {
  const { displayName, photoURL } = React.useContext(AuthContext);

  return (
    <WrapperStyled>
      <div>
        <Avatar src={photoURL}>
          {photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Text className="userName">{displayName}</Text>
      </div>
      <ButtonStyled ghost onClick={() => auth.signOut()}>
        Đăng xuất
      </ButtonStyled>
    </WrapperStyled>
  );
}
