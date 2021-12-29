export default function FileInput({ id,  text, name }) {
    return (
        <div>
            <label htmlFor={id} className="font-iregular pl-6 block text-sm">
                {text}
            </label>
            <div className="w-full mt-2 border-2 border-aqua rounded-full">
                <div>
                    <input
                        id={id}
                        name={name}
                        type="file"
                        className="border-aqua rounded-full border-2 hidden"
                    />

                    <div class="bg-aqua border-2 border-aqua rounded-full w-32 text-center" id={id}>Upload File</div>
                </div>
        </div>
        </div>
    );
}