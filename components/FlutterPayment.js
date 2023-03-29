import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

export default function App() {
	const config = {
		// FLWPUBK-0440354d7beac1797e805aee21c81dd7-X
		public_key: process.env.NEXT_PUBLIC_FLUTTER_KEY,
		// public_key: 'FLWPUBK-0440354d7beac1797e805aee21c81dd7-X',
		tx_ref: Date.now(),
		amount: 100,
		currency: 'NGN',
		payment_options: 'card,mobilemoney,ussd',
		customer: {
			email: 'user@gmail.com',
			phone_number: '070********',
			name: 'john doe',
		},
		customizations: {
			title: 'My store',
			description: 'Payment for items in cart',
			logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
		},
	};

	const fwConfig = {
		...config,
		text: 'Make Payment',

		callback: (response) => {
			console.log(response);
			closePaymentModal(); // this will close the modal programmatically
		},
		onClose: () => {},
	};

	return (
		<div className='App'>
			<FlutterWaveButton
				{...fwConfig}
				className=' py-[10px] md:py-[16px] px-[20px] md:px-[32px] rounded-lg bg-primaryPurple text-[18px] md:text-[24px] font-dmsans font-[700]'
			/>
		</div>
	);
}
