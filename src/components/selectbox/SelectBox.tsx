"use client"
import React, { Fragment } from 'react'
import {Listbox, Transition} from '@headlessui/react'
import SVG from 'react-inlinesvg'
import { CheckIcon } from '@heroicons/react/20/solid'
type TListboxProps = {
     lists : {
        name : string,
        id : string
    }[],
    value : any,
    onChange : (e :any) => void
} 

const SelectBox : React.FC<TListboxProps> = ({lists, value, onChange}) => {
    // const [selected, setSelected] = React.useState(lists[0])
  return (
    <div className="relative w-fit">
    <Listbox value={value} onChange={onChange}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border border-secondary-50 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="capitalize block truncate text-[14px]">{value.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <SVG
                src='/icons/chevron_down.svg'
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 w-fit focus:outline-none sm:text-sm">
            {lists.map((list, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                  }`
                }
                value={list}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate capitalize ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {list.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  </div>
  )
}

export default SelectBox
