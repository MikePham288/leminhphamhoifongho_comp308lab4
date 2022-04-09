import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { useLocation } from "react-router";

/**
 * Name: Le Minh Pham & Hoi Fong Ho
 * Student Number: 300814556 &
 */

const Results = (props) => {
  const { state } = useLocation();
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "http://localhost:3000/runModelWithParams";
  //runs once after the first rendering of page
  useEffect(() => {
    // posting the form data received from parameters form to post api
    const fetchData = async () => {
      axios
        .post(apiUrl, state)
        .then((result) => {
          setData(result.data);
          setShowLoading(false);
        })
        .catch((error) => {
          console.log("error in fetchData:", error);
        });
    };
    fetchData();
  }, []);
  return (
    <div>
      {showLoading === false ? (
        <div>
          {showLoading && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
          <div className="row justify-content-center">
            <h1>Prediction Results</h1>
          </div>
          <h2>The values for species will be:</h2>
          <br />
          <ul style={{ listStyle: "none" }}>
            <li>
              <b>setosa:</b> 1,0,0
            </li>
            <li>
              <b>virginica:</b> 0,1,0
            </li>
            <li>
              <b>versicolor:</b> 0,0,1 
            </li>
          </ul>

          <div
            className="row justify-content-center"
            style={{ marginTop: "45px" }}
          >
            <table className="table-bordered col-8">
              <thead>
                <tr className="text-center">
                  <th>Test 1</th>
                </tr>
              </thead>

              <tbody>
                <tr className="text-center">
                  <td>
                    {data.row1.map((value, index) => (
                      <p key={index}>{value}</p>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="row justify-content-center"
            style={{ marginTop: "45px" }}
          >
            <a href="/" className="btn btn-success">
              Go Back
            </a>
          </div>
        </div>
      ) : (
        <div>
          {showLoading && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Waiting for results...</span>
            </Spinner>
          )}
        </div>
      )}
    </div>
  );
};
export default Results;
