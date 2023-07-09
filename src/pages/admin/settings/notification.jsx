import React, { useEffect, useState } from 'react';
import DashboardLayout from 'components/dashboard/common/layout/Dashboard';
import Notification from 'components/dashboard/common/Notification/';

const NotificationSettings = () => {
	return (
		<>
			<DashboardLayout>
				<Notification />
			</DashboardLayout>
		</>
	);
};

export default NotificationSettings;
