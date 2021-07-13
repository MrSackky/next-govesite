import Link from 'next/link';
import { Form, Input, Button, Card } from 'antd';
const Contact = ({ props }) => {
  return (
    <div id="Contact">
      <Card style={{ width: 300 }}>
        <h2>ส่งข้อความถึงเรา</h2>
        <Form>
          <Form.Item label="ชื่อ-สกุล">
            <Input />
          </Form.Item>

          <Form.Item label="Email">
            <Input />
          </Form.Item>

          <Form.Item label="ข้อความของคุณ...">
            <Input.TextArea />
          </Form.Item>

          <Form.Item>
            <Button>Register</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Contact;
