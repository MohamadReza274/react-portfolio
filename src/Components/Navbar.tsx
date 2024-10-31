import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { MenuRightIcon } from "../icons";

interface NavItems {
  id: number;
  name: string;
  href: string;
  current: boolean;
}

const navigation = [
  { id: 1, name: "Home", href: "/", current: true },
  { id: 2, name: "About", href: "#about", current: false },
  { id: 3, name: "Resume", href: "#resume", current: false },
  { id: 4, name: "Services", href: "#services", current: false },
  { id: 5, name: "Skills", href: "#skills", current: false },
  { id: 6, name: "Projects", href: "#projects", current: false },
  { id: 7, name: "Contact", href: "#contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState<NavItems>(navigation[0]);
  return (
    <Disclosure as="nav" className="bg-transparent shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <h2 className="text-lg font-semibold">M.Reza</h2>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {navigation.map((item) => (
                    <a
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      href={item.href}
                      className={classNames(
                        item.id === selectedItem.id
                          ? "border-indigo-500 text-gray-200"
                          : "border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-300",
                        "inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium "
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuRightIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </DisclosureButton>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-4 flex-shrink-0">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://lh3.googleusercontent.com/a/ACg8ocIcAt2mZ5_-KNLlI2hZvowXH9snhUvjVBjNiBNUGsAwHQrRnUo=s96-c-rg-br100"
                        alt=""
                      />
                    </MenuButton>
                  </div>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}

              {navigation.map((item) => (
                <DisclosureButton
                  key={item.id}
                  as="a"
                  onClick={() => setSelectedItem(item)}
                  href={item.href}
                  className={classNames(
                    item.id === selectedItem.id
                      ? "bg-gray-600 text-gray-200 border-indigo-500"
                      : "border-transparent text-gray-400 hover:bg-gray-500 hover:border-gray-400 hover:text-gray-800",
                    "block border-l-4 py-2 pl-3 pr-4 text-base font-medium "
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
