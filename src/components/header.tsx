// import Link from "next/link";
import Image from "next/image";
import type { VFC } from "react";

// const items = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
// ];

export const Header: VFC = () => {
  return (
    <header
      className="
      w-full
      sm:h-[80px]"
    >
      {/* <h1>Title</h1> */}
      <nav>
        {/* {items.map(({ href, label }) => {
          return (
              <Link key={href} href={href}>
                <a style={{ display: "inline-block", padding: 12 }}>{label}</a>
              </Link>
          );
        })} */}
        {/* <div
          className="
          flex
          sm:justify-between
          sm:px-[196px]
          px-0
        ">
          <div
            className="
            items-center
            py-[17px]
            sm:py-[28px]
            pl-[137px]
            sm:pl-0
            leading-none
            border-0
          ">
            <Image
              className="
              my-0
              leading-none
              border-0"
              src={`/qin_todo_logo.svg`}
              alt='The logo of Qin Todo'
              width='100px'
              height='21.34px'
              quality={75} // 画質, number
              priority={false} // 表示の優先度, boolean
              loading={"lazy"} // 遅延ロードするかどうか, "lazy" | "eager"
              unoptimized={false} // 最適化するかどうか, boolean| "responsive"
            />
          </div>
          <div
            className="
            flex
            items-center
            py-[10px]
            sm:py-[22px]
            pr-[24px]
            sm:pl-0
            pl-[78px]
            ">
            <Image
              className="object-cover rounded-full"
              src={`/shimabu_icon.jpeg`}
              alt='account_image'
              width={36}
              height={36}
              quality={75} // 画質, number
              priority={false} // 表示の優先度, boolean
              loading={"lazy"} // 遅延ロードするかどうか, "lazy" | "eager"
              unoptimized={false} // 最適化するかどうか, boolean
              />
          </div>
        </div> */}
        <div
          className="
          flex
          relative
          justify-center
          px-0
          sm:justify-between
          sm:px-[196px]
        "
        >
          <div
            className="
            items-center
            py-[17px]
            leading-none
            border-0
            sm:py-[28px]
          "
          >
            <Image
              className="
              my-0
              leading-none
              border-0"
              src={`/qin_todo_logo.svg`}
              alt="The logo of Qin Todo"
              width="100px"
              height="21.34px"
              quality={75} // 画質, number
              priority={false} // 表示の優先度, boolean
              loading={"lazy"} // 遅延ロードするかどうか, "lazy" | "eager"
              unoptimized={false} // 最適化するかどうか, boolean| "responsive"
            />
          </div>
          <div
            className="
            flex
            absolute
            right-0
            items-center
            py-[10px]
            pr-[24px]
            sm:static
            sm:right-0
            sm:py-[22px]
            sm:pr-0
            "
          >
            <Image
              className="object-cover rounded-full"
              src={`/shimabu_icon.jpeg`}
              alt="account_image"
              width={36}
              height={36}
              quality={75} // 画質, number
              priority={false} // 表示の優先度, boolean
              loading={"lazy"} // 遅延ロードするかどうか, "lazy" | "eager"
              unoptimized={false} // 最適化するかどうか, boolean
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
