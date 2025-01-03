import Link from 'next/link'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

/**
 * Logo区域
 * @param {*} props
 * @returns
 */
export default function LogoBar(props) {
  const { siteInfo } = props

  return (
        <div className='w-full flex items-center'>
<Link href='/' className='md:w-48 grid justify-items-center text-md md:text-xl dark:text-gray-200 md:mb-4'>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={siteInfo?.icon?.replaceAll('width=400', 'width=280')}
        height='44px' 
        width='44px'
        alt={siteConfig('AUTHOR') + ' - ' + siteConfig('NEXT_PUBLIC_BIO')} 
        className='md:h-[120px] md:w-[120px] h-[44px] w-[44px] rounded-full md:block transition-all hover:scale-110 duration-150' 
        placeholderSrc='' />
    {siteConfig('NAV_SHOW_TITLE_TEXT', null, CONFIG) && siteConfig('TITLE')}
</Link>
        </div>
  )
}
