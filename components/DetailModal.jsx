import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const DetailModal = ({ openDetails, setOpenDetails }) => {
  return (
    <div>
      <Transition appear show={openDetails} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpenDetails(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    User Detail
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="mt-4 flex flex-col gap-3">
                      <div className="flex items-center">
                        <div className="w-24">
                          <h2 className="text-xs font-medium">ID</h2>
                        </div>
                        <div className="bg-gray-200 rounded-md flex-1 p-2">
                          <h2 className="text-xs">1</h2>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24">
                          <h2 className="text-xs font-medium">Name</h2>
                        </div>
                        <div className="bg-gray-200 rounded-md flex-1 p-2">
                          <h2 className="text-xs">Leanne Graham</h2>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24">
                          <h2 className="text-xs font-medium">Username</h2>
                        </div>
                        <div className="bg-gray-200 rounded-md flex-1 p-2">
                          <h2 className="text-xs">Leanne Graham</h2>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24">
                          <h2 className="text-xs font-medium">Email</h2>
                        </div>
                        <div className="bg-gray-200 rounded-md flex-1 p-2">
                          <h2 className="text-xs">Leanne Graham</h2>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24">
                          <h2 className="text-xs font-medium">Address</h2>
                        </div>
                        <div className="bg-gray-200 rounded-md flex-1 p-2">
                          <h2 className="text-xs">Leanne Graham</h2>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24">
                          <h2 className="text-xs font-medium">Phone</h2>
                        </div>
                        <div className="bg-gray-200 rounded-md flex-1 p-2">
                          <h2 className="text-xs">Leanne Graham</h2>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24">
                          <h2 className="text-xs font-medium">Website</h2>
                        </div>
                        <div className="bg-gray-200 rounded-md flex-1 p-2">
                          <h2 className="text-xs">Leanne Graham</h2>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24">
                          <h2 className="text-xs font-medium">Company</h2>
                        </div>
                        <div className="bg-gray-200 rounded-md flex-1 p-2">
                          <h2 className="text-xs">Leanne Graham</h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setOpenDetails(false)}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default DetailModal;
