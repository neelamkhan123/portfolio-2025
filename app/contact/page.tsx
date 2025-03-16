import Footer from "../components/Footer/Footer";

export default function Contact() {
  return (
    <>
      <div className="w-full mt-28 flex justify-center items-center text-white">
        <form
          method="POST"
          action="https://formsubmit.co/neelamkhanwork@gmail.com"
          className="w-full lg:w-2/3 xl:w-1/2 bg-slate-800 shadow-2xl rounded-2xl p-4 flex flex-col space-y-6 mx-10 lg:mx-0"
        >
          <div className="flex flex-col space-y-2">
            <label className="text-lg lg:text-2xl" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="outline-none border-none bg-gray-400 focus:bg-gray-300 p-2 text-xs lg:text-base text-black rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg lg:text-2xl" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="outline-none border-none bg-gray-400 focus:bg-gray-300 p-2 text-xs lg:text-base text-black rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg lg:text-2xl" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="outline-none border-none bg-gray-400 focus:bg-gray-300 p-2 text-xs lg:text-base text-black rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg lg:text-2xl" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={10}
              className="outline-none border-none bg-gray-400 focus:bg-gray-300 p-2 text-xs lg:text-base text-black rounded-lg shadow-2xl"
            ></textarea>
          </div>

          <button
            className="w-full font-bold bg-slate-950 py-2 lg:text-xl rounded-lg shadow-2xl cursor-pointer hover:bg-slate-900 hover:shadow-none transition-all duration-300 ease-in-out"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
