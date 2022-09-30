import React, { ReactElement } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { Startup } from "../../Types/Startup";

interface StartupProps {
  startup: Startup;
}

const StartupComponent: React.FC<StartupProps> = ({ startup }) => {
  return (
    <Card
      style={{
        padding: 10,
        paddingLeft: 20,
        marginBottom: 20,
      }}
    >
      <h3
        style={{
          margin: 5,
        }}
      >
        {startup.name}
      </h3>
      <CardContent
        style={{
          padding: 5,
        }}
      >
        <p
          style={{
            fontSize: 12,
          }}
        >
          Founded: {startup.dateFounded.getFullYear()} | {startup.employees}{" "}
          Employees | {startup.totalFunding} | {startup.currentInvestmentStage}
        </p>

        <b
          style={{
            fontSize: 15,
          }}
        >
          {startup.shortDescription}
        </b>
      </CardContent>
    </Card>
  );
};

export default StartupComponent;
