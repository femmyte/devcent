import DashboardLayout from 'components/dashboard/common/layout/Dashboard';
import ProfileImage from 'components/dashboard/common/forms/ProfileImage';
import ProfileDetails from 'components/dashboard/common/forms/ProfileDetails';
import withStudentAuth from 'components/auth/withStudentAuth';

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

export default withStudentAuth(Profile);
