import Image from "next/image";

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { name: 'Schedule', href: '/schedule' },
    { name: 'Hackathon', href: '/hackathon' },
    // { name: 'Team', href: '/team' },
    { name: 'Challenges', href: '/challenges' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Login', href: '/login' },
]

export default function Navbar(props) {
    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className={`spacing pt-14 pb-4 ${open ? `lg:bg-${props.bgColor} bg-primary` : "bg-" + props.bgColor}`}>
                        <div className="flex items-center justify-between h-16">
                            <div className="flex flex-auto z-50 relative">
                                <div className="grid grid-cols-4 w-full">
                                    <a href="/" className="">
                                        <Image src="/images/sei-logo.svg" width="50" height="40" />
                                    </a>
                                    <div className="justify-self-end col-span-3 hidden lg:block">
                                        <div className="flex flex-auto gap-x-20">
                                            <div className="grid grid-cols-3 gap-x-20 gap-y-6 xl:gap-y-0">
                                                {navigation.map((item, i) => (
                                                    <a key={i}
                                                        className="font-iregular text-sm text-white text-opacity-40 hover:text-opacity-100"
                                                        href={item.href}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                            <a
                                                href=""
                                                className={`hidden transform rotate-15 -mt-5 text-xl font-ibold items-center justify-center xl:flex h-28 w-28 text-${props.fgColor} bg-${props.button} rounded-full translate-x-0`}>
                                                Join us 👋
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex lg:hidden z-50 relative">
                                <Disclosure.Button className="inline-flex items-center justify-center text-white w-6 h-6">
                                    {open ? (
                                        <FontAwesomeIcon icon={faTimes} />
                                    ) : (
                                        <FontAwesomeIcon icon={faBars} />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden bg-primary">
                        <div className="px-2 pt-12 object-cover min-h-screen z-50 relative">
                            {navigation.map((item, i) => (
                                <Disclosure.Button
                                    as="a"
                                    href={item.href}
                                    className="text-white hover:text-quinary block text-center py-6 rounded-md text-3xl font-ibold"
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                    {open ? (
                        < div className="hidden lg:block">
                            {props.children}
                        </div>
                    ) : (
                        props.children
                    )}
                </>
            )
            }


        </Disclosure >
    );
}