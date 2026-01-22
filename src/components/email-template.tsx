import * as React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface EmailTemplateProps {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  projectType: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  phone,
  companyName,
  projectType,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New Lead from {fullName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Heading style={h1}>New Project Inquiry</Heading>
          <Hr style={hr} />
          <Text style={paragraph}>
            <strong>Full Name:</strong> {fullName}
          </Text>
          <Text style={paragraph}>
            <strong>Email:</strong> {email}
          </Text>
          <Text style={paragraph}>
            <strong>Phone:</strong> {phone}
          </Text>
          <Text style={paragraph}>
            <strong>Company:</strong> {companyName}
          </Text>
          <Text style={paragraph}>
            <strong>Project Type:</strong> {projectType}
          </Text>
          <Hr style={hr} />
          <Text style={paragraph}>
            <strong>Message:</strong>
          </Text>
          <Text style={messageBox}>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '30px 0',
};

const paragraph = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const messageBox = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
  backgroundColor: '#f9f9f9',
  padding: '12px',
  borderRadius: '4px',
  border: '1px solid #eee',
};
