import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
// import { withRouter } from "react-router-dom";

/**
 * Name: Le Minh Pham & Hoi Fong Ho
 * Student Number: 300814556 &
 */

const ParametersForm = (props) => {
  const [state, setState] = useState({
    sepallength: 0.0,
    sepalwidth: 0.0,
    petallength: 0.0,
    petalwidth: 0.0,
    epoch: 100,
    lr: 0.06,
  });

  let navigate = useNavigate();

  // trigerred when the form is submitted
  const handleOnSubmit = (event) => {
    event.preventDefault();
    // redirects the user to results page and
    // pushes the state as props to the page
    navigate("/results", { state: state });
  };

  // reactive forms input change method to set values in state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className="row justify-content-center">
        <h1>What do you want to test?</h1>
      </div>
      <Form className="register-form" onSubmit={handleOnSubmit}>
        <Form.Group controlId="sepalLength">
          <Form.Label>Sepal Length</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Sepal Length"
            name="sepallength"
            onChange={handleInputChange}
            value={state.sepallength}
            required
          />
        </Form.Group>
        <Form.Group controlId="sepalWidth">
          <Form.Label>Sepal Width</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Sepal Width"
            name="sepalwidth"
            onChange={handleInputChange}
            value={state.sepalwidth}
            required
          />
        </Form.Group>
        <Form.Group controlId="petalLength">
          <Form.Label>Petal Length</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Petal Length"
            name="petallength"
            onChange={handleInputChange}
            value={state.petallength}
            required
          />
        </Form.Group>
        <Form.Group controlId="petalWidth">
          <Form.Label>Petal Width</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Petal Width"
            name="petalwidth"
            onChange={handleInputChange}
            value={state.petalwidth}
            required
          />
        </Form.Group>
        <Form.Group controlId="epoch">
          <Form.Label>Epoch</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Epoch"
            name="epoch"
            onChange={handleInputChange}
            value={state.epoch}
            required
          />
        </Form.Group>
        <Form.Group controlId="lr">
          <Form.Label>Learning Rate</Form.Label>
          <Form.Control
            type="number"
            step="any"
            placeholder="Enter Learning Rate"
            name="lr"
            onChange={handleInputChange}
            value={state.lr}
            required
          />
        </Form.Group>
        <div className="row justify-content-center pt-4">
          <Button variant="success" type="submit">
            Evaluate
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default ParametersForm;
