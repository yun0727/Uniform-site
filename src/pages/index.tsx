import { Link, PageProps, graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

export default function IndexPage({ data }: PageProps<Queries.UniformsQuery>) {
  return (
    <Layout title="Welcome to Uniform Shop 🔥">
      <div className="grid">
        {data.allContentfulUniform.nodes.map((uniform) => (
          <article>
            <GatsbyImage
              image={getImage(uniform.preview?.gatsbyImageData!)!}
              alt={uniform.name!}
            />
            <Link to={`/products/${uniform.id}`}>
              <h2>{uniform.name}</h2>
              <h4>${uniform.price}</h4>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}
export const query = graphql`
  query Uniforms {
    allContentfulUniform {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 250)
        }
      }
    }
  }
`;
export const Head = () => <Seo title="Home" />;
