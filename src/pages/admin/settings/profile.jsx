import DashboardLayout from 'components/dashboard/common/layout/Dashboard';
import ProfileImage from 'components/dashboard/common/forms/ProfileImage';
import ProfileDetails from 'components/dashboard/common/forms/ProfileDetails';
import withAdminAuth from 'components/auth/withAdminAuth';

const Profile = () => {
	return (
		<>
			<DashboardLayout>
				<ProfileImage />
				<ProfileDetails />
			</DashboardLayout>
		</>
	);
};

export default withAdminAuth(Profile);
