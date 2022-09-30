import React, { useState } from "react";

import { useFetchSingle } from "../hooks/useFetchSingle";
import Message from "../components/Message";
import Loader from "../components/Loader";
import RepoCardDetails from "../components/RepoCardDetails";
import Header from "../components/Header";

const DetailsPage = () => {
  const { data, loading, id, error } = useFetchSingle();

  if (error) {
    return (
      <>
        <Header text="Error" />
        <Message severity="error" variant="filled" children={error.message} />
      </>
    );
  }

  return loading ? (
    <>
      <Header text="Please wait while loading..." />
      <Loader color="secondary" size="5rem" />
    </>
  ) : (
    <>
      <Header text="Details" />
      <RepoCardDetails
        image={data.owner.avatar_url}
        owner={data.owner.login}
        fullName={data.full_name}
        name={data.name}
        language={data.language}
        sourceCode={data.html_url}
        id={data.id}
        description={data.description}
      />
    </>
  );
};

export default DetailsPage;
