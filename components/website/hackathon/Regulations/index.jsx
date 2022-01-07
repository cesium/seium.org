import Button from '/components/utils/Button';

export default function Regulations() {
    return (
        <div className="flex flex-col justify-center lg:flex-row bg-secondary pt-20 pb-20 spacing">
            <div className="mt-6 grid gap-y-8 gap-x-2 grid-cols-2 justify-items-center lg:gap-x-8 w-full">
                <div className="mt-2">
                    <h2 className="font-bold text-white text-xl md:text-3xl md:w-full relative">Ready to go? 👉</h2>
                </div>
                <div className="w-80">
                    <Button text="READ THE RULES" customStyle="text-white bg-primary border-tertiary hover:bg-tertiary" />
                </div>
            </div>
        </div>      
    );
}