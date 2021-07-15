import {
  Carousel,
  Row,
  Col,
  Typography,
  Image,
  Button,
  Input,
  Card,
} from 'antd';

const { Title } = Typography;

export default function Footer({}) {
  return (
    <footer className="footer-main text-center bg-black text-white h-56">
      <div className="w-1/2">
        <Row>
          <Col className="w-2/6">
            <div className="text-left">
              <p class="text-xl">ติดต่อเรา</p>
              <p>
                ห้างหุ้นส่วนจำกัด ไอซีที อินทิเกรเตอร์ 299/139
                หมู่บ้านกาญจน์กนกวิลล์ 10 หมู่ที่ 6 ต.สันผักหวาน อ.หางดง
                จ.เชียงใหม่ 50230
              </p>
            </div>
          </Col>
          <Col className="w-3/6">
            <div className="text-right">
              <p>06-5265-9288</p>
              <p>ictintegrator.co@gmail.com</p>
              <p>LineID : @icti</p>
            </div>
          </Col>
          <Col className="w-1/6">
            <div className="text-center mt-6">
              <ul>
                <li>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline w-3/4 mb-2">สมัครใช้งาน</button>
                </li>
                <li>
                  <button className="bg-gray-50 hover:bg-gray-500 text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline w-3/4">เข้าสู่ระบบ</button>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="w-1/2 text-left">
            <small>© Government, Inc. 2021. Web Content Mangement System</small>
          </Col>
          <Col className="w-1/2">
            <div>
              <a className="text-right">Follow us:</a>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
}
