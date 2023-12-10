// @ts-ignore

import UsePythonClientComponent from "./components/usePythonClientComponent";

export default function Home() {



  return (
    <main className="min-h-screen p-5 bg-white py-2 flex-row justify-center gap-2" >
      <h2 className="text-gray-900 my-10 font-semibold text-xl text-center ">use python</h2>
      <UsePythonClientComponent></UsePythonClientComponent>
      <form className="mt-2 text-center self-center ">
        
        <button
          className="min-w-[10rem] rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          formAction={async () => { 
            'use python'
            import this
            import codecs
            with open('./public/readme.txt', 'w') as f:
                f.write(codecs.encode(this.s, 'rot13'))
            }}>
          Save to File
        </button>
      </form>

    </main>
  )
}