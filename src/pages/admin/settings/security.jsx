import React, { useState } from 'react';
import DashboardLayout from 'components/dashboard/common/layout/Dashboard';
import SecurityForm from 'components/dashboard/common/forms/SecurityForm';

const SecuritySettings = () => {
	return (
		<>
			<DashboardLayout>
				<SecurityForm />
			</DashboardLayout>
		</>
	);
};

export default SecuritySettings;
