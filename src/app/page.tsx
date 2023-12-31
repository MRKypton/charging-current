"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  function VariableInput({
    var_name,
    var_type,
    var_value,
    var_unit,
  }: {
    var_name: string;
    var_type: string;
    var_value?: string;
    var_unit: string;
    disabled?: boolean;
    onChange?: (e: any) => void;
  }) {
    function checkVarName(varname: string) {
      if (varname === "I") {
        return (
          <>
            I<sub>c</sub>
          </>
        );
      } else if (varname === "V") {
        return (
          <>
            V<sub>Ø</sub>
          </>
        );
      } else if (var_name === "B") {
        return (
          <>
            B<sub>c</sub>
          </>
        );
      } else {
        return varname;
      }
    }

    return (
      <>
        <div className="relative mb-4 flex flex-wrap items-stretch">
          <span className=" font-bold flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base leading-[1.6] text-neutral-700 ">
            {checkVarName(var_name)}
          </span>
          <input
            type={var_type}
            className={`disabled:bg-gray-200 text-center relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none`}
            aria-label="Volatage"
            value={var_value}
            pattern="[0-9]+([,][0-9]{1,2})?"
          />
          <span className="flex font-bold items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base leading-[1.6] text-neutral-700">
            {var_unit}
          </span>
        </div>
      </>
    );
  }
  function SusceptanceSelector({ index }: { index: number }) {
    return (
      <button
        key={index}
        onClick={() => {
          setBc(Susceptance[index]);
          setCurBc(index);
        }}
        className={`px-4 lg:px-8 xl:px-12 font-bold py-3 ${
          curBc === index
            ? `bg-blue-500 text-white shadow-md`
            : `bg-white text-black shadow-lg`
        }  rounded-lg border-2 border-blue-500 transition duration-300 ease-in-out`}
      >
        {index + 1}
      </button>
    );
  }

  const [L, setL] = useState<number>(0);
  const [Ic, setIc] = useState<number>(0);
  const [V, setV] = useState<number>(115);
  const [distance, setDistance] = useState<number>(0);
  const [Bc, setBc] = useState<number>(3.2163);
  const [curBc, setCurBc] = useState<number>(0);
  const Susceptance = [3.2163, 3.123, 4.3156, 4.1464, 3.2238, 4.3326];

  useEffect(() => {
    if (distance > 0) {
      const ic = (V * Bc * Math.pow(10, -3)) / Math.sqrt(3);
      setIc(ic);
      const l = ((V / Math.sqrt(3)) * ic) / 2;
      setL(l);
    } else {
      setIc(0);
      setL(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Bc, distance]);

  return (
    <main className="bg-white w-screen h-auto flex justify-center my-10">
      <div className="flex-col justify-start gap-6 rounded-lg shadow-lg w-full mx-6">
        <h1 className="text-center text-4xl text-blue-500 font-bold drop-shadow-md mb-6">
          Charging current calculator
        </h1>
        <div className="flex flex-col md:flex-row">
          <section
            id="params"
            className="flex w-auto md:w-1/2 flex-col mt-4 justify-start px-6 gap-2 text-center"
          >
            <div className="relative mb-4 flex flex-wrap items-stretch">
              <span className=" font-bold flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base leading-[1.6] text-neutral-700 ">
                Distance
              </span>
              <input
                type={"number"}
                className={`disabled:bg-gray-200 text-center relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none`}
                aria-label="Volatage"
                placeholder="ระยะปลายสาย"
                onChange={(e) => {
                  setDistance(parseFloat(e.target.value));
                }}
                pattern="[0-9]+([,][0-9]{1,2})?"
              />
              <span className="flex font-bold items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base leading-[1.6] text-neutral-700">
                km
              </span>
            </div>
            <VariableInput
              var_name="Arc lenght"
              var_type="text"
              var_value={(L * distance).toFixed(2).toLocaleString()}
              var_unit="cm"
            />
            <VariableInput
              var_name="I"
              var_type="text"
              var_value={(Ic * distance).toFixed(5).toLocaleString()}
              var_unit="A"
            />
            <VariableInput
              var_name="V"
              var_type="text"
              var_value={V.toLocaleString()}
              var_unit="kV"
            />
            <VariableInput
              var_name="B"
              var_type="text"
              var_value={(Bc * distance).toFixed(5).toLocaleString()}
              var_unit="μ℧"
            />
            <div className="my-2">
              <h2 className="text-xl font-bold drop-shadow-md">Type of line</h2>
              <p className="px-3 py-2 bg-gray-200 rounded-lg shadow-md">
                เรียงลำดับ 1 - 6 จากบนลงล่าง
              </p>
            </div>
            <div className="flex justify-around gap-3">
              {Susceptance.map((_, index) => {
                return <SusceptanceSelector key={index} index={index} />;
              })}
            </div>
          </section>
          <section id="standard" className="w-auto md:w-1/2">
            <Image
              src="/PEA_structure.jpg"
              alt="Structure standard"
              className="w-11/1 mt-6 justify-items-center"
              width={2000}
              height={1}
              priority
            />
          </section>
        </div>
      </div>
    </main>
  );
}
