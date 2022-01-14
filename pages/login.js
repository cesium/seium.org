import Fade from "react-reveal/Fade";

import Button from "/components/utils/Button";
import Card from "/components/utils/Card";

import Return from "/components/moonstone/utils/Return";
import Form from "/components/moonstone/utils/Form";
import Input from "/components/moonstone/utils/Input";

import Title from "/components/moonstone/authentication/Title";
import Text from "/components/moonstone/authentication/Text";

export default function Login() {
    return (
        <div className="overflow-hidden bg-secondary min-h-screen">
            <Return componentStyle="sm:ml-20 mt-20 sm:mt-20" />
            <div className="mt-10 sm:mt-40 flex flex-col items-center justify-center">
                <Title text="Log in" />
                <div className="mt-8">
                    <Form>
                        <Input
                            text="YOUR EMAIL"
                            id="email"
                            name="email"
                            type="email"
                            fgColor="white"
                            bgColor="primary"
                            autoComplete="email"
                        />
                        <Input
                            text="YOUR PASSWORD"
                            id="password"
                            name="password"
                            type="password"
                            fgColor="white"
                            bgColor="primary"
                            autoComplete="current-password"
                        />
                        <Text padding="6" text="Forgot your password?" link="Right this way" href="/forgot-password" />
                        <Button
                            type="submit"
                            text="LET'S GO"
                            customStyle="text-secondary bg-quinary border-quinary"
                        />
                    </Form>
                </div>
                <Text text="Don’t have an account?" link="Signup here" href="/signup" />
                <div className="hidden lg:block absolute bottom-0 right-60">
                    <Fade bottom>
                        <Card img="/images/mascot-footer.svg" alt="MascotFooter" inverted={false}>
                            Just really awesome people here. Please login and prepare to be amazed. 🔮
                        </Card>
                    </Fade>
                </div>
            </div>
        </div>
    );
}