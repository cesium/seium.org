import Image from 'next/image'

import Button from '/components/utils/Button';

import Form from '/components/moonstone/utils/Form';
import Input from '/components/moonstone/utils/Input';

import Dashboard from "/components/moonstone/user/utils/Dashboard";
import Heading from '/components/moonstone/user/utils/Heading';

import CodeInput from '/components/moonstone/user/profile/CodeInput';
import CheckpointTracker from '/components/moonstone/user/profile/CheckpointTracker';

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

          </Form>
        </div>

        <div className="mt-10 md:mt-0 col-span-1 w-full md:w-1/2 float-right md:pl-6">
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

          <div className="mt-10">
            <Heading text="Upload CV"></Heading> 
            <p className="font-iregular"> Get a chance to win a spot at the Coporate dinner by submiting you CV!</p>

            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-quinary hover:text-quintary">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                      PDF
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}