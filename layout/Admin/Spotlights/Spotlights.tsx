import { useEffect, useState } from "react";

import Layout from "@components/Layout";
import { withAuth } from "@context/Auth";
import { displayRemainingTime } from "@lib/time";
import * as api from "@lib/api";

type SpotlightProps = {
  id: number;
  name: string;
  remaining: number;
  end?: string;
};

export function Spotlights() {
  const [spotlights, setSpotlights] = useState<SpotlightProps[]>([]);

  const fetchSpotlights = async () => {
    api
      .getCompaniesWithSpotlightInfo()
      .then((response) => {
        setSpotlights(response.data);
      })
      .catch((error) => {
        // FIXME: Should be displayed in a toast, for example
        console.error(error);
      });
  };

  useEffect(() => {
    fetchSpotlights();
  }, []);

  const sortedSpotlights = spotlights.sort((a, b) => {
    if (a.end && !b.end) return -1;
    if (!a.end && b.end) return 1;
    return 0;
  });

  const updateRemainingTime = () => {
    setSpotlights((prevSpotlights) => {
      return prevSpotlights.map((spotlight) => {
        if (spotlight.end) {
          return {
            ...spotlight,
          };
        }
        return spotlight;
      });
    });
  };

  useEffect(() => {
    const intervalId = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const startSpotlight = (id: number) => async () => {
    try {
      await api.createSpotlight(id);
      fetchSpotlights();
    } catch (error) {
      // FIXME: Should be displayed in a toast, for example
      console.error(error);
    }
  };

  return (
    <Layout title="Spotlights" description="Manage spotlights">
      <div className="overflow-hidden">
        <div className="mt-12 h-8 select-none grid-cols-4 pt-2">
          <div className="col-span-1 float-left w-1/3 text-left font-iregular">
            Sponsor
          </div>
          <div className="col-span-1 float-left w-1/3 text-center font-iregular">
            Remaining
          </div>
          <div className="col-span-1 float-left w-1/3 text-right font-iregular">
            Actions
          </div>
        </div>

        {sortedSpotlights.map((spotlight) => (
          <div
            key={spotlight.id}
            className="flex h-auto border-t-2 border-t-slate-300 p-4"
          >
            <div
              className={`w-1/3 text-left font-iregular ${
                spotlight.end && "text-quinary"
              }`}
            >
              {spotlight.name}{" "}
              {spotlight.end &&
                "(ends in " + displayRemainingTime(spotlight.end) + ")"}
            </div>
            <div
              className={`w-1/3 text-center font-iregular ${
                spotlight.end && "text-quinary"
              }`}
            >
              {spotlight.remaining}
            </div>
            <div className="w-1/3 text-right font-iregular">
              {spotlight.remaining > 0 && (
                <button
                  className="underline decoration-quinary"
                  onClick={startSpotlight(spotlight.id)}
                >
                  Start
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default withAuth(Spotlights);
