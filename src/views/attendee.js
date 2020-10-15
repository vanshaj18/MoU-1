import React, { Component } from 'react'
import  {
  Table,
  Container,
  Header,
  Loader,
} from 'semantic-ui-react'
import { GoogleSpreadsheet } from "google-spreadsheet";

import "../styles/attendee.css"

import {SPREADSHEET_ID, CLIENT_EMAIL, PRIVATE_KEY, SHEET_ID} from "../secrets/secret.js"

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

class Attendees extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = async (e) => {

    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });

      await doc.loadInfo();

      const sheet = doc.sheetsById[SHEET_ID];
      const data = await sheet.getRows();

      this.setState({data: data, isLoading: false})
      
    } catch (e) {
      console.error('Error: ', e);
    }
  };

  render () {

    const {data, isLoading} = this.state

    return (

      <div className='tableWrapper'>

      <Container>

        <div className="atHeader">
          <Header as='h1' size="huge" id="ath">
            Event Participants
          </Header>
        </div>
        
        
        
        <Loader active={isLoading} inline='centered' />

        {!isLoading && 
        <Table striped  size="large" padded stackable>

          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width="5">Name</Table.HeaderCell>
              <Table.HeaderCell width="4">Student/ Post Doc/ Faculty</Table.HeaderCell>
              <Table.HeaderCell>Institute</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          
          {data.map( (row) => (
            <Table.Body key={row._rowNumber}>
            <Table.Row>
              <Table.Cell width="5">{row.Name}</Table.Cell>
              <Table.Cell width="4">{row.Designation}</Table.Cell>
              <Table.Cell>{row.Institute}</Table.Cell>
            </Table.Row>
            </Table.Body>
          ))}

        </Table>
        }
      </Container>

      </div>
    )
  }
}

export default Attendees