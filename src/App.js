import logo from "./logo.svg";
import "./App.css";
import { Card, Button, Form, Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card style={{ width: "400px", height:"450px" }}>
          <Form>
            <Image
              className="mt-3"
              style={{ width: "171px", height:"180px"}}
              src="https://img2.freepng.es/20180602/zvo/kisspng-computer-icons-social-media-user-facebook-login-mystery-shopper-5b122bc3ca0775.2729057415279175078275.jpg"
              roundedCircle
            />
            <Card.Body className="text-black text-sm">
              <Card.Title style={{ color: "black" }}>Usuario user</Card.Title>
              <Form.Group> 
              <Form.Control className="mb-3" type="password" placeholder="Contraseña"/>
              </Form.Group>
              <Form.Group>
                <Form.Check className="mb-2" type="checkbox" style={{display:"inline-block", float:"left", color:"gray", fontSize:"15px"}} label="Recordar Contraseña"></Form.Check>
              </Form.Group>
              <Form.Group>
              <Button variant="primary" style={{ width:"100%"}} className="mb-2">Iniciar Sesion</Button>
              </Form.Group>
              <Form.Group>
              <Card.Link className="h6" href="#">¿Olvidaste Tu Contraseña?</Card.Link>
              </Form.Group>
              
            </Card.Body>
            
          </Form>
        </Card>
      </header>
    </div>
  );
}

export default App;
