// Components
import {Link} from '@/components'

// Interfaces
import { User } from '@/interfaces'

interface Props {
  user: User | null | undefined
}

const HeaderActions = ({ user }: Props): JSX.Element => {
  switch (user) {
    case undefined:
      return (
        <>
          <div className="w-16 h-6 bg-gray-400 rounded-md animate-pulse"></div>
          <div className="w-20 h-10 bg-blue-400 rounded-md animate-pulse"></div>
        </>
      )
    case null:
      return (
        <>
          <Link
            href="/auth"
            className="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900"
          >
            Sign in
          </Link>
          <Link
            href="/auth"
            className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-blue-700"
          >
            Sign up
          </Link>
        </>
      )
    default:
      return (
        <Link
          href="/app"
          className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-blue-700"
        >
          Dashboard
        </Link>
      )
  }
}

export default HeaderActions
