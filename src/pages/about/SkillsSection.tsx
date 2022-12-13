import SectionTitle from "components/section-title/SectionTitle";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

const getSkillName = (path: string): string | undefined => {
  const filename: string | undefined = path.split(/(\\|\/)/g).pop();

  return filename?.split(".")[0];
};

const SkillsSection: React.FC = () => {
  const importAll = (r: __WebpackModuleApi.RequireContext) =>
    r.keys().map((fileName: string) => ({
      slug: fileName.substring(2).replace(/\/index\.mdx$/, ""),
      module: r(fileName),
    }));

  const comfortableSkills: any = importAll(
    require.context(
      "../../../public/assets/skills_logo/comfortable",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const experimentedSkills: any = importAll(
    require.context(
      "../../../public/assets/skills_logo/experimented",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  return (
    <>
      <SectionTitle>Skills</SectionTitle>

      <p>Technologies I am comfortable with:</p>

      <SkillLogos style={{ marginBottom: "20px" }}>
        {Object.keys(comfortableSkills).map((logo, index) => {
          return (
            <div key={logo}>
              <Logo
                data-tip={getSkillName(comfortableSkills[logo].module.default)}
                src={comfortableSkills[logo].module.default}
                alt="logo"
                data-for={index}
              />
              <ReactTooltip id={`${index}`} />
            </div>
          );
        })}
      </SkillLogos>

      <p>Other technologies that I have only started experimenting with:</p>

      <SkillLogos>
        {Object.keys(experimentedSkills).map((logo, index) => {
          return (
            <div key={logo}>
              <Logo
                key={index}
                data-tip={getSkillName(experimentedSkills[logo].module.default)}
                src={experimentedSkills[logo].module.default}
                alt="logo"
                data-for={index}
              />
              <ReactTooltip id={`${index}`} />
            </div>
          );
        })}
      </SkillLogos>
    </>
  );
};

export default SkillsSection;

const SkillLogos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 5px;

  margin-top: 10px;
`;

const Logo = styled.img`
  height: 50px;

  filter: gray;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);

  transition: all 0.2s;

  &:hover {
    -webkit-filter: grayscale(0);
    filter: none;
  }
`;
