export default function Facilities_tittle({ tittle, about }) {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col items-center py-10">
          <p className="text-4xl md:text-6xl font-serif">{tittle}</p>
          <div className="w-full flex justify-center py-8 px-3">
            <p className="text-xl md:text-2xl text-center">{about}</p>
          </div>
        </div>
      </div>
    </>
  );
}
