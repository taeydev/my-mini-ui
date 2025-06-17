import React, { useState } from 'react';
import type { Meta } from "@storybook/react";
import styled from '@emotion/styled';
import Button from "@/components/Button/Button";
import TextField from "@/components/TextField/TextField";
import Card from "@/components/Card/Card";
import Menu from "@/components/Menu/Menu";
import Slider from "@/components/Slider/Slider";
import ImageButton from "@/components/Button/ImageButton";
import Tooltip from "@/components/Tooltip";
import Carousel from "@/components/Carousel/Carousel";
import Dropdown from "@/components/Dropdown/Dropdown";
import { ModalContainer, ModalHeader, ModalTitle, ModalContent, ModalFooter, CloseButton } from "@/components/Modal/Modal.styles";
import ShareIcon from "@/icons/ShareIcon";
import DeleteIcon from "@/icons/DeleteIcon";
import CloseIcon from "@/icons/CloseIcon";
import { colors } from "@/styles/designSystem";

const meta = {
  title: "Design System",
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F8F9FA' },
      ],
    },
  },
} satisfies Meta;

export default meta;

const Container = styled.div`
  padding: 2rem 3rem;
  max-width: 1200px;
  margin: 0 auto;
  background: #fafafa;
  min-height: 100vh;
`;

const Section = styled.section`
  margin-bottom: 3.5rem;
`;

const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ComponentCard = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${colors.gray[600]};
  font-weight: 600;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: ${colors.gray[600]};
  font-weight: 500;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${colors.gray[200]};
  }
`;

const ComponentTitle = styled.h3`
  font-size: 0.875rem;
  color: ${colors.gray[500]};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  color: ${colors.gray[500]};
  margin-bottom: 2.5rem;
  font-size: 1rem;
  line-height: 1.6;
