import Navbar from "../navbar";
import "./TableIsc.css";
import { MdVerifiedUser } from "react-icons/md";
import { MdSmsFailed } from "react-icons/md";

const TableIsc = () => {
  return (
    <div className="isc">
      <Navbar />
      <div className="insp">
        <div className="card_isc">
          <h2>TOTAL DE INSPEÇÕES</h2>
          <p>56</p>
          <MdVerifiedUser className="icon-isc-v" />
        </div>
        <div className="card_isc">
          <h2>TOTAL DE NÃO CONFORMIDADES</h2>
          <p>10</p>
          <MdSmsFailed className="icon-isc-f" />
        </div>
      </div>

      <table>
        <tr>
          <th>ID LOCAL</th>
          <th>CONTRATO</th>
          <th>DATA</th>
          <th>N CONFORME</th>
          <th>LOCAL</th>
          <th>TIPO DE SERVIÇO</th>
          <th>MATRICULA</th>
          <th>DETALHES</th>
        </tr>
        <tr>
          <td>test1321312312312</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
        </tr>
        <tr>
          <td>test2</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
          <td>test</td>
        </tr>
      </table>
    </div>
  );
};

export default TableIsc;
