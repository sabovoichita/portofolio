import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Hello DaisyUI!</h2>
          <p>If you see this, DaisyUI is working.</p>
          <p className="text-red-500">Is this text red?</p>
        </div>
      </div>
    </main>
  );
}
