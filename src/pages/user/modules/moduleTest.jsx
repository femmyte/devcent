import ModuleTop from 'components/dashboard/modules/ModuleTop';
import DashboardLayout from 'components/dashboard/common/layout/Dashboard';

import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import withStudentAuth from 'components/auth/withStudentAuth';

const ModuleTest = () => {
	return (
		<div>
			<DashboardLayout>
				<ModuleTop />
				<div className='px-[20px] md:px-0 md:pl-[45px] text-white'>
					<section className=''>
						<p className='font-[700] font-space text-[20px] text-white my-[30px]'>
							Welcome to module 1 - introduction to UiUx knowledge
							test. Read the instructions below carefully and
							click on proceed to start your test
						</p>
						<p className='mt-[24px] md:mt-[70px] font-[700] text-[16px] leading-[26px] font-space'>
							Instructions
						</p>
						<ul className='mt-[15px]'>
							<li className='mb-[18px] font-[400] text-[16px] leading-[26px] font-space list-disc ml-[20px]'>
								Create a google document with the title “Task
								one-My understanding of UiUx”.
							</li>
							<li className='mb-[18px] font-[400] text-[16px] leading-[26px] font-space list-disc ml-[20px]'>
								Explain what you learnt in module one form your
								liv virtual classes, your readings and personal
								understanding.
							</li>
							<li className='mb-[18px] font-[400] text-[16px] leading-[26px] font-space list-disc ml-[20px]'>
								Click on proceed to continue to your assessment.
							</li>
						</ul>
						<div className='flex text-[#3776d4] text-[16px] font-space font-[700] items-center gap-x-3'>
							{' '}
							<p className=''> Take test now</p>
							<IoIosArrowForward />
						</div>
					</section>
				</div>
			</DashboardLayout>
		</div>
	);
};

export default withStudentAuth(ModuleTest);
