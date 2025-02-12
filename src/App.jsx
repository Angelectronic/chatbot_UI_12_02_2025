import logo from '@/assets/images/LOGO_OF_LOGO.svg';
import VBChat from './components/VBChat';
import ATTTChat from './components/ATTTChat';
import CommonChat from './components/CommonChat';
import { Menu } from 'antd';
import React from 'react';

const items = [
  {
    key: 'CommonChat',
    label: 'Hỏi đáp chung',
  },
  {
    key: 'ATTTChat',
    label: 'Hỏi đáp ATTT',
  },
  {
    key: 'VBChat',
    label: 'Hỏi đáp VB',
  }
];

function App() {
  const [mainContent, setMainContent] = React.useState(<CommonChat />);
  const onClick = (e) => {
    setMainContent(e.key === 'CommonChat' ? <CommonChat /> : e.key === 'ATTTChat' ? <ATTTChat /> : <VBChat />);
  };

  return (
    <>
    <header className="sticky top-0 z-20 bg-white w-full shadow-md py-3 px-4">
      <div className="flex items-center gap-3">
        <a href="https://codeawake.com">
          <img src={logo} className="w-32" alt="logo" />
        </a>
        <h1 className="font-urbanist text-2xl font-semibold">Chatbot thông minh</h1>
      </div>
    </header>

    <Menu
      onClick={onClick}
      style={{
        position: 'fixed',
        fontWeight: '600',
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="vertical"
      items={items}
    />

    {mainContent}
    </>
  );
}

export default App;