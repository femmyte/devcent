import React, { useEffect, useState } from 'react';
import DashboardLayout from 'components/dashboard/common/layout/Dashboard';
import Certificate from '../../../../components/dashboard/common/certificate';
const Certificates = () => {
	return (
		<>
			<DashboardLayout>
				<Certificate />
			</DashboardLayout>
		</>
	);
};

export default Certificates;
