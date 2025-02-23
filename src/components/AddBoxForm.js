// src/components/AddBoxForm.js

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBox } from "../redux/actions/boxActions";
import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";

const AddBoxForm = () => {
  const [receiverName, setReceiverName] = useState("");
  const [weight, setWeight] = useState("");
  const [boxColor, setBoxColor] = useState("blue");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const dispatch = useDispatch();

  const handleWeightChange = (e) => {
    let value = e.target.value.replace(/^0+/, ""); 
    if (value === "") value = "0"; 
    setWeight(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!receiverName.trim() || weight === "" || weight <= 0 || destinationCountry === "") {
      setErrorMessage("❌ Fill all required fields first!");
      setSuccessMessage(""); 
      return;
    }

    // Dispatch the action
    dispatch(addBox({ receiverName, weight, boxColor, destinationCountry }));

    // Reset form fields after submission
    setReceiverName("");
    setWeight("");
    setBoxColor("blue");
    setDestinationCountry("");

    setErrorMessage(""); 
    setSuccessMessage("✅ Data submitted successfully!");
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow">
            <Card.Body>
              <h2 className="text-center text-primary">Add New Box Details</h2>

              {/* Show error or success message */}
              {errorMessage && <Alert variant="warning">{errorMessage}</Alert>}
              {successMessage && <Alert variant="success">{successMessage}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Receiver Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={receiverName}
                    onChange={(e) => setReceiverName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center">
                  <Form.Label className="me-3">Weight (kg)</Form.Label>
                  <Form.Control
                    type="number"
                    value={weight}
                    onChange={handleWeightChange}
                    required
                    style={{ width: "50%" }} 
                  />
                  <Form.Label className="ms-3">Box Color</Form.Label>
                  <Form.Select
                    value={boxColor}
                    onChange={(e) => setBoxColor(e.target.value)}
                    style={{ width: "30%" }}
                  >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="indigo">Indigo</option>
                    <option value="purple">Purple</option>
                    <option value="aqua">Aqua</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Destination Country</Form.Label>
                  <Form.Select
                    value={destinationCountry}
                    onChange={(e) => setDestinationCountry(e.target.value)}
                    required
                  >
                    <option value="">Select the option</option>
                    <option value="Sweden">Sweden (₹ 7.35 )</option>
                    <option value="China">China (₹ 11.53 )</option>
                    <option value="Brazil">Brazil (₹ 15.63 )</option>
                    <option value="Australia">Australia (₹ 50.09 )</option>
                  </Form.Select>
                </Form.Group>

                <Button 
                  variant="success" 
                  type="submit" 
                  className="w-100"
                  disabled={!receiverName.trim() || weight === "" || weight <= 0 || destinationCountry === ""}
                >
                  Save
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddBoxForm;
