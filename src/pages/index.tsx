import { Link, PageProps, graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Box = styled.div`
  /* background-color: red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  /* display: flex;
  width: 500px;
  justify-content: center; */
`;

const Uniform = styled.div`
  /* background-color: blue; */
  /* width: 500px; */
  /* flex-direction: column; */
  width: 350px;
`;

export default function IndexPage({ data }: PageProps<Queries.UniformsQuery>) {
  return (
    <Layout title="Welcome to Uniform Shop 🔥">
      {/* <Box>
        <Uniform> */}
      <Box className="grid">
        {data.allContentfulUniform.nodes.map((uniform) => (
          <Uniform>
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
          </Uniform>
        ))}
      </Box>
      {/* </Uniform>
      </Box> */}
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
