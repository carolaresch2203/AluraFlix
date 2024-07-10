import { BsLinkedin, BsGithub, BsFillBriefcaseFill } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className='text-white px-8 md:px-10 lg:px-12 2xl:px-[68px] py-8 mt-6'>
            <div className='flex flex-wrap justify-between opacity-80'>
                <ul className='flex gap-6'>
                    <li>
                        <a href="https://www.linkedin.com/in/carolina-resch-dev/" target="_blank" >
                            <BsLinkedin size={16} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/carolaresch2203" target="_blank">
                            <BsGithub size={16} />
                        </a>
                    </li>
                    <li>
                        <a href="http://mi-portafolio-rouge.vercel.app" target="_blank">
                            <BsFillBriefcaseFill size={16}/>
                        </a>
                    </li>
                </ul>
                <div>
                    <p className='text-xs font-medium'>Made with 💙 by Caro</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
