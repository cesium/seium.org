import Fade from "react-reveal/Fade";

import Button from "../components/Button";
import Card from "../components/Card";

import Return from "/components/moonstone/Return";
import Title from "/components/moonstone/Title";
import Form from "/components/moonstone/Form";
import Input from "/components/moonstone/Input";
import Text from "/components/moonstone/Text";


export default function Login() {
    return (
        <div className="overflow-hidden bg-dark_blue min-h-screen">
            <Return top="2" left="40" mt="10" mt_sm="10" />
            <div className="sm:mt-16 flex flex-col items-center justify-center">
                <Title text="Sign up" />

                <Form>
                    <Input
                        text="NAME"
                        id="name"
                        name="name"
                        fgColor="white"
                        bgColor="darkest_blue"
                    />
                    <Input
                        text="EMAIL"
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        fgColor="white"
                        bgColor="darkest_blue"
                    />
                    <Input
                        text="USERNAME"
                        id="username"
                        name="username"
                        fgColor="white"
                        bgColor="darkest_blue"
                    />
                    <Input
                        text="PASSWORD"
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        fgColor="white"
                        bgColor="darkest_blue"
                    />
                    <Input
                        text="CONFIRM PASSWORD"
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        fgColor="white"
                        bgColor="darkest_blue"
                    />
                    <Button
                        type="submit"
                        text="LET'S GO"
                        fg_color="black"
                        bg_color="aqua"
                        border="aqua"
                        padding="32"
                    />
                </Form>
                <Text text="Already have an account?" link="Login here" href="/login" />
                <div className="hidden lg:block absolute bottom-0 right-60">
                    <Fade bottom>
                        <Card img="/images/mascot-footer.svg" alt="MascotFooter" inverted={false}>
                            Very restricted area. You just need to fill the form.
                        </Card>
                    </Fade>
                </div>
            </div>
        </div>
    );
}