'use client'

import { useState } from "react";
import { pythonHelloWorld } from "../actions";

export default function UsePythonClientComponent() {

    const [output, setOutput] = useState<string>('');
   

    async function onClick() {
        const out: string = await pythonHelloWorld();
        setOutput(out);


    }

    return (
        <div className="flex flex-col gap-2 items-center">
           

            <div className="container mx-auto">
                <div className="mt-2">
                    <textarea
                        rows={15}
                        name="code"
                        id="comment"
                        className="pl-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={output}
                        disabled
                        

                    />
                </div>
            </div>
            <button
                type="button"
                onClick={onClick}
                className="min-w-[10rem] rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                
            >
                Print Zen of Python
            </button>
        </div>
    )

}