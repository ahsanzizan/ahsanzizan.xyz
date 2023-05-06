
export default function Footer() {
    return (
        <div className="bg-secondary mx-auto w-full py-10 mt-72 text-[#222831] text-center">
            <div className="block text-center mb-8">
                <h1 className="font-semibold text-3xl mb-5">Based In</h1>
                <p className="font-semibold text-xs">Rempoa, East Ciputatat, South Tangerang City, Banten, Indonesia</p>
            </div>
            <div className="flex justify-center gap-9 mb-10">
                <a href="https://www.linkedin.com/in/ahsan-azizan-33908b250/" className="text-[1.5em]"><i className='bx bxl-linkedin'></i></a>
                <a href="https://www.instagram.com/ahsanaazizan" className="text-[1.5em]"><i className='bx bxl-instagram'></i></a>
                <a href="https://github.com/ahsanAazizan" className="text-[1.5em]"><i className='bx bxl-github' ></i></a>
                <a href="https://www.twitter.com/ahsanaz461" className="text-[1.5em]"><i className='bx bxl-twitter' ></i></a>
            </div>
            <h3 className="font-semibold text-sm">
                © 2023 Ahsan Azizan
            </h3>
        </div>
    )
}