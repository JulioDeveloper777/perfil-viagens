import { Photo } from "@/types/gallery";
import Image from "next/image";

type PropsImage = {
  photo: Photo;
  onClick: () => void;
  priority?: boolean;
};

export const PhotoItem = ({ photo, onClick, priority = false }: PropsImage) => {
  return (
    <div 
      onClick={onClick} 
      className="cursor-pointer hover:opacity-50 aspect-square relative overflow-hidden"
    >
      <Image
        src={`${photo.url}`}
        alt=""
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover"
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        quality={75}
      />
    </div>
  );
};