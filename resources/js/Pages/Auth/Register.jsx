import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import { useEffect } from 'react';
export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };
    return (
        <>
            <Head title="Register" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/images/signup-image.png" className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel value="Full Name" forInput={'name'} />
                                    <TextInput type="text" name="name" className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none" value={data.name} isFocused={true} handleChange={onHandleChange} required placeholder="Your fullname..." defaultValue="Angga React" />
                                    <InputError message={errors.name} />
                                </div>
                                <div>
                                    <InputLabel value="Email Address" forInput={'email address'} />
                                    <TextInput type="email" name="email" className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none" value={data.email} placeholder={"Yout Email Address"} handleChange={onHandleChange} required defaultValue="anggaforreact@fb.com" />
                                    <InputError message={errors.email} />
                                </div>
                                <div>
                                    <InputLabel value="Password" forInput={'password'} />
                                    <TextInput type="password" className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none" value={data.password} required handleChange={onHandleChange} name="password"  placeholder="Your Password" defaultValue="eeeeeeeeeeeeeee" />
                                    <InputError message={errors.password} />
                                </div>
                                <div>
                                    <InputLabel value="Confirm Password" forInput={'password confirmation'} />
                                    <TextInput type="password" className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none" name="password_confirmation" value={data.password_confirmation} required handleChange={onHandleChange}  placeholder="Your Password" defaultValue="eeeeeeeeeeeeeee" />
                                    <InputError message={errors.password_confirmation} />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">

                            <PrimaryButton processing={processing} variant={'primary'}>
                                <span className="text-base font-semibold">
                                  Sign Up
                                </span>
                            </PrimaryButton>

                                <Link href={route('login')}>
                                    <PrimaryButton variant={'light-outline'} >
                                <span className="text-base text-white">
                                  Sign In to My Account
                                </span>
                                    </PrimaryButton>
                                </Link>
                                {/* <button type="submit" class="rounded-2xl bg-alerange py-[13px] text-center">
                      <span class="text-base font-semibold">
                          Sign Up
                      </span>
                  </button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
