import React from "react";
import Layout from "../components/Layout";
import Editor from "../components/Editor";

function Index({ details }) {
  return (
    <Layout>
      <Editor details={details} />;
    </Layout>
  );
}

Index.getInitialProps = async function () {
  return {
    details: {
      id: "1",
      name: "Geno Ferollo",
      description: [
        "Current Age: 15",
        "Current Rank: #5 (Royal Maids) ",
        "Known for: #1 (from 2017 till 2020)",
        "Type: Not edible, doesn't bite",
        "Status: Middle Developer",
      ],
    },
  };
};

export default Index;
