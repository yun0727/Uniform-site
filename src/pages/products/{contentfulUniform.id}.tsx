import { PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";

export default function ProductDetail({
  data,
}: PageProps<Queries.ProductQuery>) {
  const image = getImage(data.contentfulUniform?.preview?.gatsbyImageData!);
  return (
    <Layout title={data.contentfulUniform?.name!}>
      <GatsbyImage image={image!} alt={data.contentfulUniform?.name!} />
      <h2>${data.contentfulUniform?.price}</h2>
    </Layout>
  );
}

export const query = graphql`
  query Product($id: String) {
    contentfulUniform(id: { eq: $id }) {
      name
      price
      preview {
        gatsbyImageData(height: 450, placeholder: BLURRED)
      }
    }
  }
`;
