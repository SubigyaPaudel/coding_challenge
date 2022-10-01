import { Fragment, ReactElement, useState, useEffect } from "react";
import { Startup } from "../../Types/Startup";
import { StartupHttpService } from "../../Http/Startup/Startup.http.service";
import StartupComponent from "./StartupComponent";

export default function StartupList(): ReactElement {
  const [startups, setStartups] = useState<Startup[]>([]);

  useEffect(() => {
    const retrieveStartups = async () => {
      const startups: Startup[] = await StartupHttpService.getStartups();
      setStartups(startups);
    };

    retrieveStartups();
  }, []);

  return (
    <div id="startup-list">
      {startups.length !== 0 &&
        startups.map((startup, index) => (
          <StartupComponent key={index} startup={startup} />
        ))}
    </div>
  );
}
