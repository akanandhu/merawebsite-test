import Link from 'next/link';
import React from 'react';

import Button from '@/components/buttons/Button';

import Logo from '~/images/logoHeader.svg';
import HeaderLinks from '@/components/links/HeaderLinks';

export const Header = () => {
  return (
    <div className='h-20 w-full flex flex-wrap justify-between align-middle place-items-center px-4 xl:px-40 shadow-md '>
      <div className='flex align-middle place-items-center   gap-8'>
        <Link href='/'>
          <div className='cursor-pointer '>
            <Logo width={144} height={32} className='w-36 h-8' />
          </div>
        </Link>

        <HeaderLinks />
      </div>
      <div className='flex '>
        <Button
          variant='primary'
          className=' rounded-lg font-semibold py-3 px-6 text-center'
        >
          Call us at 9999999999
        </Button>
      </div>
    </div>
  );
};
