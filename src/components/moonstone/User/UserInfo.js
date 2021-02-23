import React, { useEffect, useState } from "react";
import FormData from "form-data";
import ImageUploader from "react-images-upload";
import { useUser } from "../context/user";
import Input from "../Input";
import Header from "../Header";
import Button from "../Button";
import API from "../../../utils/api";

function UserProfile() {
  const { user, dispatch } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    nickname: null,
    picture: null,
    errors: null,
  });

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
    if (!isEditing || (!data.nickname && !data.picture)) {
      setIsEditing(!isEditing);
      return;
    }

    const form = new FormData();

    if (data.picture) {
      form.append("attendee[avatar]", data.picture);
    }

    if (data.nickname) {
      form.append("attendee[nickname]", data.nickname);
    }

    await API.put(`/api/v1/attendees/${user.id}`, form)
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
        title="Your Profile"
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
      {isEditing ? (
        <ImageUploader
          withPreview
          onChange={(pictures) => setData({ ...data, picture: pictures[0] })}
          withIcon={false}
          singleImage
          label=""
          buttonText="Upload new profile picture"
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={1048576}
        />
      ) : (
        <img className="profilePicture" src={user.avatar}/>
      )}
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
      <a className="small reset" href="/reset">
        Reset password
      </a>
    </div>
  );
}

export default UserProfile;
