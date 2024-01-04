import { useState } from "react";
import { UploadIcon, CheckCircleIcon } from "@heroicons/react/solid";

export default function UploadSection({ cv, onSubmit }) {
  const [uploading, setUploading] = useState<boolean>(cv == null);
  const [file, setFile] = useState<null | File>(null);
  const [consent, setConsent] = useState<boolean>(false);

  const handleConsentChange = () => {
    setConsent(!consent);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent || !file) {
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

    if (file.type !== "application/pdf") return;

    setFile(file);
  };

  const onDragOver = (e) => {
    let event = e as Event;
    event.stopPropagation();
    event.preventDefault();
  };

  const onFileDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") return;

    setFile(file);
  };

  return (
    <>
      {uploading ? (
        <form onSubmit={handleSubmit} id="cv-form" className="mt-2">
          <label className="m-auto inline-block h-[50vh] w-full cursor-pointer select-none rounded-lg border-[3px] border-dashed border-quinary bg-quinary/5 text-center duration-500 hover:bg-quinary/10">
            <div
              className="flex h-full flex-col items-center justify-center"
              onDragOver={onDragOver}
              onDrop={onFileDrop}
            >
              {file ? (
                <CheckCircleIcon className="h-12 w-12 flex-shrink-0" />
              ) : (
                <UploadIcon className="h-12 w-12 flex-shrink-0" />
              )}
              <input
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleOnFileChange}
              />
              {file ? (
                <>
                  <span className="text-lg font-medium">Ready to upload</span>
                  <p className="text-quinary">{file.name}</p>
                </>
              ) : (
                <>
                  <span className="text-lg font-medium">
                    Drop your PDF here
                  </span>
                  <p>
                    <span className="text-quinary">Browse file</span> from your
                    device
                  </p>
                </>
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
              the companies present in the event.
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
