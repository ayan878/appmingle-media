import office from "../assets/AppMingle-Media-Office.png";

import outside from "../assets/outside.png";

function AppMingleMedia() {
  return (
    <div className="flex flex-col md:flex-row mx-4 md:mx-8 gap-2 mt-12">
      <div>
        <h1 className="text-blue-900 text-2xl text-center font-bold font-serif p-4">
          AppMingle Media Inside
        </h1>
        <img src={office} alt="office pic" />
      </div>
      <div>
        <h1 className="text-blue-900 text-2xl text-center font-bold font-serif p-4">
          AppMingleMedia Outside
        </h1>
        <img src={outside} alt="office pic" />
      </div>
    </div>
  );
}

export default AppMingleMedia;
