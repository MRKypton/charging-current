interface Variable {
  var_name: string;
  var_type: string;
  var_value: string;
  var_unit: string;
}
// export default function Inputs(prop: Variable): JSX.Element {
//   return (
//     <div className="relative mb-4 flex flex-wrap items-stretch">
//       <span className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 ">
//         {prop.var_name}
//       </span>
//       <input
//         type={prop.var_type}
//         className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
//         aria-label="Volatage"
//         value={prop.var_value}
//         onChange={(e) => {
//           prop.var_value = e.target.value;
//         }}
//       />
//       <span className="flex items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700">
//         {prop.var_unit}
//       </span>
//     </div>
//   );
// }

export default function VariableInput({
  var_name,
  var_type,
  var_value,
  var_unit,
}) {
  // const { data, error } = useSWR('/api/navigation', fetcher)

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>

  return (
    <>
      <div className="relative mb-4 flex flex-wrap items-stretch">
        <span className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 ">
          {var_name}
        </span>
        <input
          type={var_type}
          className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
          aria-label="Volatage"
          value={var_value}
          onChange={(e) => {
            var_value = e.target.value;
          }}
        />
        <span className="flex items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700">
          {var_unit}
        </span>
      </div>
    </>
  );
}
