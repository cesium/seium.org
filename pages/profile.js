import Image from 'next/image'

import Dashboard from "/components/moonstone/Dashboard";
import Form from '/components/moonstone/Form';
import Input from '/components/moonstone/Input';
import Link from '/components/Link';
import Heading from '/components/moonstone/Heading';
import Button from '/components/Button';

export default function Profile() {
  return (
    <Dashboard href="profile" title="User Profile" description="Hi John, welcome to your profile">
      <div className="grid-cols-2">
        <div>
          <Heading text="User Profile">
            <div className="flex float-right w-24">
              <Button bg_color="aqua" fg_color="white" text="Edit">Edit</Button>
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
              <Link href="#" fgColor="aqua">Reset Password</Link>
          </Form>
        </div>

        <div>
        </div>
      </div>
    </Dashboard>
  );
}