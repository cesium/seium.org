import Image from 'next/image'

import Dashboard from "/components/moonstone/Dashboard";
import Form from '/components/moonstone/Form';
import Input from '/components/moonstone/Input';
import Heading from '/components/moonstone/Heading';
import Button from '/components/utils/Button';
import CodeInput from '/components/moonstone/CodeInput';
import CheckpointTracker from '/components/moonstone/CheckpointTracker';
import ListItem3 from '../components/moonstone/ListItem3Cols';
import ListItem4 from '../components/moonstone/ListItem4Cols';

export default function Profile() {
  return (
    <Dashboard href="sweel" title="Wheel" description="Spin the wheel and win awards!">
      <div className="grid-cols-2 overflow-hidden">
        <div className="col-span-1 w-full md:w-1/2 float-left">
          <Heading text="Achievements">
            <div className="w-40 h-full">
                <div className="col-span-1 float-left w-full">
                💰170 Tokens
                </div>
            </div>
            <div className="w-40 h-full">
                <div className="col-span-1 float-left w-full">
                🏅68 Badges
                </div>
            </div>
          </Heading>
          <div className="pl-6">          
            <Image src="/images/speakers/joaooliveira.png" className="rounded-full overflow-hidden" width="220" height="220" />
          </div>
          <Form>
              <Input
                  text="NAME"
                  id="name"
                  name="name"
                  bgColor="white"
                  fgColor="black"
              />
              <Input
                  text="USERNAME"
                  id="username"
                  name="username"
                  bgColor="white"
                  fgColor="black"
              />
              <Input
                  text="PASSWORD"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  bgColor="white"
                  fgColor="black"
              />
              <a href="#" className="pl-6 text-aqua h-auto inline-block underline">Reset Password</a>
          </Form>
        </div>

        <div className="col-span-1 w-full md:w-1/2 float-right md:pl-6">
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
              <div className={`w-full mb-5 pb-3 grid grid-cols-4`}>
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