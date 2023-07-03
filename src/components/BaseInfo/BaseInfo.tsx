import { Table } from "semantic-ui-react"
import './index.css'

export const BaseInfo = () => {
 return <Table size='large'>
    <Table.Body>
      <Table.Row>
        <Table.HeaderCell>Address:</Table.HeaderCell>
        <Table.Cell>Lahnstein, 56112, Germany</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Phone:</Table.HeaderCell>
        <Table.Cell>+491726654470</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>DoB:</Table.HeaderCell>
        <Table.Cell>16.04.1993</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Email:</Table.HeaderCell>
        <Table.Cell>ulasenk@gmail.com</Table.Cell>
      </Table.Row>
      {/* <Table.Row>
        <Table.Cell>Skype</Table.Cell>
        <Table.Cell>as-vladdushka</Table.Cell>
      </Table.Row> */}
    </Table.Body>
  </Table>
}