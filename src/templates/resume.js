/** @jsx jsx */
import { jsx } from "@emotion/core";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Template from "../components/Template";
import ProfessionalExperienceItem from "../components/ProfessionalExperienceItem";
import Tags from "../components/Tags";
import {
  Container,
  pageTitle,
  secondTitle,
  largeMgBottom,
  text,
  liStyle,
  wrapStyle,
  linkStyle
} from "../design";

const Resume = props => {
  const acf = props.data.wordpressPage.acf;
  return (
    <Template title="Resume">
      <Container small>
        <h2 css={pageTitle}>Resume</h2>
        <div css={largeMgBottom}>
          <p css={secondTitle}>Front End Developer</p>
          <p css={text}>
            Im from São Paulo, Brazil and Ive been working as a Frontend
            Developer for 4 years, specially with JavaScript and React. Im
            looking for new challenges, achievements and growth in my
            professional and personal life. Im an open-minded, analytical,
            proactive and respectful person. Im totally willing to learn new
            things to solve new problems and be able to build a better internet
            and reach other people with my work.
          </p>
        </div>

        <div css={largeMgBottom}>
          <p css={secondTitle}>Certificates</p>
          <ul>
            {acf.certificates.map(({ certificate }) => (
              <li key={certificate} css={liStyle}>
                <p css={text}>{certificate}</p>
              </li>
            ))}
          </ul>
        </div>

        <div css={largeMgBottom}>
          <p css={secondTitle}>Contact</p>
          <ul>
            {acf.contacts.map(({ contact }) => (
              <li key={contact} css={liStyle}>
                <p css={text}>{contact}</p>
              </li>
            ))}
          </ul>
        </div>

        <div css={largeMgBottom}>
          <p css={secondTitle}>Links</p>
          <ul>
            {acf.links.map(({ url, link }) => (
              <li key={link} css={liStyle}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  css={linkStyle}
                  href={url}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div css={largeMgBottom}>
          <p css={secondTitle}>Tech Skills</p>
          <div css={wrapStyle}>
            {acf.skills.map(({ tech_skill }, index) => (
              <Tags key={index} name={tech_skill} />
            ))}
          </div>
        </div>

        <div css={largeMgBottom}>
          <p css={secondTitle}>Professional Experience</p>
          {acf.experience.map(
            ({ company, role, period, description }, index) => (
              <ProfessionalExperienceItem
                key={index}
                company={company}
                role={role}
                period={period}
                description={description}
              />
            )
          )}
        </div>
      </Container>
    </Template>
  );
};

export default Resume;

Resume.propTypes = {
  data: PropTypes.shape({
    wordpressPage: PropTypes.shape({
      acf: PropTypes.shape({
        certificates: PropTypes.array,
        contacts: PropTypes.array,
        links: PropTypes.array,
        skills: PropTypes.array,
        experience: PropTypes.array
      })
    })
  }).isRequired
};

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      acf {
        contacts {
          contact
        }
        experience {
          company
          role
          period
          description
        }
        links {
          url
          link
        }
        skills {
          tech_skill
        }
        certificates {
          certificate
        }
      }
    }
  }
`;
