import Link from 'next/link';

/* utils */
import { absoluteUrl } from '../middleware/utils';

/* components */
import Layout from '../components/layout/LayoutDefault';
import UserNav from '../components/navigation/User';

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

const { Text, Title } = Typography;

const { TextArea } = Input;

export default function Home(props) {
  const { user, origin } = props;

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle = {
    height: '460px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <Layout title="Government | Home Page" url={origin} origin={origin}>
      <div>
        <Row justify="center" className="bg-gray-100">
          <Col className="text-right rounded-r-lg bg-gray-300 px-20 py-24 w-1/2">
            <Title>ระบบเว็บไซต์หน่วยงานสำเร็จรูป</Title>
            <h1>
              สร้างไซต์หน่วยงานท่านได้ตัวเอง ง่าย เร็ว สวยงาม MANAGE YOUR
              ORGANIZATION , EASY , FAST , BEAUTIFUL
            </h1>
            <Button class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded h-8 text-white bg-green-600 font-bold items-center justify-center hover:bg-green-600 hover:text-white">
              ทดลองใช้งาน
            </Button>
            <br />
            <Text>* สมัครใช้งานวันนี้ทดลองใช้ฟรี 30วัน</Text>
          </Col>
          <Col className="text-left px-20 py-8 w-1/2">
            <Image
              preview={false}
              src={process.env.PUBLIC_URL + 'assets/images/slidehome.png'}
            />
          </Col>
        </Row>
      </div>

      <div className="pt-10 pb-10" id="property">
        <Row justify="center">
          <Title className="text-center">เว็บไซต์หน่วยงานสำเร็จรูป ใช้งานง่าย ไม่ยุ่งยาก</Title>
        </Row>
        <Row justify="center" className="content">
          <ul>
            <p class="text-sm text-center">
              <li>
                GOVERNMENT icti
                เราเป็นเว็บไซต์หน่วยงานสำเร็จรูปสำหรับหน่วยงานราชการ เว็บไซต์
                อปท เช่น เทศบาล องค์การบริหารส่วนตำบล
                โรงพยาบาลส่งเสริมสุขภาพตำบล เป็นต้น
              </li>
              <li>
                สามารถสร้างไซต์หน่วยงานท่านได้ตัวเอง ง่าย เร็ว สวยงาม ไม่ยุ่งยาก
                ครบตามมาตราฐานเว็บไซต์หน่วยงานภาครัฐ
                เป็นระบบที่ถูกออกแบบขึ้นมาเพื่อเป็นเว็บไซต์หน่วยงานราชการต่างๆโดยเฉพาะ
              </li>
              <li>
                ไม่ใช่เว็บไซต์ที่สร้างขึ้นมาด้วย WordPress หรือ แพลตฟอร์มอื่นๆ
                และมีการจัดเก็บข้อมูลบน Cloud ที่เป็นมาตราฐาน
              </li>
            </p>
          </ul>
        </Row>
        <Row justify="center" className="flex space-x-14 text-center">
          <Col span={2}>
            <Image
              preview={false}
              height="86px"
              width="86px"
              src={process.env.PUBLIC_URL + 'assets/images/icon1.png'}
            />
            <br />
            <Text strong>Responsive Website</Text>
            <br />
            <Text>รองรับหน้าจออุปกรณ์ทุกชนิด แสดงผลได้อย่าง "สมบูรณ์แบบ"</Text>
          </Col>
          <Col span={2}>
            <Image
              preview={false}
              height="86px"
              width="86px"
              src={process.env.PUBLIC_URL + 'assets/images/icon2.png'}
            />
            <br />
            <Text strong>แก้ไขข้อมูลง่าย</Text>
            <br />
            <Text>แก้ไขข้อมูลด้วยตัวเอง ไม่ต้องเขียนโปรแกรม</Text>
          </Col>
          <Col span={2}>
            <Image
              preview={false}
              height="86px"
              width="86px"
              src={process.env.PUBLIC_URL + 'assets/images/icon3.png'}
            />
            <br />
            <Text strong>เว็บไซต์สวย ทันสมัย</Text>
            <br />
            <Text>TEMPLATE ที่ออกแบบมาอย่างลงตัว มีความเป็นมืออาชีพ</Text>
          </Col>
          <Col span={2}>
            <Image
              preview={false}
              height="86px"
              width="86px"
              src={process.env.PUBLIC_URL + 'assets/images/icon4.png'}
            />
            <br />
            <Text strong>รองรับการทำ SEO</Text>
            <br />
            <Text>ให้เว็บไซต์ติดอันดับการค้นหา</Text>
          </Col>
          <Col span={2}>
            <Image
              preview={false}
              height="86px"
              width="86px"
              src={process.env.PUBLIC_URL + 'assets/images/icon5.png'}
            />
            <br />
            <Text strong>มีทีมงาน support</Text>
            <br />
            <Text>มีทีมงานให้ความช่วยเหลือ ตลอดการใช้งาน</Text>
          </Col>
        </Row>
        <Row justify="center">
          <Button class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded h-8 text-white bg-green-600 font-bold items-center justify-center hover:bg-green-600 hover:text-white mt-6">
            ทดลองใช้งาน
          </Button>
        </Row>
      </div>

      <div class="bg-green-600 pt-10 pb-10">
        <Row justify="center">
          <Col span={10} className="text-right mr-16">
            <Image
              preview={false}
              src={process.env.PUBLIC_URL + 'assets/images/feature.png'}
            />
          </Col>
          <Col span={10} className="text-left">
            <p class="text-xl">กระดานข่าว คลังเอกสารราชการ</p>
            <p class="text-sm">
              ระบบกระดานเว็บบอร์ด สำหรับการสนทนาผ่านเว็บบอร์
              และคลังเอกสารสำหรับประชาสัมพันธ์ และให้ประชาชนดาวน์โหลด
            </p>
            <hr />
            <div style={{ margin: '20px 0' }} />
            <p class="text-xl">ประกาศประกวดราคา ข่าวประชาสัมพันธ์</p>
            <p class="text-sm">
              ระบบเพิ่มเนื้อหาเว็บ เพื่อให้ประชาชนเข้าถึงข้อมูล
              ข่าวสารของหน่วยงาน เช่น การประกวดราคา การประชาสัมพันธ์
            </p>
            <hr />
            <div style={{ margin: '20px 0' }} />
            <p class="text-xl">ระบบร้องทุกข์และสำรวจความคิดเห็น</p>
            <p class="text-sm">
              ระบบรับข้อมูลต่างๆ จากประชาชนผู้เข้าชมเว็บไซต์ เช่น การร้องทุกข์
              ระบบสำรวจความคิดเห็น
            </p>
            <hr />
          </Col>
        </Row>
      </div>

      <div class="pt-10 pb-10" id="package">
        <Row justify="center">
          <Title className="text-center">ตารางเปรียบเทียบแพ็กเกจ</Title>
        </Row>

        <div class=" mx-auto overflow-hidden">
          <Row className="text-center lg:inline-flex lg:flex-row lg:w-auto w-full lg:items-center justify-center items-start  flex flex-col lg:h-auto h-full">
            <Col span={4}>
              <div className="mx-auto bg-white rounded-xl shadow-md w-3/4">
                <p class="text-xl">Connect</p>
                <h4>Cloud server 50 Mb</h4>
                <hr />
                <ul>
                  <li>● เพิ่ม ลบ แก้ไข เนื้อหาเว็บไซต์ได้ด้วยตัวเอง</li>
                  <li>● เปลี่ยนภาพ Slide กิจกรรมของหน่วยงาน</li>
                  <li>● แสดงหน้าวันสำคัญอัตโนมัติ ตั้งเวลาแสดงผลเนื้อหาได้</li>
                  <li>● Support SEO</li>
                  <li>● ระบบประกวดราคา ข่าวประขาสัมพันธ์</li>
                  <li>● กระดานข่าว คลังเอกสารราชการ</li>
                  <li>● ระบบสถิติผู้เข้าชมเว็บ</li>
                  <li>● Theme เว็บไซต์มาตราฐาน</li>
                  <li>● แสดง โฆษณา</li>
                  <li>● Theme เว็บไซต์มาตราฐาน</li>
                </ul>
                <hr />
                <p class="text-xl">1,800 บาท</p>
                <h4>ต่อปี *ราคารวมภาษีมูลค่าเพิ่มแล้ว</h4>
                <Button class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-full h-8 text-white bg-green-600 font-bold items-center justify-center hover:bg-green-300 hover:text-white mb-2">
                  ขอใบเสนอราคา
                </Button>
              </div>
            </Col>
            <Col span={4}>
              <div className="mx-auto rounded-xl shadow-xl w-3/4">
                <p class="text-xl">Standard</p>
                <h4>Cloud server 4GB</h4>
                <hr />
                <ul>
                  <li>● เพิ่ม ลบ แก้ไข เนื้อหาเว็บไซต์ได้ด้วยตัวเอง</li>
                  <li>● เปลี่ยนภาพ Slide กิจกรรมของหน่วยงาน</li>
                  <li>● แสดงหน้าวันสำคัญอัตโนมัติ ตั้งเวลาแสดงผลเนื้อหาได้</li>
                  <li>● Support SEO</li>
                  <li>● ระบบประกวดราคา ข่าวประขาสัมพันธ์</li>
                  <li>● ระบบร้องทุกข์ และสำรวจความคิดเห็น</li>
                  <li>● ระบบสถิติผู้เข้าชมเว็บ</li>
                  <li>● Theme เว็บไซต์มาตราฐาน</li>
                  <li>● ไม่แสดง โฆษณา</li>
                  <li>● Theme เว็บไซต์มาตราฐาน</li>
                </ul>
                <hr />
                <p class="text-xl">5,300 บาท</p>
                <h4>ต่อปี *ราคารวมภาษีมูลค่าเพิ่มแล้ว</h4>
                <Button class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-full h-8 text-white bg-green-600 font-bold items-center justify-center hover:bg-green-300 hover:text-white mb-2">
                  ขอใบเสนอราคา
                </Button>
              </div>
            </Col>
            <Col span={4}>
              <div className="mx-auto text-white bg-green-600 rounded-xl shadow-xl w-3/4">
                <p class="text-xl">Premium</p>
                <h4>Cloud server ไม่จำกัด</h4>
                <hr />
                <ul>
                  <li>● จดทะเบียน .com หรือ .go.th</li>
                  <li>● Email @ชื่อเว็บไซค์หน่วยงาน ( 1 Email)</li>
                  <li>● เพิ่ม ลบ แก้ไข เนื้อหาเว็บไซต์ได้ด้วยตัวเอง</li>
                  <li>● เปลี่ยนภาพ Slide กิจกรรมของหน่วยงาน</li>
                  <li>● แสดงหน้าวันสำคัญอัตโนมัติ ตั้งเวลาแสดงผลเนื้อหาได้</li>
                  <li>● Support SEO</li>
                  <li>● ระบบประกวดราคา ข่าวประขาสัมพันธ์</li>
                  <li>● กระดานข่าว คลังเอกสารราชการ</li>
                  <li>● ระบบร้องทุกข์ และสำรวจความคิดเห็น</li>
                  <li>● ระบบสถิติผู้เข้าชมเว็บ</li>
                  <li>● Theme เว็บไซต์มาตราฐาน</li>
                  <li>● ย้ายข้อมูลพื้นฐานจากเว็บไซต์เดิมมายังเว็บไซต์ใหม่ ในครั้งแรก
                  </li>
                  <li>● ไม่แสดงโฆษณา</li>
                </ul>
                <hr />
                <p class="text-xl">7,400 บาท</p>
                <h4>ต่อปี *ราคารวมภาษีมูลค่าเพิ่มแล้ว</h4>
                <Button class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-full h-8 text-white bg-transparent font-bold items-center justify-center hover:bg-green-300 hover:text-white py-2 px-4 border border-white-500 mb-2">
                  ขอใบเสนอราคา
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div class="bg-green-600 pt-10 pb-10" id="contact">
        <div class="mx-auto bg-white rounded w-1/2">
          <div class="pt-4 pb-4 pr-4 pl-4">
            <p class="text-xl">ส่งข้อความถึงเรา</p>
            <TextArea
              placeholder="ชื่อ-สกุล"
              autoSize={{ minRows: 2, maxRows: 6 }}
            />
            <div style={{ margin: '24px 0' }} />
            <TextArea
              placeholder="Email"
              autoSize={{ minRows: 2, maxRows: 6 }}
            />
            <div style={{ margin: '24px 0' }} />
            <TextArea
              placeholder="ข้อความของคุณ..."
              autoSize={{ minRows: 10, maxRows: 15 }}
            />
            <div style={{ margin: '24px 0' }} />
            <Button class="uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded h-8 text-white bg-green-600 font-bold items-center justify-center hover:bg-green-600 hover:text-white">
              Register
            </Button>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <main>

          <h1 className="title">
            Sequelize &amp; <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <p className="description">
            <img
              src="/sequelize.svg"
              alt="Sequelize"
              height="120"
              style={{ marginRight: '1rem' }}
            />
            <img src="/nextjs.svg" alt="Next.js" width="160" />
          </p>
          <UserNav props={{ user: user }} />
          <div className="grid">
            <Link href="/user">
              <a className="card">
                <h3>Users &rarr;</h3>
                <p>Listed users of this web application.</p>
              </a>
            </Link>

            <Link href="/post">
              <a className="card">
                <h3>Posts &rarr;</h3>
                <p>Post collection from users of this web application.</p>
              </a>
            </Link>

            <Link href="/job">
              <a className="card">
                <h3>Jobs &rarr;</h3>
                <p>Job Post collection from users of this web application.</p>
              </a>
            </Link>
          </div>
        </main>
      </div> */}
    </Layout>
  );
}
/* getServerSideProps */
export async function getServerSideProps(context) {
  const { req } = context;
  const { origin } = absoluteUrl(req);

  return {
    props: {
      origin,
    },
  };
}