`;

export const DesignSystemOverview = () => {
  const [textField1, setTextField1] = useState("");
  const [textField2, setTextField2] = useState("");
  const [textField3, setTextField3] = useState("");
  const [sliderValue1, setSliderValue1] = useState(50);
  const [sliderValue2, setSliderValue2] = useState(2);
  const [dropdownValue1, setDropdownValue1] = useState("");
  const [dropdownValue2, setDropdownValue2] = useState("");
  const [dropdownValue3, setDropdownValue3] = useState("");

  const dropdownOptions = [
    { value: "option1", label: "옵션 1" },
    { value: "option2", label: "옵션 2" },
    { value: "option3", label: "옵션 3" },
    { value: "option4", label: "옵션 4" },
    { value: "option5", label: "옵션 5" },
  ];

  const sampleSlides = [
    {
      imageSrc: "/images/sample_image1.jpg",
      imageAlt: "Sample Image 1"
    },
    {
      imageSrc: "/images/sample_image2.jpg", 
      imageAlt: "Sample Image 2"
    },
    {
      imageSrc: "/images/sample_image3.jpg",
      imageAlt: "Sample Image 3"
    }
  ];

  const normalSlides = [
    {
      imageSrc: "/images/slide1.jpg",
      imageAlt: "Slide 1"
    },
    {
      imageSrc: "/images/slide2.jpg",
      imageAlt: "Slide 2"
    },
    {
      imageSrc: "/images/slide3.jpg",
      imageAlt: "Slide 3"
    },
    {
      imageSrc: "/images/slide4.jpg",
      imageAlt: "Slide 4"
    }
  ];

  const stepIndicators = {
    1: {
      name: "Lv.1",
      render: (
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px'
        }}>
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #E3F2FD, #90CAF9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            color: '#1565C0',
            fontWeight: 600
          }}>1</div>
        </div>
      )
    },
    2: {
      name: "Lv.3",
      render: (
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px'
        }}>
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #E8F5E9, #A5D6A7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            color: '#2E7D32',
            fontWeight: 600
          }}>3</div>
        </div>
      )
    },
    3: {
      name: "Lv.5",
      render: (
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px'
        }}>
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FFF3E0, #FFCC80)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            color: '#E65100',
            fontWeight: 600
          }}>5</div>
        </div>
      )
    }
  };

  return (
    <Container>
      <Title>My Mini UI Design System</Title>
      <Description>
        My Mini UI는 React와 TypeScript를 기반으로 한 모던하고 직관적인 UI 컴포넌트 라이브러리입니다.
      </Description>

      <Section>
        <SectionTitle>Input Components</SectionTitle>
        <ComponentGrid>
          <ComponentCard>
            <ComponentTitle>Buttons</ComponentTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="light">Light</Button>
                <Button variant="primary" outline>Outline</Button>
              </div>
              <div>
                <ComponentTitle>Icon Buttons</ComponentTitle>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <ImageButton
                    image={<ShareIcon width="24px" height="24px" color={colors.gray[600]} />}
                    alt="공유하기"
                    width="40px"
                    height="40px"
                    onClick={() => console.log('Share button clicked')}
                  />
                  <ImageButton
                    image={<DeleteIcon width="24px" height="24px" color="#FF5252" />}
                    alt="삭제하기"
                    width="40px"
                    height="40px"
                    onClick={() => console.log('Delete button clicked')}
                  />
                </div>
              </div>
            </div>
          </ComponentCard>
          <ComponentCard>
            <ComponentTitle>Dropdown Variants</ComponentTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Dropdown
                options={dropdownOptions}
                value={dropdownValue1}
                onChange={setDropdownValue1}
                placeholder="기본 드롭다운"
                variant="light"
              />
              <Dropdown
                options={dropdownOptions}
                value={dropdownValue2}
                onChange={setDropdownValue2}
                placeholder="프라이머리 드롭다운"
                variant="primary"
              />
              <Dropdown
                options={dropdownOptions}
                value={dropdownValue3}
                onChange={setDropdownValue3}
                placeholder="비활성화 드롭다운"
                disabled
              />
            </div>
          </ComponentCard>
          <ComponentCard>
            <ComponentTitle>TextField Variants</ComponentTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <TextField 
                value={textField1}
                onChange={setTextField1}
                placeholder="기본 텍스트필드" 
              />
              <TextField 
                value={textField2}
                onChange={setTextField2}
                placeholder="에러 상태" 
                errorMessage="에러 메시지" 
              />
              <TextField 
                value={textField3}
                onChange={setTextField3}
                placeholder="도움말 포함" 
                helpText="도움말 텍스트" 
              />
            </div>
          </ComponentCard>
          <ComponentCard>
            <ComponentTitle>Basic Slider</ComponentTitle>
            <div style={{ padding: '1rem' }}>
              <Slider
                initialValue={sliderValue1}
                min={0}
                max={100}
                step={1}
                onChange={setSliderValue1}
              />
            </div>
          </ComponentCard>
          <ComponentCard>
            <ComponentTitle>Stepped Slider</ComponentTitle>
            <div style={{ padding: '1rem' }}>
              <div style={{ padding: '1rem 2rem' }}>
                <Slider
                  initialValue={sliderValue2}
                  min={1}
                  max={3}
                  step={1}
                  stepIndicators={stepIndicators}
                  onChange={setSliderValue2}
                />
              </div>
            </div>
          </ComponentCard>
        </ComponentGrid>
      </Section>

      <Section>
        <SectionTitle>Navigation Components</SectionTitle>
        <ComponentGrid>
          <ComponentCard>
            <ComponentTitle>Vertical Menu</ComponentTitle>
            <Menu>
              <Menu.Item>Home</Menu.Item>
              <Menu.Item>About</Menu.Item>
              <Menu.Item>Contact</Menu.Item>
            </Menu>
          </ComponentCard>
          <ComponentCard style={{ width: 'fit-content' }}>
            <ComponentTitle>Horizontal Menu</ComponentTitle>
            <Menu horizontal>
              <Menu.Item>Dashboard</Menu.Item>
              <Menu.Item selected>Products</Menu.Item>
              <Menu.Item>Settings</Menu.Item>
              <Menu.Item disabled>Admin</Menu.Item>
            </Menu>
          </ComponentCard>
        </ComponentGrid>
      </Section>

      <Section>
        <SectionTitle>Data Display Components</SectionTitle>
        <ComponentGrid>
          <ComponentCard>
            <ComponentTitle>Card</ComponentTitle>
            <Card
              title="카드 제목"
              description="카드 설명 텍스트입니다."
            />
          </ComponentCard>
          <ComponentCard>
            <ComponentTitle>Tooltip</ComponentTitle>
            <div style={{ padding: '2rem' }}>
              <Tooltip content="툴팁 내용입니다">
                <Button>Hover me</Button>
              </Tooltip>
            </div>
          </ComponentCard>
        </ComponentGrid>
      </Section>

      <Section>
        <SectionTitle>Media Components</SectionTitle>
        <ComponentGrid>
          <ComponentCard>
            <ComponentTitle>Infinite Carousel</ComponentTitle>
            <Carousel
              slides={sampleSlides}
              slideWidth={300}
              slideHeight={200}
              loop={true}
            />
          </ComponentCard>
          <ComponentCard>
            <ComponentTitle>Normal Carousel</ComponentTitle>
            <Carousel
              slides={normalSlides}
              slideWidth={300}
              slideHeight={200}
              loop={false}
            />
          </ComponentCard>
        </ComponentGrid>
      </Section>

      <Section>
        <SectionTitle>Overlay Components</SectionTitle>
        <ComponentGrid>
          <ComponentCard>
            <ComponentTitle>Modal Examples</ComponentTitle>
            <div style={{ 
              display: 'grid', 
              gap: '2rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
            }}>
              {/* 기본 모달 */}
              <div style={{ 
                position: 'relative',
                background: colors.gray[100],
                padding: '2rem',
                borderRadius: '8px',
                minHeight: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0, 0, 0, 0.6)',
                  borderRadius: '8px',
                }}/>
                <div style={{
                  position: 'relative',
                  background: colors.white,
                  borderRadius: '8px',
                  width: '280px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}>
                  <ModalContainer
                    ref={null}
                    role="dialog"
                    aria-modal="true"
                    width="100%"
                  >
                    <ModalHeader>
                      <ModalTitle>기본 모달</ModalTitle>
                      <CloseButton>
                        <CloseIcon width="20px" height="20px" color="currentColor" />
                      </CloseButton>
                    </ModalHeader>
                    <ModalContent>
                      <p style={{ margin: '0 0 8px 0' }}>기본적인 모달 컴포넌트입니다.</p>
                      <p style={{ margin: 0 }}>ESC 키나 오버레이 클릭으로 닫을 수 있습니다.</p>
                    </ModalContent>
                  </ModalContainer>
                </div>
              </div>

              {/* 폼이 있는 모달 */}
              <div style={{ 
                position: 'relative',
                background: colors.gray[100],
                padding: '2rem',
                borderRadius: '8px',
                minHeight: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0, 0, 0, 0.6)',
                  borderRadius: '8px',
                }}/>
                <div style={{
                  position: 'relative',
                  background: colors.white,
                  borderRadius: '8px',
                  width: '280px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}>
                  <ModalContainer
                    ref={null}
                    role="dialog"
                    aria-modal="true"
                    width="100%"
                  >
                    <ModalHeader>
                      <ModalTitle>폼이 있는 모달</ModalTitle>
                      <CloseButton>
                        <CloseIcon width="20px" height="20px" color="currentColor" />
                      </CloseButton>
                    </ModalHeader>
                    <ModalContent>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <TextField
                          value={textField1}
                          onChange={setTextField1}
                          placeholder="이름을 입력하세요"
                        />
                        <TextField
                          value={textField2}
                          onChange={setTextField2}
                          placeholder="이메일을 입력하세요"
                        />
                      </div>
                    </ModalContent>
                    <ModalFooter>
                      <Button variant="light">취소</Button>
                      <Button variant="primary">확인</Button>
                    </ModalFooter>
                  </ModalContainer>
                </div>
              </div>
            </div>
          </ComponentCard>
        </ComponentGrid>
      </Section>
    </Container>
  );
}; 