import React from "react";
import Layout from "../components/Layout";
import Editor from "../components/Editor";

function Me({
  details
}) {
  return (
    <Layout>
      <Editor details={details} />;
    </Layout>
  );
}

Me.getInitialProps = async function() {
  return {
    details: {
      id: "1",
      name: "Geno Ferollo",
      description: [
        "Current Age: 20",
        "Current Rank: #2 ",
        "Known for: #1 (from 2017 till 2020)",
        "Type: Not edible, doesn't bite",
        "Status: Senior Developer"
      ]
    }
  };
};

export default Me;
