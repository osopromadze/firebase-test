// Dependencies
import { useRouter } from 'next/dist/client/router'
import { Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'

// Components
import { Link } from '@/components'

const LanguageSwitcher = (): JSX.Element => {
  const { locale, locales, route } = useRouter()

  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-all duration-150 bg-white border border-gray-300 rounded-md shadow-sm outline-none focus:outline-none hover:text-gray-500 focus:ring focus:border-blue-300">
            <span>{locale}</span>
            <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Menu.Button>

          <Transition
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute right-0 w-32 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
            >
              <div className="py-1">
                {locales?.map((loc) => (
                  <Menu.Item key={loc}>
                    <Link
                      href={route}
                      locale={loc}
                      className={clsx(
                        'flex justify-between w-full px-4 py-2 text-sm leading-5 text-left',
                        loc === locale ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                      )}
                    >
                      {loc}
                    </Link>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default LanguageSwitcher
