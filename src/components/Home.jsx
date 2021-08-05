import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import beers from "./beers.json";

function Home() {
  return (
    <Container>
      <div>
      <Grid
      style={{
        height: "400px",
      }}
      data={beers}
    >
      <Column field="BeerID" title="ID" width="40px" />
      <Column field="BeerName" title="Name" width="250px" />
      <Column field="type" title="Type" width="250px" />
      <Column field="rating" title="Rating" width="250px" />
      <Column field="location" title="Location" width="250px" />
      <Column field="description" title="Description" width="500px" />
      <Column width="250px"
        field="Discontinued"
        cell={(props) => (
          <td>
            <input
              disabled={true}
              type="checkbox"
              checked={props.dataItem[props.field || ""]}
            />
          </td>
        )}
      />
    </Grid>
      </div>
    </Container>
  );
}

export default Home;