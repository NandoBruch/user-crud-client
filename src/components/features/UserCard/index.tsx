import Card from "@/components/ui/Card";
import { IUserCardProps } from "./interface";
import Image from "next/image";
import Button from "@/components/ui/Button";

const UserCard = ({ user, onSelect, onDelete }: IUserCardProps) => {
  return (
    <Card className="h-110 w-100 max-w-2xl bg-white shadow-xl rounded-lg text-gray-900  relative">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <div className="w-full h-40 bg-green-200 absolute top-0 left-0 overflow-hidden" />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden bg-gray-200">
        <Image
          src={`https://robohash.org/${user.id}.webp?size=100x100`}
          alt="User profile picture"
          width={150}
          height={150}
          objectFit="cover"
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-gray-500">{user.email}</p>
        <p className="text-gray-500">{user.phone}</p>
      </div>
      <div className="mt-4 flex justify-between">
        <Button onClick={onSelect}>editar</Button>
        <Button onClick={onDelete}>Deletar</Button>
      </div>
    </Card>
  );
};

export default UserCard;
