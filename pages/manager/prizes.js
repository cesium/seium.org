import { useState, useRef } from "react";

import { withAuth } from "/components/Auth";
import Dashboard from "/components/moonstone/staff/utils/Dashboard";

import Award from "/components/moonstone/staff/Award";

import BarebonesQRScanner from "/components/moonstone/utils/QRScanner/BarebonesQRScanner";

import { getReedemable, redeem } from "/lib/api";

/*
Fills the array with number of zeroes
*/
function fillArray(number) {
  let res = [];
  for (let i = 0; i < number; i++) res.push(0);

  return res;
}

/*
Creates a copy of the array changing one value
*/
function changeValue(array, index, value) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (i == index) res.push(value);
    else res.push(array[i]);
  }
  return res;
}

function Reedem() {
  const [start, updateStart] = useState(true);
  const [selectingAwards, updateSelectingAwards] = useState(false);
  const [scanning, updateScanning] = useState(false);
  const [attendee, updateAttendee] = useState(null);
  const [awards, updateAwards] = useState([]);
  const [amounts, updateAmounts] = useState([]);
  const [success, updateSuccess] = useState(false);
  const pauseRef = useRef(false);

  const getAttendeeAwards = (at) => {
    getReedemable(at)
      .then((response) => {
        updateAwards(response.data);
        updateAmounts(fillArray(response.data.length));
        updateSelectingAwards(true);
      })
      .catch((_) => alert("An error has occured"));
  };

  const redeemAwards = () => {
    updateSuccess(true);
    updateStart(true);
    updateSelectingAwards(false);
    for (let i = 0; i < awards.length; i++) {
      if (amounts[i] != 0) {
        redeem(attendee, awards[i].id, amounts[i])
          .then((_) => updateSuccess(true))
          .catch((_) => {
            alert("An error has occured");
            updateSuccess(false);
            updateStart(false);
            updateSelectingAwards(true);
          });
      }
    }
  };

  return (
    <Dashboard title="Reedem prizes">
      {start && (
        <button
          className="m-auto block h-20 w-64 rounded-full bg-quinary"
          onClick={() => {
            updateStart(false);
            updateScanning(true);
          }}
        >
          <p className="font-ibold font-bold">SCAN QR CODE</p>
        </button>
      )}

      {start && success && (
        <p className="font-iregular text-quinary">Redeem successful</p>
      )}

      {selectingAwards && (
        <>
          <div className="mt-14 border-b-2 border-black">
            <span className="font-ibold text-xl sm:text-2xl">
              Available awards
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 justify-items-center gap-y-8 gap-x-2 lg:grid-cols-4 lg:gap-x-8">
            {awards.map((entry, id) => (
              <Award
                key={id}
                image={`/public/images/${entry.image.file_name}`}
                redeemable={entry.not_redeemed}
                name={entry.name}
                onValueChange={(e) =>
                  updateAmounts(
                    changeValue(amounts, id, parseInt(e.currentTarget.value))
                  )
                }
              />
            ))}
          </div>
          <button
            className="m-auto mt-5 block h-20 w-64 rounded-full bg-quinary"
            onClick={() => {
              redeemAwards();
            }}
          >
            <p className="font-ibold font-bold">REEDEM</p>
          </button>
        </>
      )}

      {scanning && (
        <BarebonesQRScanner
          handleCode={(at) => {
            pauseRef.current = false;
            updateAttendee(at);
            updateStart(false);
            getAttendeeAwards(at);
          }}
          pauseRef={pauseRef}
        />
      )}
    </Dashboard>
  );
}

export default withAuth(Reedem);
