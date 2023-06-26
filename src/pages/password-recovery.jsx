import withLogoutAuth from "components/auth/withLogoutAuth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import httpService from "services/httpService";

const RecoveryPage = () => {
  const [email, setEmail] = useState("");
  const [recoveryCode, setRecoveryCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const { data } = await httpService.get("/users/password/recovery-token", {
        params: { email },
      });
      toast(data.message);
      setStep(2);
    } catch (error) {
      if (error?.response?.data?.message) {
        setError(error.response.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecoveryCodeSubmit = (e) => {
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
                className="rounded-md p-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 w-full"
              />
              <p className="min-h-[30px] my-2 pl-2 text-red-500 ">{error}</p>
              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                {isLoading ? "Loading..." : "Send Code"}
              </button>
            </form>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">Password Recovery Code</h2>
            <p className="mb-4">
              Please enter the recovery code you received via email.
            </p>
            <form onSubmit={handleRecoveryCodeSubmit}>
              <input
                type="text"
                placeholder="Enter the recovery code"
                value={recoveryCode}
                onChange={(e) => setRecoveryCode(e.target.value)}
                className="rounded-md p-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 w-full"
              />
              <p className="min-h-[30px] my-2 pl-2 text-red-500 ">{error}</p>
              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                {isLoading ? "Loading..." : "Submit"}
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
      <div className="text-black w-[92%] sm:w-[448px] mx-auto p-4 bg-white shadow-md rounded-md">
        {renderStepContent()}
      </div>
    </div>
  );
};

export default withLogoutAuth(RecoveryPage);
