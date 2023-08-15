import { useGameData } from '@/lib/useGameData';
import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function AdventureGame() {
    const [commands, setCommands] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null)
    const { data, error, isLoading, updateGameData } = useGameData(commands)
    
    useEffect(() => {
        inputRef.current!.focus()
    },[inputRef, commands, data])

    if (error) {
        return <div>failed to load</div>
    }

    const handleSendBtn = async () => {
        const input = inputRef.current?.value.trim()

        if (!input) return

        const newCommands = [...commands, input]
        const current_data = await updateGameData(newCommands)


        if (current_data.includes("Try Again!")) {
            setCommands(newCommands)
            await delay(3000)
            setCommands([])
        } else {
            setCommands(newCommands)
        }

        inputRef.current!.value = ''
        inputRef.current!.focus()
    }

    const handleEnterKeyUp = (event : React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSendBtn();
        }
    };

  return (
    <>
        {/* adventure text */}
        <div className="overflow-auto h-56">
            {data? data.map((ins: string) =>(
                <p key={uuidv4()}>{ins}</p>
            )):<p>Communicating with a droid...</p>}
        </div>
        {/* send button */}
        <div className="flex items-center border border-slate-500 py-2 px-4 rounded-lg mt-3">
            <input ref={inputRef} className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight text-slate-50 focus:outline-none" type="text" 
            placeholder={isLoading? "Loading...": "Command"} 
            onKeyUp={handleEnterKeyUp}
            disabled={isLoading || data?.includes("Try Again!")}
            />
            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700
             border-slate-700 hover:border-teal-700 
             text-sm border-4 text-white py-1 px-2 rounded" type="button"
            onClick={handleSendBtn}
            disabled={isLoading || data?.includes("Try Again!")}
            >
            Send
            </button>
        </div>
    </>
  )
}

export function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  