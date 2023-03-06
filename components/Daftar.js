const Daftar = () => {
  return (
    <div className="max-w-screen-sm xl:max-w-screen-xl mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center xl:flex-row">
          <div className="rounded-xl p-5 shadow-md flex flex-col justify-start items-start">
            <h1 className="text-2xl">Pendaftaran ITKAF 2023</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              necessitatibus saepe ad amet eveniet quaerat placeat iure ducimus
              quam perspiciatis?
            </p>
          </div>
          <div className="p-10" />
          <iframe
            className="rounded-xl p-5 shadow-md"
            src="https://whatsform.com/DGe42E"
            width="60%"
            height="600"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
