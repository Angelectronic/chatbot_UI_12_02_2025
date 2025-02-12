import { Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Chatbot from './Chatbot';
import { FILE_URL } from '@/api';

const props = {
  name: 'file',
  action: FILE_URL,
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


function VBChat() {
    return (
      <>
      <div className="h-full w-full">
        <Upload {...props} className="fixed left-[150px] top-[90px]">
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <div className='flex flex-col min-h-full w-full max-w-3xl mx-auto px-4'>
          <Chatbot />
        </div>
      </div>
      </>
    );
  }
  
  export default VBChat;