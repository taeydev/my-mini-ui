import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import Modal from '@/components/Modal/Modal';
import Button from '@/components/Button/Button';
import TextField from '@/components/TextField/TextField';

const meta = {
  title: 'Components/Overlay Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

export const Examples = () => {
  const [isBasicOpen, setIsBasicOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button onClick={() => setIsBasicOpen(true)}>
        기본 모달 열기
      </Button>
      <Button variant="primary" onClick={() => setIsFormOpen(true)}>
        폼 모달 열기
      </Button>

      <Modal
        isOpen={isBasicOpen}
        onClose={() => setIsBasicOpen(false)}
        title="기본 모달"
      >
        <p>기본적인 모달 컴포넌트입니다.</p>
        <p>ESC 키나 오버레이 클릭으로 닫을 수 있습니다.</p>
      </Modal>

      <Modal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title="폼이 있는 모달"
        footer={
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button variant="light" onClick={() => setIsFormOpen(false)}>
              취소
            </Button>
            <Button variant="primary" onClick={() => setIsFormOpen(false)}>
              확인
            </Button>
          </div>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextField
            value={name}
            onChange={setName}
            placeholder="이름을 입력하세요"
          />
          <TextField
            value={email}
            onChange={setEmail}
            placeholder="이메일을 입력하세요"
          />
        </div>
      </Modal>
    </div>
  );
}; 