import { Layout, Image } from "antd";
import SideMenu from "./components/SideMenu/index";
import AppRoutes from "./components/AppRoutes";
const { Sider, Content, Footer } = Layout;

function App() {
  return (
    // <DetailedOrder />

    <Layout>
      <Sider style={{ height: "100vh", backgroundColor: "white" }}>
        <Image
          src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg"
          preview={false}
        />
        <SideMenu />
      </Sider>
      <Layout>
        <Content>
          <AppRoutes />
        </Content>
        <Footer style={{ textAlign: "center", backgroundColor: "white" }}>
          Uber Eats Restaurant Dashboard © 2022
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
