import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { useRouter } from 'next/router';
export default function App({ orderId, amount, email, name, phoneNumber }) {
	const router = useRouter();
	const config = {
		public_key: process.env.NEXT_PUBLIC_FLUTTER_KEY,
		tx_ref: Date.now(),
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
			description: 'Payment for items in cart',
			logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
		},
	};

	const fwConfig = {
		...config,
		text: 'Make Payment',

		callback: (response) => {
			console.log(response);
			handleSubmitPayment(response);
			closePaymentModal(); // this will close the modal programmatically
			router.push('/congratulations');
		},
		onClose: (response) => {
			console.log(response);
		},
	};

	const handleSubmitPayment = async (response) => {
		try {
			let myHeaders = new Headers();
			myHeaders.append('Content-Type', 'application/json');
			let response = await fetch(`api/orders/${orderId}/pay`, {
				method: 'POST',
				headers: myHeaders,
				body: JSON.stringify({
					amount: response,
					transaction_id: response,
					created_at: response,
					flw_ref: response,
					status: 'successful',
				}),
			});
			let data = await response.json();

			console.log(data);
			if (response.ok) {
				setState({});
				Array.from(document.querySelectorAll('input')).forEach(
					(input) => (input.value = '')
				);
				setClicked(false);
				router.replace('/orderPayment');
				router.push({
					pathname: '/orderPayment',
					query: { orderId: data.orderId },
				});
			} else {
				console.error('Error making POST request:', response.status);
				// handleFormErrorAlert(data.error);
				setClicked(false);
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
