import Image from "next/image";
import Link from "next/link";

interface IPostCardProps {
  title: string;
  imageSrc: string;
  description: string;
  className?: string;
  date: string
}

const PostCard = ({
  title,
  imageSrc,
  description,
  className,
  date,
}: IPostCardProps) => {
  return (
    <Link href={`/blogs/${title}`} className={`w-[325px] ${className}`}>
      <Image
        src={imageSrc}
        alt={title}
        width={352}
        height={200}
        unoptimized
        loading="eager"
        className="w-full h-[200px] object-cover"
      />
      <h3 className="my-4 lg:mb-[22px] text-[20px] leading-[30px] text-[#B81122] font-black text-start truncate">
        {title}
      </h3>
      <p className="text-[16px] leading-[32px] line-clamp-2" dangerouslySetInnerHTML={{ __html: description }} />
      <span className="text-[#B81122] font-black text-sm">{date}</span>
    </Link>
  );
};

export default PostCard;
