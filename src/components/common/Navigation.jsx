import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const Navigation = () => {
    return (
        <nav className>
            <ul className="hidden lg:flex space-x-10">
                <li>
                    <Menu>
                        <MenuButton className="p-2 rounded-md text-content-2 flex items-center space-x-1">
                            <span>Home</span>
                            <ChevronDownIcon className="size-4 fill-accent-2/60" />
                        </MenuButton>
                        <MenuItems anchor="bottom" className="my-4 p-1 border-content-2 border-2 rounded-xl">
                            <MenuItem>
                                <a
                                    className="block data-[focus]:bg-content-2 data-[focus]:text-bg text-content-2 p-1 rounded-lg"
                                    href="/"
                                >
                                    Apply
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a
                                    className="block data-[focus]:bg-content-2 data-[focus]:text-bg text-content-2 p-1 rounded-lg"
                                    href="/"
                                >
                                    Schedule
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a
                                    className="block data-[focus]:bg-content-2 data-[focus]:text-bg text-content-2 p-1 rounded-lg"
                                    href="/"
                                >
                                    More
                                </a>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </li>
                <li>
                    <Menu>
                        <MenuButton className="p-2 rounded-md text-content-2 flex items-center space-x-1">
                            <span>About</span>
                            <ChevronDownIcon className="size-4 fill-accent-2/60" />
                        </MenuButton>
                        <MenuItems anchor="bottom" className="my-4 p-1 border-content-2 border-2 rounded-xl">
                            <MenuItem>
                                <a
                                    className="block data-[focus]:bg-content-2 data-[focus]:text-bg text-content-2 p-1 rounded-lg"
                                    href="/about"
                                >
                                    FAQ
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a
                                    className="block data-[focus]:bg-content-2 data-[focus]:text-bg text-content-2 p-1 rounded-lg"
                                    href="/about"
                                >
                                    Sponsors
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a
                                    className="block data-[focus]:bg-content-2 data-[focus]:text-bg text-content-2 p-1 rounded-lg"
                                    href="/about"
                                >
                                    Schedule
                                </a>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </li>
                <li>
                    <div className="h-full flex items-center">
                        <a href="/blog" className="p-2 rounded-xl text-content-2">
                            Blog
                        </a>
                    </div>
                </li>
                <li>
                    <div className="h-full flex items-center">
                        <a href="/team" className="p-2 rounded-xl text-content-2">
                            Team
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
