import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const UserAvatar = ({ img, username }: { img?: string; username?: string }) => {
  return (
    <Avatar>
      <AvatarImage src={img || "./userIcon.svg"} />
      <AvatarFallback>{username || "US"}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
