import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { useStateContext } from '../../AuthContext';

const RequireProfileUpdate = (WrappedComponent) => {
	const ProfileUpdateCheck = (props) => {
		const router = useRouter();
		// const { user } = useStateContext();
		let { activeMenu, setActiveMenu, screenSize, logout, login, user } =
			useStateContext();

		useEffect(() => {
			if (user?.firstName === 'User') {
				router.push('/user/settings/profile');
			}
		}, [user]);

		return <WrappedComponent {...props} />;
	};

	return ProfileUpdateCheck;
};

export default RequireProfileUpdate;
