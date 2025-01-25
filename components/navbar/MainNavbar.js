"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { styles } from '../utilities/styles/GlobalStyles';
import Image from 'next/image';

const MainNavbar = () => {

    const pathName = usePathname();

    const links = [
        {
            id: 1,
            href: "/",
            name: "Home"
        },
        {
            id: 2,
            href: "/about",
            name: "About Me"
        },
        {
            id: 3,
            href: "/myservices",
            name: "My Services"
        },
        {
            id: 4,
            href: "/vlogs",
            name: "Vlogs"
        },
        {
            id: 5,
            href: "/contact",
            name: "My Contact"
        },
    ]

    return (
        <div className='flex flex-row items-center justify-between w-full'>
            <Link
                href="/"
            // style={{
            //     color: pathName == "/" ? "#ffffff" : "#000000"
            // }}
            >
                <Image
                    src={"/assets/vortexLogo.jpg"}
                    height={50}
                    width={50}
                    alt='*'
                    className='rounded-full'
                />
            </Link>
            <div className='flex flex-row items-center gap-4'>
                {
                    links.map((item) => {
                        return (
                            <div key={item.id}>
                                <Link
                                    href={item.href}
                                    style={{
                                        // ...styles.btnBlinking,
                                        color: pathName == item.href ? "red" : "#000000",
                                        borderBottom: pathName == item.href ? "2px solid red" : "none",
                                        paddingBottom: pathName == item.href ? "5px" : "none",
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MainNavbar
