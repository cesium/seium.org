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
            <Return />
            <div className="mt-10 sm:mt-40 flex flex-col items-center justify-center">
                <Title text="Log in" />

                <Form>
                    <Input
                        text="YOUR EMAIL"
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                    />
                    <Input
                        text="YOUR PASSWORD"
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <Text padding="6" text="Forgot your password?" link="Right this way" href="#" />
                    <Button
                        type="submit"
                        text="LET'S GO"
                        fg_color="black"
                        bg_color="aqua"
                        border="aqua"
                        padding="32"
                    />
                </Form>
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