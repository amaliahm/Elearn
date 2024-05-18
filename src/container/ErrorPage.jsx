const ErrorPage = () => {
    return (
        <>
            <main className="main-error">
                <section className="section-error">
                    <div className="flex flex-col justify-center align-center absolute inset-0 z-[-1] lg:flex-row p-0">
                        <div className="flex align-center justify-center h-full w-full p-0 m-0">
                            <div className="animated-bg-error h-full w-full lg:size-[85%] 3xl:size-full"></div>
                        </div>
                        <div className="flex align-center justify-center h-full w-full p-0 m-0">
                            <div className="animated-bg-error h-full w-full lg:size-[85%] 3xl:size-full"></div>
                        </div>
                    </div>
                    <h1 className="text-slate-400 text-[130px] font-bold leading-[152px]">
                        404
                    </h1>
                    <h2 className="heading2 text-center text-white">
                        The page does not exist
                    </h2>
                    <div className="my-10 w-full md:w-[70%]">
                        <p className="base-regular text-center text-white-800">
                            Sorry! We couldn’t find the page.
                        </p>
                    </div>
                    <a className="flex-center min-h-[48px] cursor-pointer rounded-full bg-[var(--main-color)] px-6 py-3  text-[14px] font-semibold leading-[16px] text-white"
                      href="/"
                    >
                        Go back to Homepage →
                    </a>
                </section> 
            </main>
        </>
    )
}

export default ErrorPage