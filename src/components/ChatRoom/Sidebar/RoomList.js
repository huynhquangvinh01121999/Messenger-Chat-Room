import React, { useContext } from "react";
import { Collapse, Typography, Button } from "antd";
import styled from "styled-components";
import { PlusSquareOutlined } from "@ant-design/icons";
import { AppContext } from "../../../Context/AppProvider";

const { Panel } = Collapse;
const { Link } = Typography;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: black;
      font-weight: 600;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: black;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Link)`
  display: block;
  margin-bottom: 5px;
  color: black;
  padding: 5px;
  font-size: 15px;
  width: 150px;
`;

export default function RoomList() {
  // const { uid } = useContext(AuthContext);

  // //rooms
  // /*
  // {
  //   name: 'room name',
  //   description : 'mô tả',
  //   members: 'thành viên' - [uid1,uid2]
  // }
  // */

  // // dùng useMemo để khởi tạo lại khi uid bị thay đổi
  // const roomsCondition = React.useMemo(() => {
  //   return {
  //     fieldName: "members",
  //     operator: "array-contains",
  //     compareValue: uid,
  //   };
  // }, [uid]);
  // const rooms = useFireStore("rooms", roomsCondition);

  // console.log({rooms});

  const { rooms, setIsAddRoomVisible, setSelectedRoomId } =
    useContext(AppContext);

  console.log({ rooms });

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };

  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="Danh sách các phòng" key="1">
        {rooms.map((room) => (
          <LinkStyled key={room.id} onClick={() => setSelectedRoomId(room.id)}>
            {room.name}
          </LinkStyled>
        ))}
        <Button
          type="text"
          icon={<PlusSquareOutlined />}
          className="add-room"
          onClick={handleAddRoom}
        >
          Thêm phòng
        </Button>
      </PanelStyled>
    </Collapse>
  );
}
