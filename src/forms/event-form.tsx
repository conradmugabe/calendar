import { useForm } from "react-hook-form";
import classnames from "classnames";
import { AlignLeft, Clock4 } from "lucide-react";

const labels = [
  "bg-red-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-pink-500",
];

type FormSchema = {
  title: string;
  description: string;
  label: string;
};

type Props = {
  onClose: () => void;
};

export function CreateEventForm({ onClose }: Props) {
  const { register, setValue, watch, handleSubmit, reset } =
    useForm<FormSchema>({
      defaultValues: {},
    });
  const selectedLabel = watch("label");

  const onSubmit = (data: FormSchema) => {
    reset();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1/5 gap-y-7 p-4">
        <div />
        <input
          type="text"
          {...register("title")}
          placeholder="Add title"
          className="pt-3 pb-1 border-0 text-gray-600 text-xl font-normal w-full border-b-2 border-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-blue-500"
        />
        <Clock4 size={20} />
        {/* <p>{selectedDay.format("dddd, MMMM DD")}</p> */}
        <span className="material-symbols-outlined text-gray-400">segment</span>
        <textarea
          cols={30}
          rows={3}
          placeholder="Add a description"
          {...register("description")}
          className="bg-gray-100 rounded-md text-sm p-2 resize-none focus:outline-none focus:ring-0 focus:border-blue-500"
        />
        <AlignLeft size={20} />
        <div className="flex items-center gap-1">
          {labels.map((label) => {
            const isSelected = label === selectedLabel;
            return (
              <div
                key={label}
                onClick={() => setValue("label", label)}
                className={classnames(
                  label,
                  "h-6 w-6 rounded-full cursor-pointer grid place-content-center",
                )}
              >
                {isSelected && (
                  <span className="material-symbols-outlined text-white text-xl font-bold">
                    check
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-4 border-t w-full flex flex-col">
        <button className="self-end text-white bg-blue-500 h-10 px-4 rounded text-sm hover:bg-blue-600">
          Save
        </button>
      </div>
    </form>
  );
}
