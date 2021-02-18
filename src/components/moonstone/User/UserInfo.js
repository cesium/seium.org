import React, { useEffect, useState } from "react";
import { useUser } from "../context/user";
import Input from "../Input";
import Header from "../Header";
import Button from "../Button";
import API from "../../../utils/api";

function UserProfile() {
  const { user, dispatch } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({ nickname: null, errors: null });

  useEffect(() => {
    setData({ nickname: user.nickname });
  }, [user]);

  const label2Style = {
    color: "#000",
  };

  const input2Style = {
    border: "solid 1px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    color: "#181818",
  };

  const onEditInput = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onSave = async () => {
    if (!isEditing) setIsEditing(!isEditing);

    API.put(`/api/v1/attendees/${user.id}`, {
      attendee: { ...data },
    })
      .then((response) => {
        dispatch({ type: "UPDATE", user: response.data.data });
        setIsEditing(!isEditing);
      })
      .catch((error) => {
        setData({ errors: error.response.data.errors });
      });
  };

  return (
    <div className="editProfile">
      <Header
        style={{ flexWrap: "no-wrap", width: "100%" }}
        title="User Profile"
      >
        <Button
          isEditing
          onClick={onSave}
          style={{ padding: "13px", marginBottom: "-9px" }}
          width="88px"
        >
          {!isEditing ? "EDIT" : "SAVE"}
        </Button>
      </Header>
      <img className="profilePicture" src={user.avatar} />
      <Input
        label="NAME"
        placeholder="Mascote SenSEI"
        label2={label2Style}
        input2={input2Style}
        value={user.name}
        isDisabled
      />
      <Input
        type="text"
        name="nickname"
        label="USERNAME"
        placeholder="sensei"
        label2={label2Style}
        input2={input2Style}
        handleChange={onEditInput}
        value={data.nickname}
        error={data.errors?.nickname}
        isDisabled={!isEditing}
      />
      <Input
        label="EMAIL"
        placeholder="sensei@seium.org"
        label2={label2Style}
        input2={input2Style}
        value={user.email}
        isDisabled
      />
      {/* <Input
        label="PASSWORD"
        placeholder="*******"
        type="password"
        label2={label2Style}
        input2={input2Style}
        isDisabled
      /> */}
      <a className="small reset" href="/reset">
        Reset password
      </a>
    </div>
  );
}

export default UserProfile;
