import {useState, useEffect} from 'react';

import Dashboard from "/components/moonstone/Dashboard";
import Heading from '/components/moonstone/Heading';
import ListItem3 from '../components/moonstone/ListItem3Cols';
import ListItem4 from '../components/moonstone/ListItem4Cols';
import Wheel from '/components/moonstone/Wheel';

export default function Profile() {
  const defaultState = {
    angle: 0,
    speed: 20,
  }
  const angleSpeed = 20;
  const fps = 60;
  const [st, updateState] = useState(defaultState);

  const changeState = () => {
    updateState({
      angle: (st.angle + st.speed) % 360,
      speed: st.speed - 0.1,
    });
  }

  //Rotate at 60fps
  useEffect(() => {
    console.log(st.angle);
    if(st.speed > 0)
      setTimeout(changeState, 1000 / 60);
  }, [st]);

  return (
    <Dashboard href="sweel" title="Wheel" description="Spin the wheel and win awards!">
      <div className="grid-cols-1 2xl:grid-cols-2 overflow-hidden">
        <div className="col-span-1 w-full 2xl:w-1/2 float-left">
          <Heading text="Achievements">
            <div className="w-40 h-full pt-1">
                <div className="col-span-1 float-left w-full">
                💰170 Tokens
                </div>
            </div>
            <div className="w-40 h-full pt-1">
                <div className="col-span-1 float-left w-full">
                🏅68 Badges
                </div>
            </div>
          </Heading>
          <div className="w-96 h-96 m-auto">
            <Wheel steps={16} angle={st.angle}/>
          </div>
        </div>

        <div className="col-span-1 w-full 2xl:w-1/2 float-right 2xl:pl-6">
          <div>
            <Heading text="Latest Wins"></Heading>
            <div className="h-72">
                <ListItem3 user="usernameX" badge="Award" when="19 seconds ago"/>
                <ListItem3 user="usernameX" badge="Award" when="19 seconds ago"/>
                <ListItem3 user="usernameX" badge="Award" when="19 seconds ago"/>
                <ListItem3 user="usernameX" badge="Award" when="19 seconds ago"/>
                <ListItem3 user="usernameX" badge="Award" when="19 seconds ago"/>
                <ListItem3 user="usernameX" badge="Award" when="19 seconds ago" isLast="true"/>
            </div>
          </div>

          <div className="mt-10">
            <Heading text="Checkpoints"></Heading>
              <div className="w-full mb-5 pb-3 grid grid-cols-4">
                <div className="text-left">
                    <p className="font-iregular">Name</p>
                </div>
                <div className="text-center">
                    <p className="text-iregular">Qt/pax(max)</p>
                </div>
                <div className="text-center">
                    <p className="text-iregular">Qt</p>
                </div>
                <div className="text-right">
                    <p className="text-iregular pr-4">Probability</p>
                </div>
              </div>
              <ListItem4 name="Amazon voucher 10E" maxQnty="1" qnty="10" prob="2.00%"/>
              <ListItem4 name="Amazon voucher 10E" maxQnty="1" qnty="10" prob="2.00%"/>
              <ListItem4 name="Amazon voucher 10E" maxQnty="1" qnty="10" prob="2.00%"/>
              <ListItem4 name="Amazon voucher 10E" maxQnty="1" qnty="10" prob="2.00%"/>
              <ListItem4 name="Amazon voucher 10E" maxQnty="1" qnty="10" prob="2.00%"/>
              <ListItem4 name="Amazon voucher 10E" maxQnty="1" qnty="10" prob="2.00%" isLast="true"/>

          </div>
        </div>
      </div>
    </Dashboard>
  );
}