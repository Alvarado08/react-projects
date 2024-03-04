import { useState } from "react"
import data from "../utils/data"

export default function Accordion() {
    const [tab, setTab] = useState(null);
    const [multiple, setMultiple] = useState(false);
    const [selection, setSelection] = useState([]);

    function handleTab(tabId) {
        setTab(tabId === tab ? null : tabId);
    }

    function handleMultipleTabs(tabId) {
        let cpySelection = [...selection];
        const index = cpySelection.indexOf(tabId);
        if (index === -1) {
            cpySelection.push(tabId);
        } else {
            cpySelection.splice(index, 1);
        }
        setSelection([...cpySelection]);
    }

    function multipleTabs() {
        setMultiple(!multiple);
        setTab(null);
    }

    return (
        <div className="max-w-2xl w-full">
            <h1 className="text-center mb-4">FAQ</h1>
            <button onClick={multipleTabs} className={`btn overflow-hidden relative w-64 ${multiple ? 'bg-red-300' : ''} bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-full before:bg-red-300 before:left-0 before:top-0 before:-translate-y-full hover:before:translate-y-0 before:transition-transform mb-4`}>
                <span className="relative">Multiple Selection</span>
            </button>
            {
                data && data.length > 0 ?
                    data.map(item => {
                        return (
                            <div className="bg-white w-full" key={item.id}>
                                <div className="mb-4">
                                    <div onClick={multiple ? () => handleMultipleTabs(item.id) : () => handleTab(item.id)} className="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300">
                                        {item.title}
                                        <span className="h-6 w-6 flex items-center justify-center text-teal-500">
                                            <svg className="w-3 h-3 fill-current" viewBox="0 -192 469.33333 469" xmlns="http://www.w3.org/2000/svg"><path d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0" /></svg>
                                        </span>
                                    </div>
                                    {
                                        multiple ? selection.indexOf(item.id) !== -1 &&
                                            <div className="p-3">
                                                <span className="text-gray-600">{item.body}</span>
                                            </div>
                                            : tab === item.id &&
                                            <div className="p-3">
                                                <span className="text-gray-600">{item.body}</span>
                                            </div>
                                    }
                                </div>
                            </div>
                        )
                    })
                    : <span>No data</span>
            }
        </div>
    )
}