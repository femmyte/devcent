import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { useRouter } from 'next/router';
export default function App({ orderId, amount, email, name, phoneNumber }) {
	const router = useRouter();
	const config = {
		public_key: process.env.NEXT_PUBLIC_FLUTTER_KEY,
		// tx_ref: Date.now(),
		tx_ref: orderId,
		amount: amount,
		currency: 'NGN',
		// payment_options: 'card,mobilemoney,ussd',
		payment_options: 'card',
		customer: {
			email: email,
			phone_number: phoneNumber,
			name: name,
		},
		customizations: {
			title: 'Devcent',
			description: 'Payment for course',
			logo: '/images/logo.png',
			// logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
		},
	};

	const fwConfig = {
		...config,
		text: 'Make Payment',

		callback: (response) => {
			console.log(response);
			handleSubmitPayment(response);
			closePaymentModal(); // this will close the modal programmatically
		},
		onClose: (response) => {
			console.log(response);
			alert('Payment not successful');
		},
	};

	const handleSubmitPayment = async (result) => {
		try {
			let myHeaders = new Headers();
			myHeaders.append('Content-Type', 'application/json');
			let response = await fetch(`api/orders/${orderId}/pay`, {
				method: 'POST',
				headers: myHeaders,
				body: JSON.stringify({
					amount,
					transaction_id: result.transaction_id,
					created_at: result.created_at,
					flw_ref: result.flw_ref,
					status: result.status,
				}),
			});
			let data = await response.json();

			if (response.ok) {
				router.push('/congratulations');
			} else {
				console.error('Error making POST request:', response.status);
			}
		} catch (err) {
			console.log(err);
		}
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
