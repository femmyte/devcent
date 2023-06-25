import React, { useState } from "react";

const RecoveryPage = () => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle email submission and sending the verification code
    setStep(2);
  };

  const handleVerificationCodeSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle verification code submission and validation
    setStep(3);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle password submission and reset
    setStep(4);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">Password Recovery</h2>
            <p className="mb-4">
              Please enter your email address to receive a recovery code.
            </p>
            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md py-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none w-full"
              />
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Send Recovery Code
              </button>
            </form>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">Verify Code</h2>
            <p className="mb-4">
              Please enter the verification code you received via email.
            </p>
            <form onSubmit={handleVerificationCodeSubmit}>
              <input
                type="text"
                placeholder="Enter the verification code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 w-full"
              />
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Verify Code
              </button>
            </form>
          </>
        );
      case 3:
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
            <p className="mb-4">Please enter your new password.</p>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 w-full"
              />
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Reset Password
              </button>
            </form>
          </>
        );
      case 4:
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Password Reset Successful
            </h2>
            <p className="text-green-600">
              Password reset successful! You can now log in with your new
              password.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen bg-black flex items-center">
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
        {renderStepContent()}
      </div>
    </div>
  );
};

export default RecoveryPage;
