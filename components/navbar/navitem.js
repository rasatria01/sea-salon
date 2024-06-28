'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function NavItem({ label, path }) {
    const router = useRouter();
    return <Link
        href={path}
        className={router.pathname == path ? 'text-red-500 py-1 px-2 rounded-md font-medium uppercase' : 'uppercase font-medium text-white py-1 px-2 rounded-md hover:text-red-500 hover:bg-white'}
    >
        {label}
    </Link>
}  