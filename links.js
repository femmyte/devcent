import { AiFillHome } from 'react-icons/ai'
import { ImUsers } from 'react-icons/im'
import { MdCategory } from 'react-icons/md'
import { HiOutlineUserGroup } from 'react-icons/hi'

export const links = [
  {
    title: 'Overview',
    links: [
      {
        name: 'overview',
        icon: <AiFillHome />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'manage-users',
        icon: <HiOutlineUserGroup />,
      },
    ],
  },
]
