"use client";
import React, { Fragment } from "react";
import Logo from "../logo/Logo";
import { Dialog, Transition } from "@headlessui/react";
import SVG from 'react-inlinesvg'
import useMenu from "@/hooks/useMenu";
import useModal from "@/hooks/useModal";
import { twMerge } from "tailwind-merge";



const Header = () => {
  const {listMenu, pathname, handleClickMenu} = useMenu()
  const { openModal, isOpen, closeModal } = useModal()

  return (
    <header className="md:hidden px-6 py-4 bg-white">
      <Logo onClick={openModal} />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 md:hidden" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full max-w-md transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <ul>
                    {listMenu.map((menu, index) => (
                      <li
                        onClick={() => {
                          handleClickMenu(menu.url);
                          closeModal()
                        }}
                        className={twMerge(
                          "flex px-[10px] py-3 gap-4 items-center cursor-pointer",
                          "hover:bg-white hover:text-lightblue-400 hover:rounded-xl hover:font-bold",
                          pathname === menu.url &&
                            "text-lightred-500  rounded-xl font-bold"
                        )}
                        key={index}
                      >
                        <SVG src={menu.icon} />
                        <p className="text-[26px] select-none">{menu.label}</p>
                      </li>
                    ))}
                  </ul>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Header;
