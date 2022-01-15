import Button from '/components/utils/Button';

export default function Regulations() {
    return (
        <div className="sm:flex sm:flex-col justify-center lg:flex-row bg-secondary pt-20 pb-20 spacing">
            <div className="sm:mt-6 text-center sm:grid gap-y-8 sm:gap-x-2 sm:grid-cols-2 sm:justify-items-center lg:gap-x-8 w-full">
                <div className="sm:mt-2">
                    <h2 className="font-bold text-white text-xl md:text-3xl md:w-full relative">Ready to go? 👉</h2>
                </div>
                <div className="mt-6 sm:mt-0 sm:w-80">
                    <Button text="READ THE RULES" customStyle="text-white bg-primary border-tertiary hover:bg-tertiary" />
                </div>
            </div>    
        </div>   
    );
}