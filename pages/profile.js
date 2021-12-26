import Image from 'next/image'

<<<<<<< HEAD
=======
import Dashboard from "/components/moonstone/Dashboard";
import Form from '/components/moonstone/Form';
import Input from '/components/moonstone/Input';
import FileInput from '/components/moonstone/FileInput';
import Heading from '/components/moonstone/Heading';
>>>>>>> 2609399 (Added cv button)
import Button from '/components/utils/Button';

import Form from '/components/moonstone/utils/Form';
import Input from '/components/moonstone/utils/Input';

import Dashboard from "/components/moonstone/user/utils/Dashboard";
import Heading from '/components/moonstone/user/utils/Heading';

import CodeInput from '/components/moonstone/user/profile/CodeInput';
import CheckpointTracker from '/components/moonstone/user/profile/CheckpointTracker';

import FileInput from '/components/utils/FileInput';

export default function Profile() {
  return (
    <Dashboard href="profile" title="User Profile" description="Hi John, welcome to your profile">
      <div className="grid-cols-2 overflow-hidden mt-12">
        <div className="col-span-1 w-full md:w-1/2 float-left">
          <Heading text="User Profile">
            <div className="w-24">
              <Button bg_color="quinary" fg_color="white" text="Edit"></Button>
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

              <a href="#" className="pl-6 text-quinary h-auto inline-block underline">Reset Password</a>

              <FileInput
                  text="UPLOAD YOUR CV"
                  id="cv"
                  name="cv"
              />
          </Form>
        </div>

        <div className="col-span-1 w-full md:w-1/2 float-right md:pl-6">
          <div>
            <Heading text="Achievements"></Heading>

            <div className="grid-cols-2 overflow-hidden">
              <div className="col-span-1 float-left w-1/2 font-iregular">
                💰170 Tokens
              </div>
              <div className="col-span-1 float-left w-1/2 font-iregular">
                🏅68 Badges
              </div>
            </div>

            <div className="grid-cols-2 overflow-hidden mt-4">
              <div className="col-span-1 float-left w-1/2 font-iregular">
                🏆16 Entries Final Draw
              </div>
              <div className="col-span-1 float-left w-1/2 font-iregular">
                🏁Level 3 Checkpoint
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Heading text="Checkpoints"></Heading>
            <p className="font-iregular"><b className="font-ibold">Level 1</b> 5 companies &rarr; +10 entries</p>
            <p className="font-iregular"><b className="font-ibold">Level 2</b> 10 companies &rarr; +20 entries</p>
            <p className="font-iregular"><b className="font-ibold">Level 3</b> 15 companies &rarr; +40 entries</p>
            <p className="font-iregular"><b className="font-ibold">Level 4</b> 20 companies &rarr; +100 entries</p>

            <CheckpointTracker checkpoints={5} progress={3}/>

            <p className="font-iregular">You just need 4 more bages to go to Level 4 (and win 10+ entries to the final draw). Hurry!</p>
            <CodeInput/>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}