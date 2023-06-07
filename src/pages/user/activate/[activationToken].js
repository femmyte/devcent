import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BsCheckLg } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { activateAccount } from "services/commonService";
import Dots from "components/loaders/Dots";

const Activate = () => {
  const router = useRouter();
  const { activationToken } = router.query;
  const [status, setStatus] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const redirectToLogin = () => {
    router.push("/signin");
  };

  useEffect(() => {
    const activate = async () => {
      try {
        const { data } = await activateAccount("/users/activate", {
          activationToken,
        });
        setStatus(true);
        setStatusMessage(
          "Your account has been successfully activated. Please, log in to continue"
        );
      } catch (error) {
        setStatus(false);
        setStatusMessage(
          `${error?.response?.data.message} Please log in to get a new link.`
        );
      } finally {
        setIsLoading(false);
      }
    };

    if (activationToken) activate();
  }, [activationToken]);

  return (
    <div className="w-full flex items-center justify-center bg-gray-500 opacity-75 min-h-screen text-center p-4">
      {isLoading ? (
        <div>
          <Dots color={"#E40084"} />
        </div>
      ) : (
        <div className="inline-block h-max bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all duration-300 sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 sm:mx-0 sm:h-10 sm:w-10">
              {status ? (
                <BsCheckLg className="text-[25px] text-green-600" />
              ) : (
                <span className="text-[30px] text-red-600">
                  <MdOutlineClose />
                </span>
              )}
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {status && "Congratulations"}
              </h3>
              <div className="mt-2">
                <p className="text-sm leading-5 text-gray-500">
                  {statusMessage}
                </p>

                <button
                  onClick={redirectToLogin}
                  className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activate;
