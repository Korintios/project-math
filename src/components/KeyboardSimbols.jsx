export default function KeyboardSimbols ({insertSimbol}) {
    return (
        <div className="grid grid-cols-4 gap-4 mt-2">
            <button type="button" onClick={() => insertSimbol('sqrt(')} className="text-neutral-800 dark:text-neutral-400 btn bg-[#e5e6e6] hover:bg-[#c6c7c7] dark:bg-[#353535] dark:hover:bg-[#404040] rounded">√</button>
            <button type="button" onClick={() => insertSimbol('^')} className="dark:text-neutral-400 btn bg-[#e5e6e6] hover:bg-[#c6c7c7] dark:bg-[#353535] dark:hover:bg-[#404040] rounded">^</button>
            <button type="button" onClick={() => insertSimbol('log(')} className="dark:text-neutral-400 btn bg-[#e5e6e6] hover:bg-[#c6c7c7] dark:bg-[#353535] dark:hover:bg-[#404040] rounded">log</button>
            <button type="button" onClick={() => insertSimbol('ln(')} className="dark:text-neutral-400 btn bg-[#e5e6e6] hover:bg-[#c6c7c7] dark:bg-[#353535] dark:hover:bg-[#404040] rounded">ln</button>
            <button type="button" onClick={() => insertSimbol('sin(')} className="dark:text-neutral-400 btn bg-[#e5e6e6] hover:bg-[#c6c7c7] dark:bg-[#353535] dark:hover:bg-[#404040] rounded">sin</button>
            <button type="button" onClick={() => insertSimbol('cos(')} className="dark:text-neutral-400 btn bg-[#e5e6e6] hover:bg-[#c6c7c7] dark:bg-[#353535] dark:hover:bg-[#404040] rounded">cos</button>
            <button type="button" onClick={() => insertSimbol('tan(')} className="dark:text-neutral-400 btn bg-[#e5e6e6] hover:bg-[#c6c7c7] dark:bg-[#353535] dark:hover:bg-[#404040] rounded">tan</button>
            <button type="button" onClick={() => insertSimbol('e')} className="dark:text-neutral-400 btn bg-[#e5e6e6] hover:bg-[#c6c7c7] dark:bg-[#353535] dark:hover:bg-[#404040] rounded">e</button>
        </div>
    )
}