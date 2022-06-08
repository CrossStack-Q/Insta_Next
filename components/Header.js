import React from "react";
import Image from "next/image";
import { Popover, User, Button, Grid } from "@nextui-org/react";
import { UserTwitterCard } from "./UserTwitterCard";
import {
  BreakerIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { Input } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
  const { data: session } = useSession();
  const [visible, setVisible] = useRecoilState(modalState);;
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();
  function handler() {
    setVisible(true), setOpen(true);
  }

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div
          onClick={() => router.push("/")}
          className="hidden lg:inline-grid w-24 h-14 relative cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          onClick={() => router.push("/")}
          className="cursor-pointer relative w-10 lg:hidden flex-shrink-0"
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle */}

        <div className="mt-2">
          <Input
            clearable
            contentRightStyling={false}
            placeholder="Search"
            contentLeft={<SearchIcon className="h-5 w-5 text-gray-500" />}
          />
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4 ">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <PaperAirplaneIcon className="navBtn rotate-45" />
          <PlusCircleIcon onClick={handler} className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          {/* Old version of avatar */}
          {/* <div
            onClick={signOut}
            className="relative cursor-pointer w-9 h-9 border border-gray-400 rounded-full hover:scale-125 transition-all duration-150 ease-out"
          >
            <Image
              src="https://raw.githubusercontent.com/Cross-Rehk/Some_Extra_files/main/logo_flies/four.png"
              layout="fill"
              objectFit="contain"
            />
          </div> */}
          <div>
            <Grid.Container gap={2} alignContent="center">
              <Grid>
                <Popover>
                  <Popover.Trigger>
                    <User
                      as="button"
                      size="md"
                      zoomed
                      pointer
                      src={session?.user?.image}
                    />
                  </Popover.Trigger>
                  <Popover.Content css={{ px: "$4", py: "$2" }}>
                    <UserTwitterCard />
                  </Popover.Content>
                </Popover>
              </Grid>
            </Grid.Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
