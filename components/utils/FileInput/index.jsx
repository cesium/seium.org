export default function FileInput({ id,  text, name }) {
    return (
        <div>
            <label htmlFor={id} className="font-iregular pl-6 block text-sm">
                {text}
            </label>
            <div className="w-full mt-2 border-2 border-quinary rounded-full">
                <div>
                    <input
                        id={id}
                        name={name}
                        type="file"
                        className="border-quinary rounded-full border-2 opacity-0 w-32 absolute"
                    />

                    <div class="bg-quinary border-2 border-quinary rounded-full w-32 text-center" id={id}>Upload File</div>
                </div>
        </div>
        </div>
    );
}