import { ExternalLink } from "components/external-link/ExternalLink";
import SectionTitle from "components/section-title/SectionTitle";

const BackgroundSection: React.FC = () => {
  return (
    <div>
      <SectionTitle>Background</SectionTitle>

      <p>
        While still working in corporate finance, I started learning code
        through Harvard’s online course{" "}
        <ExternalLink
          href="https://cs50.harvard.edu/x/"
          target="_blank"
          rel="noreferrer"
        >
          CS50x
        </ExternalLink>{" "}
        Introduction to Computer Science and it just clicked for me.
        <br />
        <br />
        In pursuit of a more fulfilling line of work, I opted to change careers.
        I went on to learn the basics of web development on{" "}
        <ExternalLink
          href="https://www.freecodecamp.org/"
          target="_blank"
          rel="noreferrer"
        >
          freeCodeCamp
        </ExternalLink>
        . Eager for knowledge, I enrolled in{" "}
        <ExternalLink
          href="https://42.fr/en/homepage/"
          target="_blank"
          rel="noreferrer"
        >
          42
        </ExternalLink>
        , an innovative project-based computer science program that taught me
        self-discipline and a well-rounded set of programming skills. On the
        side, with the help of my mentor, an experienced software engineer and
        CEO at{" "}
        <ExternalLink
          href="https://byzans.com/"
          target="_blank"
          rel="noreferrer"
        >
          Byzans
        </ExternalLink>
        , I continued learning about both front-end and back-end web
        development.
      </p>
    </div>
  );
};

export default BackgroundSection;
