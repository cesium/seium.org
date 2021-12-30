import Button from '/components/utils/Button';

export default function Regulations() {
    return (
        <div className="flex flex-col justify-center lg:flex-row bg-secondary pt-20 pb-20 spacing">
            <div className="grid gap-y-8 gap-x-2 grid-cols-2 justify-items-center lg:gap-x-8 w-full">
                <div className="mt-6">
                    <h2 className="font-bold text-white text-xl md:text-3xl md:w-full relative">Ready to go? 👉</h2>
                </div>
                <div>
                    <Button text="Read the rules" fg_color="white"/>
                </div>
            </div>
        </div>      
    );
}