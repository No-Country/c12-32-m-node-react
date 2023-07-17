import { IoReturnUpBackOutline } from 'react-icons/io5';
import { GoKebabHorizontal, GoShareAndroid } from 'react-icons/go';
import exampleImage from '../assets/gatito.jpg'
import { IoMdHeartEmpty } from 'react-icons/io';
import { AiOutlineMessage } from 'react-icons/ai';
import exampleTwoSlider from '../assets/perro.jpg'
import exampleSlider from '../assets/gatito.jpg'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import testPhoto from '../assets/testPhoto.jpg'
import '../App.css'
const Publication = () => {



    return (

        <div className=" flex h-heightPublicationVh">
            <section className="mainContainSlider mainContainSlider  bg-black w-2/4 h-full">
                <Carousel showArrows={true} dynamicHeight={true} showThumbs={false} infiniteLoop={true} className='flex justify-center items-center'>
                    <div className="h-full">
                        <img src={exampleSlider} alt="" className="object-contain h-heightPublicationVh w-full" />
                    </div>
                    <div className="w-full h-full">
                        <img src={exampleTwoSlider} alt="" className="object-contain h-heightPublicationVh w-full" />
                    </div>
                    <div className="w-full h-full">
                        <img src={testPhoto} alt="" className="object-contain h-heightPublicationVh w-full" />
                    </div>
                </Carousel>
            </section>

            {/* section Comment */}

            <section className="w-2/4 px-5 relative">
                <div className="w-full h-20 flex justify-between items-center">
                    <img src={exampleImage} alt="" className='h-12 w-12 rounded-full' />
                    <div className='flex justify-center items-center h-full gap-4 text-2xl font-bold'>
                        <IoReturnUpBackOutline />
                        <GoKebabHorizontal />
                    </div>
                </div>
                <div className='w-11/12 m-auto text-justify text-sm'>
                    <p>
                        Quería pedir su colaboración para que Toby pueda volver a casa,
                        Todos estamos preocupados! la ultima vez que lo vimos fue en la plaza Francia, Recoleta. Si lo viste o sabes algo, déjalo en los comentarios.
                    </p>
                    <p className='my-4 text-FsTextPublicationTime text-slate-500'>
                        publicado hace 2 semanas
                    </p>
                </div>
                <div className='w-full h-auto bg-customBgNavBar absolute bottom-0 left-0'>
                    <div className='h-20 flex items-center gap-3 text-3xl px-7'>
                        <IoMdHeartEmpty />
                        <AiOutlineMessage />
                        <GoShareAndroid />
                    </div>
                    <input type="text" className='w-full h-10 bg-customBgComment' placeholder='  Agrega tu comentario...' />
                </div>
            </section>
        </div >

    );
};

export default Publication;