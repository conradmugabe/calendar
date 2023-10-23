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
          className="w-full border-0 border-b-2 border-gray-200 pb-1 pt-3 text-xl font-normal text-gray-600 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-0"
        />
        <Clock4 size={20} />
        {/* <p>{selectedDay.format("dddd, MMMM DD")}</p> */}
        <span className="material-symbols-outlined text-gray-400">segment</span>
        <textarea
          cols={30}
          rows={3}
          placeholder="Add a description"
          {...register("description")}
          className="resize-none rounded-md bg-gray-100 p-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-0"
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
                  "grid h-6 w-6 cursor-pointer place-content-center rounded-full",
                )}
              >
                {isSelected && (
                  <span className="material-symbols-outlined text-xl font-bold text-white">
                    check
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex w-full flex-col border-t p-4">
        <button className="h-10 self-end rounded bg-blue-500 px-4 text-sm text-white hover:bg-blue-600">
          Save
        </button>
      </div>
    </form>
  );
}
