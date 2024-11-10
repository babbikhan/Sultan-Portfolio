"use client"; // Add this directive at the top

import styled from 'styled-components';
import Image from 'next/image';

export default function Contact() {
  return (
    <ContactContainer>
      <Banner>
        <BannerImage
          src="https://skartistic.com/wp-content/uploads/2024/05/contact.png" 
          alt="Contact Banner"
          layout="fill"
          objectFit="cover"
        />
      </Banner>

      <Content>
        <LeftPanel>
          <h2>Get In Touch</h2>
          <Title>
            Let’s Talk For your <span>Projects</span>
          </Title>
          <p>
            If you have any query or to place any order kindly fill out the contact form with all information required, and we will get back to you soon.
          </p>
          
          <MainInformation>
            <h3>Main Information</h3>
            <ContactDetail>
              <img src="https://imgs.search.brave.com/578mJvK0OklB6wuWM-_EvYsTeUO7c1hldIv2nRxsa5w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni83MzIvNzMyMjAw/LnBuZz9zZW10PWFp/c19oeWJyaWQ" alt="email" />
              <p>info@skartistic.com</p>
            </ContactDetail>
            <ContactDetail>
              <img src="https://imgs.search.brave.com/RSOZmwO8xNdqAxucL1pQ-feaK34hv23rPf9o38qWW2Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8zNTM2LzM1MzY0/NDUucG5nP3NlbXQ9/YWlzX2h5YnJpZA" alt="phone" />
              <p>+92 3367722249</p>
            </ContactDetail>
          </MainInformation>

          <SocialSection>
            <h3>Follow Me On Social Platforms</h3>
            <SocialIcons>
              {/* Add your social media icons */}
              <a href="#"><img src="https://imgs.search.brave.com/RSOZmwO8xNdqAxucL1pQ-feaK34hv23rPf9o38qWW2Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8zNTM2LzM1MzY0/NDUucG5nP3NlbXQ9/YWlzX2h5YnJpZA" alt="WhatsApp" /></a>
              <a href="#"><img src="https://imgs.search.brave.com/YsxhzdvxFhX4goBkMq3V-OTuHwJNiAdU6ICrjNgZuzI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8yMTExLzIxMTE0/NjMucG5nP3NlbXQ9/YWlzX2h5YnJpZA" alt="Instagram" /></a>
              <a href="#"><img src="https://imgs.search.brave.com/HwBKUqPGtecnYbiLFXj-JV0Pov1oIHbj5fUQmgOy0Bw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8yNTA0LzI1MDQ5/MDMucG5nP3NlbXQ9/YWlzX2h5YnJpZA" alt="Facebook" /></a>
              {/* Add more icons as needed */}
            </SocialIcons>
          </SocialSection>
        </LeftPanel>

        <RightPanel>
          <Form>
            <InputRow>
              <InputWrapper>
                <label>First Name</label>
                <input type="text" placeholder="First Name" />
              </InputWrapper>
              <InputWrapper>
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" />
              </InputWrapper>
            </InputRow>

            <InputWrapper>
              <label>Email *</label>
              <input type="email" placeholder="Email Address" />
            </InputWrapper>

            <InputWrapper>
              <label>Subject</label>
              <input type="text" placeholder="Subject" />
            </InputWrapper>

            <InputWrapper>
              <label>Your Message *</label>
              <textarea placeholder="Your Message"></textarea>
            </InputWrapper>

            <SubmitButton type="submit">Submit Form</SubmitButton>
          </Form>
        </RightPanel>
      </Content>
    </ContactContainer>
  );
}

// Styled Components
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column; /* Change to column to stack banner and content */
  padding:10px;
  background-color: #FFFFF;
  color: #fff;
`;

const Banner = styled.div`
  width: 100%;
  max-width: 1370px; /* Set a max width for the banner */
  height: 580px; /* Adjust height as needed */
  position: relative;
  margin: 0 auto; /* Center the banner horizontally */
  padding: 0 20px; /* Add padding to the left and right */

  @media (max-width: 768px) {
    height: 180px; /* Reduce the height on mobile screens */
    width:410px;
    Margin-Top:-10px; /* Adjust the padding for mobile */
  }
`;

const BannerImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  background-color: #1a1a1a;
  max-width: 1370px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack panels for small screens */
    padding: 20px;
  }
`;

const LeftPanel = styled.div`
  flex: 1;
  padding: 20px;

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    padding:10px;
    text-align: center; /* Center text on small screens */
    font-size: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;

  span {
    color: #C8F21D;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Make the title smaller for mobile */
  }
`;

const MainInformation = styled.div`
  margin-top: 0px;

  h3 {
    margin-bottom: 0px;
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -20px;

  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  p {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 10px;
  }
`;

const SocialSection = styled.div`
  margin-top: 25px;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 12px;

  a {
    img {
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: 768px) {
    justify-content: center; /* Center social icons on small screens */
  }
`;

const RightPanel = styled.div`
  flex: 2;
  padding: 30px;

  @media (max-width: 768px) {
    padding: 15px; /* Adjust padding for smaller screens */
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack inputs on mobile */
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  label {
    font-size: 1rem;
    margin-bottom: 8px;
  }

  input,
  textarea {
    padding: 10px;
    border-radius: 7px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }

  textarea {
    resize: none;
  }
`;

const SubmitButton = styled.button`
  background-color: #c8f21d;
  color: #131313;
  border: none;
  padding: 10px;
  border-radius: 7px;
  cursor: pointer;
  font-size: 1.0rem;

  &:hover {
    background-color: black;
    color: #FFFFFF;
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width button on small screens */
  }
`;
