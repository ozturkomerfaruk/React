import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function TabExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="tab-example"
    >
      <Tab eventKey="home" title="Home">
        <p>	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, eos.</p>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum eligendi quod eos voluptatem voluptate. Corrupti, quas? Expedita neque eligendi officiis!</p>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <p>	Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, molestias quidem, aperiam at distinctio voluptatibus iusto quam aliquid tenetur voluptas totam, vero aspernatur minus provident ad nobis molestiae omnis quasi.</p>
      </Tab>
    </Tabs>
  );
}

export default TabExample;