import React, { useContext, useMemo, useState } from "react";
import useFireStore from "../hook/useFireStore";
import { AuthContext } from "./AuthProvider";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
  const [isInviteMemberVisible, setIsInviteMemberVisible] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const { uid } = useContext(AuthContext);

  //rooms
  /*
    {
      name: 'room name',
      description : 'mô tả',
      members: 'thành viên' - [uid1,uid2]
    }
    */

  // dùng useMemo để khởi tạo lại khi uid bị thay đổi
  const roomsCondition = React.useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);
  const rooms = useFireStore("rooms", roomsCondition);
  //   console.log({ rooms });

  // lấy ra room theo selectedRoomId
  const selectedRoom = useMemo(
    () => rooms.find((room) => room.id === selectedRoomId) || {},
    [rooms, selectedRoomId]
  );

  // check xem user có nằm trong list user của room ko
  const membersCondition = React.useMemo(() => {
    return {
      fieldName: "uid",
      operator: "in",
      compareValue: selectedRoom.members,
    };
  }, [selectedRoom.members]);
  const members = useFireStore("users", membersCondition);

  console.log(members);

  return (
    <AppContext.Provider
      value={{
        rooms,
        selectedRoom,
        members,
        isAddRoomVisible,
        setIsAddRoomVisible,
        selectedRoomId,
        setSelectedRoomId,
        isInviteMemberVisible,
        setIsInviteMemberVisible,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
