import withLogoutAuth from "components/auth/withLogoutAuth";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import httpService from "services/httpService";

const RecoveryPage = () => {
  const [email, setEmail] = useState("");
  const [recoveryCode, setRecoveryCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [accessToken, setAccessToken] = useState("");

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

  const handleRecoveryCodeSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const { data } = await httpService.post(
        "/users/password/verify-recovery-token",
        {
          token: recoveryCode,
        }
      );
      toast(data.message);
      setAccessToken(data.accessToken);
      setStep(3);
    } catch (error) {
      if (error?.response?.data?.message) {
        setError(error.response.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords must match");
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await httpService.post("/users/password/reset", {
        password: newPassword,
        accessToken,
      });
      toast(data.message);
      setStep(4);
    } catch (error) {
      if (error?.response?.data?.message) {
        setError(error.response.data.message);
      }
    } finally {
      setIsLoading(false);
    }
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
                className="shadow-sm rounded-md p-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 w-full"
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
                className="shadow-sm rounded-md p-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 w-full"
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
            <form onSubmit={handlePasswordReset}>
              <input
                type="password"
                placeholder="Enter password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="shadow-sm rounded-md mb-4 p-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 w-full"
              />
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="shadow-sm rounded-md p-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 w-full"
              />
              <p className="min-h-[30px] my-2 pl-2 text-red-500 ">{error}</p>
              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                {isLoading ? "Loading..." : "Reset Password"}
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
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              <Link href="/signin">Log in</Link>
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div>
        <div className="flex gap-4 mb-6 text-white items-center justify-center px-4">
          <Link href={"/"}>
            <Image src="/images/logo.png" width={100} height={100} alt="logo" />
          </Link>

          <h1 className="text-[1.7rem]">Trainings</h1>
        </div>
        <div className="text-black w-[92%] sm:w-[448px] mx-auto p-4 bg-white shadow-md rounded-md">
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
};

export default withLogoutAuth(RecoveryPage);
