// src/components/AddBoxForm.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBox } from "../redux/actions/boxActions";
import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";

const AddBoxForm = () => {
  const [receiverName, setReceiverName] = useState("");
  const [weight, setWeight] = useState("");
  const [boxColor, setBoxColor] = useState("#ffffff");
  const [destinationCountry, setDestinationCountry] = useState("Sweden");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // ✅ Success state added

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    if (!receiverName.trim() || weight === "" || weight <= 0) {
      setErrorMessage("⚠️ Fill the required fields first!");
      setSuccessMessage(""); // Clear success message if validation fails
      return;
    }

    // Dispatch the action
    dispatch(addBox({ receiverName, weight, boxColor, destinationCountry }));

    // Reset form fields after submission
    setReceiverName("");
    setWeight("");
    setBoxColor("#ffffff");
    setDestinationCountry("Sweden");

    setErrorMessage(""); // Clear error messages
    setSuccessMessage("✅ Data submitted successfully!"); // Show success message
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow">
            <Card.Body>
              <h2 className="text-center text-primary">Add New Box</h2>

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

                <Form.Group className="mb-3">
                  <Form.Label>Weight (kg)</Form.Label>
                  <Form.Control
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(Math.max(0, e.target.value))}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Box Colour</Form.Label>
                  <Form.Control
                    type="color"
                    value={boxColor}
                    onChange={(e) => setBoxColor(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Destination Country</Form.Label>
                  <Form.Select
                    value={destinationCountry}
                    onChange={(e) => setDestinationCountry(e.target.value)}
                  >
                    <option value="Sweden">Sweden (7.35 INR)</option>
                    <option value="China">China (11.53 INR)</option>
                    <option value="Brazil">Brazil (15.63 INR)</option>
                    <option value="Australia">Australia (50.09 INR)</option>
                  </Form.Select>
                </Form.Group>

                <Button variant="success" type="submit" className="w-100">
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



