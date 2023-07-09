import withStudentAuth from 'components/auth/withStudentAuth';
import DashboardLayout from 'components/dashboard/common/layout/Dashboard';
import ModuleComponent from 'components/dashboard/modules/ModuleComponent';
import React from 'react';

const ModuleOne = () => {
	return (
		<div>
			<DashboardLayout>
				<ModuleComponent />
			</DashboardLayout>
		</div>
	);
};

export default withStudentAuth(ModuleOne);
