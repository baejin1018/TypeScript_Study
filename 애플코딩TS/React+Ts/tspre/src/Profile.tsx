import React from "react";

const Profile = (props: { name: string }): JSX.Element => {
  return <div>프로필 {props.name}</div>;
};

export default Profile;
