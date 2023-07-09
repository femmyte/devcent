import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import FullLoader from "components/loaders/FullLoader";
import { useFetch } from "services/hooks/fetch";
import FullError from "components/error/FullError";

import UIUX from "../../../../components/courses/UIUX";
import DataScience from "components/courses/DataScience";
import Backend from "components/courses/Backend";
import Fullstack from "components/courses/Fullstack";
import Frontend from "components/courses/Frontend";
import CyberSecurity from "components/courses/CyberSecurity";
import CloudComputing from "components/courses/CloudComputing";
import DigitalMarketing from "components/courses/DigitalMarketing";
const Index = () => {
  const [course, setCourse] = useState({});
  const router = useRouter();
  const { courseName } = router.query;

  const { data, isInitialLoading, isSuccess, isError, refetch } = useFetch(
    `/courses/${courseName}/course`,
    "get-course"
  );

  useEffect(() => {
    if (isSuccess) {
      setCourse(data.course);
    }

    refetch();
  }, [courseName, isSuccess, data, refetch]);

  const handleRoute = () => {
    router.push({
      pathname: `/courses/${courseName}/enrol`,
    });
  };

  // const encodedObject = encodeURIComponent(JSON.stringify(course));

  if (isInitialLoading) {
    return <FullLoader />;
  }
  if (isError) {
    return <FullError />;
  }

  let courseComponent;
  switch (courseName) {
    case "UIUX-Design-21197094":
      courseComponent = (
        <UIUX
          course={course}
          handleRoute={handleRoute}
          courseName={courseName}
        />
      );
      break;
    case "Data-Science-83224682":
      courseComponent = (
        <DataScience
          course={course}
          handleRoute={handleRoute}
          courseName={courseName}
        />
      );
      break;
    case "Backend-Development-14246154":
      courseComponent = (
        <Backend
          course={course}
          handleRoute={handleRoute}
          courseName={courseName}
        />
      );
      break;
    case "Full-Stack-Web-63748970":
      courseComponent = (
        <Fullstack
          course={course}
          handleRoute={handleRoute}
          courseName={courseName}
        />
      );
      break;
    case "Cyber-Security-18556101":
      courseComponent = (
        <CyberSecurity
          course={course}
          handleRoute={handleRoute}
          courseName={courseName}
        />
      );
      break;
    case "Frontend-Development-15113559":
      courseComponent = (
        <Frontend
          course={course}
          handleRoute={handleRoute}
          courseName={courseName}
        />
      );
      break;
    case "cloud-computing-11611476":
      courseComponent = (
        <CloudComputing
          course={course}
          handleRoute={handleRoute}
          courseName={courseName}
        />
      );
      break;
    case "digital-marketing-83868296":
      courseComponent = (
        <DigitalMarketing
          course={course}
          handleRoute={handleRoute}
          courseName={courseName}
        />
      );
      break;

    default:
      courseComponent = (
        <FullError
          title={"Page Not Found"}
          content={"The course you are looking for doesn't exist."}
        />
      );
  }

  return <div>{courseComponent}</div>;
};

export default Index;
