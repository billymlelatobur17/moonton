import { useEffect } from 'react';
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function  Login(){
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });
    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name,event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Head title="Login" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/images/signup-image.png" className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Welcome Back
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form onSubmit={submit} className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel value="Email" forInput={'email'} />
                                    <TextInput type="email" value={data.email} isFocused={true} handleChange={onHandleChange} name="email" className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none" placeholder="Email"/>
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel value="Password" forInput={'password'} />
                                    <TextInput type="password" value={data.password} isFocused={true} handleChange={onHandleChange} name="password" className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none" placeholder="Password"/>
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <PrimaryButton processing={processing} variant={'primary'}>
                                    <span className="text-base font-semibold">
                                      Start Watching
                                    </span>
                                </PrimaryButton>
                                <Link href={route('register')}>
                                    <PrimaryButton type={"button"} variant={'light-outline'}>
                                <span className="text-base text-white">
                                    Create New Account
                                </span>
                                    </PrimaryButton>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
