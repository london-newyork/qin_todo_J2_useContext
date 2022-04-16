// import Link from "next/link";
import { CogIcon, LogoutIcon } from "@heroicons/react/outline";
import { Popover, Text } from "@mantine/core";
import Image from "next/image";
import type { VFC } from "react";
import { useState } from "react";

export const Header: VFC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handlePopoverClose = () => {
    return setIsOpened(false);
  };

  const handleImageClick = () => {
    return setIsOpened((o) => {
      return !o;
    });
  };
  const handleSetting = () => {
    alert("setting");
    handlePopoverClose();
  };

  const handleLogout = () => {
    alert("login");
    handlePopoverClose();
  };
  return (
    <header
      className="
      w-full
      sm:h-[56px]"
    >
      <nav>
        {/* {items.map(({ href, label }) => {
          return (
              <Link key={href} href={href}>
                <a style={{ display: "inline-block", padding: 12 }}>{label}</a>
              </Link>
          );
        })} */}
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
            flex
            items-center
            py-[17px]
            leading-none
            border-0
            md:py-[28px]
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
              quality={75}
              priority={false}
              loading={"lazy"}
              unoptimized={false}
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
            <Popover
              opened={isOpened}
              onClose={handlePopoverClose}
              target={
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
                  onClick={handleImageClick}
                />
              }
              width={340}
              position="bottom"
              classNames={{
                wrapper: "rounded-2xl focus:ring-0",
                popover: "rounded-2xl",
                inner: "px-0  rounded-2xl",
                body: "rounded-2xl",
              }}
              // withArrow
            >
              <div className="flex flex-col">
                <button
                  className="flex items-center py-2 px-6 space-x-3 font-bold hover:bg-gray-100 outline-none hover:cursor-pointer"
                  onClick={handleSetting}
                >
                  <CogIcon className="w-6 h-6 font-bold" />
                  <Text className="hover:bg-gray-100" size="sm">
                    設定
                  </Text>
                </button>
                <button
                  className="flex items-center py-2 px-6 space-x-3 font-bold text-red-500 hover:bg-gray-100 outline-none hover:cursor-pointer"
                  onClick={handleLogout}
                >
                  <LogoutIcon className="w-6 h-6 font-bold" />
                  <Text className="hover:bg-gray-100 " size="sm">
                    ログアウト
                  </Text>
                </button>
              </div>
            </Popover>
          </div>
        </div>
      </nav>
    </header>
  );
};
