// src/components/BoxTable.js
import { useSelector } from 'react-redux';

const BoxTable = () => {
    const boxes = useSelector((state) => state.boxes);

    const calculateShippingCost = (weight, country) => {
        const rates = {
          Sweden: process.env.REACT_APP_SWEDEN_COST || 7.35,
          China: process.env.REACT_APP_CHINA_COST || 11.53,
          Brazil: process.env.REACT_APP_BRAZIL_COST || 15.63,
          Australia: process.env.REACT_APP_AUSTRALIA_COST || 50.09,
        };
        return weight * rates[country];
      };
      

    return (
        <div className="card p-4 shadow">
            <h2 className="mb-3">Box List</h2>
            {boxes.length === 0 ? (
                <p className="text-muted">No boxes added yet.</p>
            ) : (
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Receiver Name</th>
                            <th>Weight (kg)</th>
                            <th>Box Colour</th>
                            <th>Destination Country</th>
                            <th>Shipping Cost (INR)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {boxes.map((box, index) => (
                            <tr key={index}>
                                <td>{box.receiverName}</td>
                                <td>{box.weight}</td>
                                <td>
                                    <div style={{ width: "30px", height: "30px", backgroundColor: box.boxColor, border: "1px solid #000" }}></div>
                                </td>
                                <td>{box.destinationCountry}</td>
                                <td>{calculateShippingCost(box.weight, box.destinationCountry).toFixed(2)} INR</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default BoxTable;

