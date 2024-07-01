export default function Contact() {
    return <main className="min-h-[calc(100vh-10rem)]">
        <div className="absolute top-0 bg-[#f43e43] w-full h-16">
        </div>
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 pt-16 pb-8 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">For further information and booking feel free to contact us!</p>
                </div>
            </div>
            <div className="flex flex-row  w-full justify-center gap-16 ">
                <div className="flex flex-col   w-60">
                    <div className="text-center">
                        <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Thomas</h2>
                            <div className="w-12 h-1 bg-[#f43e43] rounded mt-2 mb-4"></div>
                            <p className="text-base">Phone :  08123456789</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col   w-60">
                    <div className="text-center">
                        <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Sekar</h2>
                            <div className="w-12 h-1 bg-[#f43e43] rounded mt-2 mb-4"></div>
                            <p className="text-base">Phone : 08164829372</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    </main >
}