import { Table } from "semantic-ui-react"
import { DE } from 'country-flag-icons/react/3x2'
import './index.css'

export const BaseInfo = () => {
 return <Table size='large' className="baseInfoTable">
    <Table.Body>
      <Table.Row>
        <Table.HeaderCell>Address:</Table.HeaderCell>
        <Table.Cell>Lahnstein, GER <DE className="info-flag" /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Phone:</Table.HeaderCell>
        <Table.Cell><a target="href" href="tel:+491726654470">+491726654470</a></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>DoB:</Table.HeaderCell>
        <Table.Cell>16.04.1993</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Email:</Table.HeaderCell>
        <Table.Cell><a target="href" href= "mailto:ulasenk@gmail.com">ulasenk@gmail.com</a></Table.Cell>
      </Table.Row>
      {/* <Table.Row>
        <Table.Cell>Skype</Table.Cell>
        <Table.Cell>as-vladdushka</Table.Cell>
      </Table.Row> */}
    </Table.Body>
  </Table>
}