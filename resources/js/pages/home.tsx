import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react'

export default function Home() {
    const { props } = usePage<SharedData>();
    const auth = props.auth;

    return (<>{auth.user ? <>Welcome, {auth.user.name}!</> : <>Home</>}</>)
}