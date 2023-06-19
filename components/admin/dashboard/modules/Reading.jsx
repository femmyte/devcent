import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Reading = () => {
	return (
		<section className='mt-[32px] text-white' id='tasks'>
			<p className='font-[700] font-space text-[20px]'>
				Here are some additional resources to broaden your
				understanding. Do well to digest and understand them.
			</p>
			<p className='my-[15px] font-[700] text-[16px] leading-[26px] font-space'>
				Additional Readings From Ux Blogs
			</p>
			<ol className=''>
				<li className='mb-[18px] font-[400] text-[16px] leading-[26px] font-space list-decimal ml-[20px]'>
					Ui vs Ux Design <br />
					<Link href='https://careerfoundry.com/en/blog/ux-design/the-difference-between-ux-and-ui-design-a-laymans-guide/'>
						https://careerfoundry.com/en/blog/ux-design/the-difference-between-ux-and-ui-design-a-laymans-guide/
					</Link>
				</li>
				<li className='mb-[18px] font-[400] text-[16px] leading-[26px] font-space list-decimal ml-[20px]'>
					Inclusive designs and designing for accessibility <br />
					<Link href='https://www.nngroup.com/articles/inclusive-design/'>
						https://www.nngroup.com/articles/inclusive-design/
					</Link>{' '}
					<br />
					<Link href='https://uxdesign.cc/designing-for-accessibility-is-not-that-hard-c04cc4779d94'>
						https://uxdesign.cc/designing-for-accessibility-is-not-that-hard-c04cc4779d94
					</Link>
				</li>
			</ol>
			<p className='mt-[24px] md:mt-[70px] font-[700] text-[16px] leading-[26px] font-space'>
				List of Books
			</p>
			<ul className='mt-[15px]'>
				<li className='mb-[18px] font-[400] text-[16px] leading-[26px] font-space list-decimal ml-[20px]'>
					Design of everyday things by Don Norman
				</li>
				<li className='mb-[18px] font-[400] text-[16px] leading-[26px] font-space list-decimal ml-[20px]'>
					Universal Pribciples of Design by By William Lidwell, Jill
					Butler, and Kritina Holden
				</li>
			</ul>
		</section>
	);
};

export default Reading;
