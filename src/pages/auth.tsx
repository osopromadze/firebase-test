// Dependencies
import { NextPage, GetServerSideProps } from 'next'
import Image from 'next/image'
import { useI18n, I18nProps } from 'next-rosetta'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'

// Components
import { Link, LanguageSwitcher } from '@/components'

// Interfaces
import { Locale } from 'i18n'

const Login: NextPage = () => {
  const { t } = useI18n<Locale>()

  return (
    <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="absolute z-50 top-4 right-4">
        <LanguageSwitcher />
      </div>

      <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
        <Image src="/logo.svg" alt="Notes" width={140} height={56} />
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
          {t('auth.title')}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST" autoComplete="off">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t('auth.form.email')}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                {t('auth.form.password')}
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="remember_me" className="block ml-2 text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="/" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {t('auth.form.button.label')}
              </button>

              <button
                type="button"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {t('auth.form.button.create.label')}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-500 bg-white">{t('auth.continue')}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <span className="sr-only">{t('auth.social.google')}</span>
                  <FcGoogle className="w-5 h-5" />
                </button>
              </div>

              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <span className="sr-only">{t('auth.social.github')}</span>
                  <AiOutlineGithub className="w-5 h-5 text-social-github" />
                </button>
              </div>

              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <span className="sr-only">{t('auth.social.twitter')}</span>
                  <AiOutlineTwitter className="w-5 h-5 text-social-twitter" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  // return (
  //   <>
  //     <section className="flex flex-col items-center h-screen bg-gray-100 md:flex-row">
  //       <div className="absolute z-50 top-4 right-4">
  //         <Menu>
  //           {({ open }) => (
  //             <>
  //               <Menu.Button className="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-all duration-150 bg-white border border-gray-300 rounded-md shadow-sm outline-none focus:outline-none hover:text-gray-500 focus:ring focus:border-blue-300">
  //                 <span>{locale}</span>
  //                 <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
  //                   <path
  //                     fillRule="evenodd"
  //                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
  //                     clipRule="evenodd"
  //                   />
  //                 </svg>
  //               </Menu.Button>

  //               <Transition
  //                 show={open}
  //                 enter="transition ease-out duration-100"
  //                 enterFrom="transform opacity-0 scale-95"
  //                 enterTo="transform opacity-100 scale-100"
  //                 leave="transition ease-in duration-75"
  //                 leaveFrom="transform opacity-100 scale-100"
  //                 leaveTo="transform opacity-0 scale-95"
  //               >
  //                 <Menu.Items
  //                   static
  //                   className="absolute right-0 w-32 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
  //                 >
  //                   <div className="py-1">
  //                     {locales?.map((loc) => (
  //                       <Menu.Item key={loc}>
  //                         <Link
  //                           href={route}
  //                           locale={loc}
  //                           className={clsx(
  //                             'flex justify-between w-full px-4 py-2 text-sm leading-5 text-left',
  //                             loc === locale ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
  //                           )}
  //                         >
  //                           {loc}
  //                         </Link>
  //                       </Menu.Item>
  //                     ))}
  //                   </div>
  //                 </Menu.Items>
  //               </Transition>
  //             </>
  //           )}
  //         </Menu>
  //       </div>
  //       <div className="container mx-auto">
  //         <div className="flex justify-center px-2 py-6">
  //           <div className="flex w-full bg-white rounded-lg xl:w-3/4 lg:w-11/12 lg:shadow-xl">
  //             <div className="relative hidden w-full h-auto bg-cover border-r rounded-l-lg bg-blue-1300 lg:block lg:w-5/12">
  //               <div className="relative z-10 mx-12 my-6 text-left">
  //                 <div className="w-48 h-48 mx-auto">
  //                   <Lottie animationData={notesAnimation} />
  //                 </div>

  //                 <p className="w-full mb-8 text-base leading-relaxed text-gray-900 sm:md:w-3/3 lg:text-1xl">
  //                   {t('auth.description')}
  //                 </p>
  //               </div>
  //             </div>
  //             <div className="w-full px-8 py-24 border-gray-100 rounded-lg bg-blue-1300 lg:w-7/12 lg:px-20 lg:py-8 lg:rounded-l-none">
  //               <div className="relative">
  //                 <h2 className="mb-8 text-2xl font-semibold tracking-tighter text-center text-blue-700 sm:text-3xl">
  //                   {t('auth.title')}
  //                 </h2>

  //                 {!isMagicLink && (
  //                   <div className="flex flex-col max-w-xs mx-auto space-y-6">
  //                     <button
  //                       type="button"
  //                       id="google-sign-in"
  //                       className="relative text-center text-white align-middle transition-all duration-200 outline-none sm:flex-1 h-50 rounded-1 bg-social-google whitespace-nowrap focus:outline-none focus:ring focus:border-blue-300"
  //                       aria-label={t('auth.social.google')}
  //                       onClick={loginWithGoogle}
  //                     >
  //                       <div className="w-full h-full border border-transparent">
  //                         <div className="float-left bg-white p-15 rounded-1">
  //                           <FcGoogle className="w-18 h-18" />
  //                         </div>
  //                         <span className="mx-2 font-medium tracking-tight align-top font-roboto leading-48">
  //                           <span>{t('auth.social.google')}</span>
  //                         </span>
  //                       </div>
  //                     </button>
  //                     <button
  //                       type="button"
  //                       id="github-sign-in"
  //                       className="relative text-center text-white align-middle transition-all duration-200 outline-none h-50 rounded-1 bg-social-github whitespace-nowrap focus:outline-none focus:ring focus:border-blue-300"
  //                       aria-label={t('auth.social.github')}
  //                       onClick={loginWithGitHub}
  //                     >
  //                       <div className="w-full h-full border border-transparent">
  //                         <div className="float-left text-black bg-white p-15 rounded-1">
  //                           <AiOutlineGithub className="w-18 h-18" />
  //                         </div>
  //                         <span className="mx-2 font-medium tracking-tight align-top font-roboto leading-48">
  //                           <span>{t('auth.social.github')}</span>
  //                         </span>
  //                       </div>
  //                     </button>
  //                     <button
  //                       type="button"
  //                       id="email-sign-in"
  //                       className="relative text-center text-white align-middle transition-all duration-200 outline-none h-50 rounded-1 bg-social-gmail whitespace-nowrap focus:outline-none focus:ring focus:border-blue-300"
  //                       aria-label={t('auth.social.email')}
  //                       onClick={() => setMagicLink(true)}
  //                     >
  //                       <div className="w-full h-full border border-transparent">
  //                         <div className="float-left text-black bg-white p-15 rounded-1">
  //                           <AiOutlineMail className="w-18 h-18" />
  //                         </div>
  //                         <span className="mx-2 font-medium tracking-tight align-top font-roboto leading-48">
  //                           <span>{t('auth.social.email')}</span>
  //                         </span>
  //                       </div>
  //                     </button>
  //                   </div>
  //                 )}

  //                 {isMagicLink && <SignInForm setMagicLink={setMagicLink} />}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // )
}

export const getServerSideProps: GetServerSideProps<I18nProps<Locale>> = async (context) => {
  const locale = context.locale || context.defaultLocale
  const { table = {} } = await import(`i18n/${locale}`)

  return { props: { table } }
}

export default Login
