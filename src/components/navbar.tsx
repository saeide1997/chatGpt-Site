import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="px-4 py-16 h-10 w-screen absolute top-0">
      <div className="flex items-center justify-between">
        <Link className="flex items-center font-bold gap-8" href="/">
          <Image
            className=""
            src="/logo.png"
            alt=""
            width={32}
            height={32}
          ></Image>
          <span> SOHO AI </span>
        </Link>
        <div className="">کاربر</div>
      </div>
    </div>
  );
};

export default Navbar;
