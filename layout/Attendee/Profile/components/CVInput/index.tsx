import { useState } from "react";
import { UploadIcon } from "@heroicons/react/solid";

export default function CVInput({ cv, onSubmit }) {
  const [uploading, setUploading] = useState<boolean>(cv == null);
  const [file, setFile] = useState<null | File>(null);
  const [consent, setConsent] = useState<boolean>(false);

  const handleConsentChange = () => {
    setConsent(!consent);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent) {
      return;
    }

    try {
      await onSubmit(file);
      alert("CV sent successfully");
    } catch (error) {
      alert("Error sending CV, please try again later");
    }
  };

  const handleOnFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (!file) return;

    setFile(file);
  };

  return (
    <>
      {uploading ? (
        <form onSubmit={handleSubmit} id="cv-form" className="mt-2">
          <label className="m-auto inline-block w-full cursor-pointer select-none rounded-lg border-[2px] border-dashed border-quinary bg-quinary/5 pr-2 text-center duration-500 hover:bg-quinary/10">
            <div className="py-12">
              <UploadIcon className="m-auto h-12 w-12 flex-shrink-0" />
              <input
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleOnFileChange}
              />
              {file ? (
                <span>{file.name}</span>
              ) : (
                <span>
                  <span className="text-quinary">Browse file</span> from your
                  device
                </span>
              )}
            </div>
          </label>

          <div className="mt-4 block">
            <label className="rounded-sm bg-quinary">
              <input
                className="hidden"
                type="checkbox"
                onChange={handleConsentChange}
              ></input>
              <span
                className={`text-sm text-white ${
                  consent ? "bg-quinary" : "bg-white"
                } select-none border-2 border-quinary px-1 font-ibold`}
              >
                {" "}
                &#10003;
              </span>
            </label>
            <label className="ml-2 select-none text-sm">
              By submitting your CV you are consenting to it being shared with
              the companies you visit during the event
            </label>
          </div>

          <input
            className="m-auto my-4 block h-10 w-28 rounded-full bg-quinary font-iregular hover:cursor-pointer"
            type="submit"
            value="Submit"
            disabled={!consent}
          ></input>
        </form>
      ) : (
        <div>
          <p className="mt-2 font-iregular text-sm">
            You have already submitted your CV.
            <a
              href={cv}
              className="ml-2 cursor-pointer text-blue-700 underline"
              target="_blank"
              rel="noreferrer"
            >
              Your CV
            </a>
          </p>
          <button
            className="m-auto mt-4 block h-10 w-28 rounded-full bg-quinary font-iregular"
            onClick={(_) => setUploading(true)}
          >
            Resubmit
          </button>
        </div>
      )}
    </>
  );
}
