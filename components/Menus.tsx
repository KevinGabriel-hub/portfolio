import { useState } from "react"
import MenuBtn from "./MenuBtn"
import { BsBookHalf } from "react-icons/bs"
import { menus } from "../data"
import SideMenuLb from "./SideMenuLb"
import { ReactiveVar, useReactiveVar } from "@apollo/client"
import { currentMenu } from "../apollo-client"

interface Props {
  showSideMenu: ReactiveVar<boolean>
}

export default function Menus({ showSideMenu }: Props) {
  const menuId = useReactiveVar(currentMenu)

  return (
    <header className="xl:w-[7.2rem] lg:w-[7rem] py-6 h-full mr-4 hidden lg:flex flex-col">
      {/* humburbar menu */}
      <div
        onClick={() => showSideMenu(true)}
        className="h-[7.2rem] group rounded-lg bg-gray-900 flex items-center justify-center cursor-pointer"
      >
        <div className="w-11">
          <div className="w-9/12 h-[0.24rem] bg-gray-300 transition-width duration-300 group-hover:w-full group-hover:bg-main-orange"></div>
          <div className="w-full h-1 my-2 bg-gray-300 group-hover:bg-main-orange"></div>
          <div className="w-9/12 h-[0.24rem] bg-gray-300 transition-width duration-300 group-hover:w-full group-hover:bg-main-orange"></div>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg">
        {menus.slice(0, 4).map((m, i) => (
          <MenuBtn
            key={m.id}
            menu={m}
            noBorder={i + 1 === menus.length}
            active={menuId === m.id}
            reactiveVar={currentMenu}
          />
        ))}
      </div>
    </header>
  )
}
