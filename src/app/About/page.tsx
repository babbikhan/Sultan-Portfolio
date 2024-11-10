"use client"; // Add this directive at the top

import Image from 'next/image';
import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <Banner>
        <BannerImage
          src="https://skartistic.com/wp-content/uploads/elementor/thumbs/about-banner-2-qoqvjwgn218rksimndqmq1yextdqvg0hpwuq0xaq9c.png"
          alt="SK Artistic Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </Banner>

      <AboutSection>
        <LeftPanel>
          <ProfileImage>
            <Image
              src="https://skartistic.com/wp-content/uploads/2024/07/picc1.png"
              alt="Muhammad Sultan Khan"
              width={360}
              height={100}
              objectFit="cover"
            />
          </ProfileImage>
        </LeftPanel>
        <RightPanel>
          <Heading>
            Welcome <span>Sk Artistic</span> Family
          </Heading>
          <Paragraph>
            My name is Muhammad Sultan Khan and I’m a Web Developer at SK Artistic. We excel in delivering top-notch Ui/Ux and Coding services that breathe life into your brand. Our expertise spans a wide array of programming disciplines, including deployment, debugging, principles of figma and more. We are passionate about combining aesthetic appeal with functional design to create visuals that not only attract but also communicate your brand’s message effectively.
          </Paragraph>
          <Paragraph>
            UI/UX design for SK Artistic involves crafting visually stunning and intuitively functional digital experiences that reflect the company’s creative spirit. The UI (User Interface) design focuses on aesthetic elements, ensuring the visual aspects are engaging and align with SK Artistic’s unique brand identity.
          </Paragraph>
          <Paragraph>
            On the other hand, UX (User Experience) design prioritizes ease of use and overall satisfaction. It involves structuring the website or application to allow seamless navigation, ensuring that users can effortlessly interact with and appreciate SK Artistic’s offerings.
          </Paragraph>
        </RightPanel>
      </AboutSection>

      {/* New Feature Section */}
      <FeatureSection>
        <TextContent>
          <SectionHeading>
            Certified From <span>NS Training Pvt Ltd</span>
          </SectionHeading>
          <Paragraph>
            I have completed my graphic designing course from NS Training Pvt Ltd, a premier corporate e-learning partner hosting a myriad of skill-focused courses. From graphic designing to digital marketing, the curriculum is tailored to meet the demands of today’s corporate landscape.
          </Paragraph>
        </TextContent>
        <ImageContent>
          <Image
            src="https://skartistic.com/wp-content/uploads/2024/05/ns.jpeg"
            alt="Artistic Journey Image"
            width={450} /* Updated width */
            height={350} /* Updated height */
            objectFit="cover"
          />
        </ImageContent>
      </FeatureSection>

      {/* Education Section */}
      <EducationSection>
        <EducationImageContent>
          <Image
            src="https://skartistic.com/wp-content/uploads/2024/05/about-edu-banner-1.png"
            alt="Education Image"
            width={350}
            height={350}
            objectFit="cover"
          />
        </EducationImageContent>
        <EducationTextContent>
          <SectionHeading>
            Education <span>A</span> Levels
          </SectionHeading>
          <Paragraph>
            I completed my A Levels as a Private Candidate a significant milestone in my academic journey that has equipped me with a strong foundation across various subjects such as computer science, english etc. A Levels has not only prepared me for future academic pursuits but also build a sense of confidence and achievement that will drive me toward my long-term goals.
          </Paragraph>
          <Paragraph>
            A Levels are advanced subject-based qualifications typically taken by students aged 16-18 in the UK and internationally. They are studied over two years and assessed through final exams, with students usually selecting 3 to 4 subjects. A Levels are widely recognized for university admissions, offering flexibility and specialization in specific fields.
          </Paragraph>
        </EducationTextContent>
      </EducationSection>
    </Container>
  );
}

// Original Section Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin: 0 auto;
  width: 100%;
  max-width: 1520px;
`;

const Banner = styled.div`
  width: 100%;
  height: 560px;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  max-width: 1520px;
  margin-top: 0;
  overflow: hidden;

  /* Mobile Styles */
  @media (max-width: 768px) {
    height: 190px; /* Adjust banner height on mobile */
    background-position: center top; /* Ensure the background looks good on mobile */
  }
`;

const BannerImage = styled(Image)`
  z-index: 1;
`;

const AboutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #444;
  max-width: 1520px;
  padding: 10px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: #2d2d2d;
  padding-bottom: 32px;
  padding-top: 20px;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
     border-radius: 100px;
  }
`;

const ProfileImage = styled.div`
  overflow: hidden;
  transform: scale(1.1);
  margin-top: -25px;

  @media (max-width: 768px) {
    padding-left: 20px;
    transform: scale(0.8);
    margin-top: -140px;
    margin-bottom: -95px;
    flex: 1;
  }
`;

const RightPanel = styled.div`
  flex: 2;
  padding-left: 50px;

  @media (max-width: 768px) {
    padding-left: 30px;
    padding-right: 10px;
    flex: 1;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #fff;
  margin-top: 20px;

  span {
    color: #C9F31D;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding-left: -10px;
    padding-right: 10px;
  }
`;

const Paragraph = styled.p`
  margin-top: 30px;
  font-size: 1.2rem;
  line-height: 1.6;
  padding-right: 50px;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-right: 20px;
  }
`;

/* New Feature Section Styles */
const FeatureSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1a1a1a;
  max-width: 1520px;
  padding: 25px;
  margin-top: -30px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
`;

const TextContent = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    padding-right: 10;
    padding-top: 10px;
  }
`;

const SectionHeading = styled.h2`
  font-size: 2.1rem;
  color: #fff;

  span {
    color: #C9F31D;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-left: 10px;
    padding-right: 6px;
  }
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    margin-right: 0;
    padding-bottom: 10px;
    order: -1;
  }

  img {
    border-radius: 2%;
    object-fit: cover;
    width: 100%;
    max-width: 450px;
    padding-top: 20px;
  }
`;

/* Education Section Styles */
const EducationSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #444;
  max-width: 1520px;
  margin: 0 auto;
  padding: 30px;
  margin-top: -20px;
  margin-bottom: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const EducationImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;

  img {
    border-radius: 5%;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const EducationTextContent = styled.div`
  flex: 2;
  padding-right: 50px;
  color: #fff;

  @media (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

