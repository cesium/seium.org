import Image from "next/image";

const navigation = [
    { name: 'Schedule', href: '/schedule' },
    { name: 'Hackathon', href: '/hackathon' },
    { name: 'Challenges', href: '/challenges' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Login', href: '/login' },
]

export default function Navbar({ button, fg_color }) {
    return (
        <div className="relative z-50 flex flex-auto pt-8">
            <div className="grid w-full grid-cols-4">
                <a href="/" className="">
                    <Image src="/images/sei-logo.svg" width="50" height="40" />
                </a>
                <div className="flex flex-auto invisible col-span-3 justify-self-end xl:visible gap-x-20">
                    <div className="grid grid-cols-4 gap-x-10">
                        {navigation.map((item, i) => (
                            <a key={i}
                                className="text-white font-iregular text-opacity-40 hover:text-opacity-100"
                                href={item.href}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <a
                        href="/signup"
                        className={`transform rotate-15 -mt-5 text-xl font-ibold items-center justify-center flex h-28 w-28 text-${fg_color} bg-${button} rounded-full translate-x-0`}>
                        Join us 👋
                    </a>
                </div>
            </div>
        </div>
    );
}