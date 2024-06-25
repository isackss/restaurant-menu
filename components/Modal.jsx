const Modal = ({ modal, setModal }) => {
  return (
    <div className="absolute z-10">
      {/* <button
        type="button"
        className="h-10 rounded-md bg-gray-900 px-4 text-sm font-medium text-white"
        onClick={() => setModal(!modal)}
      >
        Open Modal
      </button> */}
      {modal && (
        <div className="fixed left-0 top-0 flex size-full items-center justify-center bg-gray-300/50">
          <div className="max-w-[460px] rounded-md bg-white py-2 shadow-lg">
            <h2 className="mb-4 border-b border-gray-300 px-4 py-3 text-sm font-medium text-gray-900">
              PRÓXIMOS EVENTOS
            </h2>
            <div className="px-4 pb-4">
              {/* <p className="text-sm font-medium text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                quod quis eaque aliquam necessitatibus vel eligendi laboriosam
                optio quisquam sunt.
              </p> */}

              <video autoPlay playsInline>
                <source src="/assets/img/jazznight.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="flex items-center justify-between border-t border-gray-300 px-4 pt-2">
              <div className="text-sm font-medium text-gray-700"></div>
              <button
                type="button"
                className="h-8 rounded-md bg-gray-700 px-2 text-sm text-white"
                onClick={() => setModal(!modal)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
