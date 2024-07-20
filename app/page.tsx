
import Image from "next/image";
import Carousel from "@/components/carousel";
import Cover from "@/components/cover";
import SectionContainer from "@/components/section-container";
import Link from "next/link";
import React from "react";

const carouselContent=[
  {
    img:{src:'/images/family-interior.webp'},
    content:{
      heading:'Redifine Your *Living* Experience',
      paragraph:'We redefine the way people experience interior design and finishing by offering innovative solutions that inspire creativity and elevate living spaces',
      CTA:{text:'Book For Consultation'}
    },
  },
  {
    img:{src:'/images/fancy-interior.webp'},
    content:{
      heading:'Experience The Joy Of *Comfort*',
      paragraph:'We strive to create spaces that not only reflect your style but also enhance your happiness and well-being',
      CTA:{text:'Book For Consultation'}
    },
  }
]

const premiumServicesCover=  {
    img:{src:'/images/fancy-interior-2.webp'},
    content:{
      heading:'Explore Our *Premium* *Services* *Tailored* To Your Needs',
      paragraph:'Our skilled staff of professionals are committed to delivering tailored solutions that enhance space and ambience and bring vision to life',
      CTA:{text:'Contact Us Now'}
    }
  }
const bookConsultationCover=  {
    img:{src:'/images/consultation.webp'},
    content:{
      heading:'Book For *Consultation*',
      paragraph:'The first step to creating your dream space starts by talking to our consultant. From interior advice to personalized solutions, we are here to guide you every step of the way',
      CTA:{text:'Book Us Now'}
    }
  }

const aboutImages = [
  '/images/about-1.webp',
  '/images/about-2.webp',
  '/images/about-3.webp',
]

const services = [
  {
    img: '/images/titles-img.webp',
    title: 'Tile Installation',
    desc: 'Elevate your space with our tiling services. we have the perfect tiles to suit your taste and budget. From porcelain and ceramic tiles to glossy and Matt finishes, our experts add sophistication and charm to any room',
  },
  {
    img: '/images/lightimg.webp',
    title: 'Lighting Installation',
    desc: 'Illuminate your living room with our lighting solutions that enhance your ambience and bring sparkles to any space. From elegant chandeliers to energy-efficient LED fixtures',
  },
  {
    img: '/images/paintimg.webp',
    title: 'Interior And Exterior Painting',
    desc: 'Vitalize your space with our painting services. Our expert team of painters brings creativity and precision to every brushstroke, transforming dull walls into vibrant works of art',
  },
  {
    img: '/images/ceilings.webp',    
    title: 'Plaster of Paris Ceilings',
    desc: 'Beautify your ceiling into a masterpiece with our ceiling services. From intricate patterns to sleek modern styles that reflects your wonderful lighting and hanging chandelier choices',
  },
  {
    img: '/images/Pop.webp',
    title: 'Security Doors',
    desc: 'Step into a world of your own through our Turkish doors. Unlock a new atmosphere of elegance and style',
  },
  {
    img: '/images/cctv-img.webp',
    title: 'Security And Safety',
    desc: 'Protect your peace of mind: secure your home with our professional CCTV installation solutions for enhanced security and surveillance',
  }
];


const features = [
  {
    img: '/images/selective.webp',
    title: 'Comprehensive Selection',
    desc: 'Explore a diverse range of cutting-edge solutions as tiles laying, innovative P.O.P ceiling designs, vibrant paints, illuminating lighting fixtures, and elegant doors – all under one roof.',
  },
  {
    img: '/images/quality-assurance-1-1.webp',
    title: 'Quality Assurance',
    desc: 'Rest assured knowing that every product offered by Chrysans undergoes rigorous quality checks to ensure superior craftsmanship and durability.',
  },
  {
    img: '/images/repair-tool.webp',
    title: 'Exceptional Service',
    desc: 'Experience unmatched customer service and support at every step from inception to completion. From product selection to after-sales assistance to installations',
  }
];


const brandPartners=[
  'Kanuf.jpg',
  'WA-union.webp',
  'Neuce.webp',
  'eglo-img.webp',
  'coralimg.webp',
  'vsa-imgd.webp',
  'sahs.jpg',
  'twyford.png',

]

const products=[
  {name:'Paint-1',img:'/images/NEUCE-PAINT-BELNEUCE-20l-InteriorExterior-Acrylic-Paint.webp'},
  {name:'Paint-1',img:'/images/NEUCE-PAINT-BELNEUCE-20l-InteriorExterior-Acrylic-Paint.webp'},
  {name:'Paint-1',img:'/images/NEUCE-PAINT-BELNEUCE-20l-InteriorExterior-Acrylic-Paint.webp'},
  {name:'Paint-1',img:'/images/NEUCE-PAINT-BELNEUCE-20l-InteriorExterior-Acrylic-Paint.webp'},
  {name:'Paint-1',img:'/images/NEUCE-PAINT-BELNEUCE-20l-InteriorExterior-Acrylic-Paint.webp'},
  {name:'Paint-1',img:'/images/NEUCE-PAINT-BELNEUCE-20l-InteriorExterior-Acrylic-Paint.webp'},
  {name:'Paint-1',img:'/images/NEUCE-PAINT-BELNEUCE-20l-InteriorExterior-Acrylic-Paint.webp'},
  {name:'Paint-1',img:'/images/NEUCE-PAINT-BELNEUCE-20l-InteriorExterior-Acrylic-Paint.webp'},
  {name:'Paint-1',img:'/images/NEUCE-PAINT-BELNEUCE-20l-InteriorExterior-Acrylic-Paint.webp'},
  {name:'Paint-1',img:'/images/NEUCE-PAINT-BELNEUCE-20l-InteriorExterior-Acrylic-Paint.webp'},
  {name:'Paint-1',img:'/images/NEUCE-PAINT-BELNEUCE-20l-InteriorExterior-Acrylic-Paint.webp'},
]


export default function Home() {
  return (
    <main className=" min-h-screen pb-20">
      <Carousel>
        {carouselContent.map(contents=>
          <React.Fragment key={contents.content.heading}>
            <Cover {...contents}/>
          </React.Fragment>
        )}
      </Carousel>
      <SectionContainer 
        id="about" 
        heading="About *Chrysans* Decor"
        paragraph="Chrysans Décor excels in interior construction designs, providing consultation, specialized services and products in tile installations, interior and exterior painting, P.O.P ceilings, lighting solutions, space partitioning, Turkish security doors, CCTV and digital security. Our focus on excellence and innovation ensures top-notch results that exceeds our clients’ expectations, giving your space that topmost luxurious and sophisticated touch"
      >
        <div className="flex gap-3 centered">
          {aboutImages.map(img=>(
            <div className='rounded-full py-5 flex size-[110px]overflow-hidden' key={img}>
              <Image className='object-cover flex-1 ' src={img} width={110} height={110} alt='about Crysans Decor' />
            </div>
          ))}
        </div>
      </SectionContainer>
      
      <SectionContainer 
        id="services" 
        heading="Our *Cutting-Edge* Services"
        paragraph="Chrysans Décor combines craftsmanship, attention to details, and client-centered approach to create environments that are both functional and visually stunning. With a reputation for reliability and customer satisfaction, Chrysans Décor continues to be a trusted partner for interior design projects of all scale"
      >
        <div className=" flex gap-5 centered flex-wrap pt-2">
          {services.map(service=>(
            <article className='flex-col flex-1 gap-1 centered min-w-[350px]' key={service.title}>
              <Image className="object-cover rounded-md" src={service.img} alt={`Chrysans ${service.title} Service`} width={500} height={400}/>`
              <h2 className='text-2xl -mt-5 font-medium'>{service.title}</h2>
              <p className='text-center'>{service.desc}</p>
              <Link href='#'className=" font-semibold hover-underline-primary underline">View more</Link>
            </article>
          ))}
        </div>
      </SectionContainer>
      
      <Cover {...premiumServicesCover}/>

      <SectionContainer id="whychooseus" heading="Why *Clients* Choose Us"
        paragraph="With a collection of over a decade experienced staff in interior consultation and services, We provide unparalleled interior designs that transcends our clients’ expectations. And here's why:"
      >
      
      <div className=" flex gap-5 centered flex-wrap pt-2">
      {features.map(feature=>(
        <article className='flex-col gap-1 centered flex-1 min-w-[350px]' >
          <Image src={feature.img} width={200} height={200} alt={feature.title+" icon"} />       
          <h2 className='text-2xl  font-medium'>{feature.title}</h2>
          <p className='text-center'>{feature.desc}</p>
        </article>
      ))}
      </div>
      </SectionContainer>
      
      <Cover {...bookConsultationCover}/>

      <SectionContainer id="partners" heading="*Brands* Partners" 
        paragraph="Our partnership with renowned brands makes it possible to experience luxury without sweat"
      >
        <div className="flex flex-wrap centered max-w-[600px] lg:max-w-full ">
          {brandPartners.map(partner=>(
            <div key={partner} className='flex-1 h-[125px] centered max-w-[250px] min-w-[250px]  border'>
              <Image
                width={200}
                height={100} 
                src={`/images/partners/${partner}`} 
                alt='brand partner'
                className=" max-[200px] flex-1 h-auto"
              />
            </div>
            ))}
        </div>
      </SectionContainer>
      <SectionContainer id="products" heading="Our *Products*" 
        paragraph='Many desktop publishing packages and web page'
      >
        <Carousel finite slideDuration={10000} slideWidth={400}>{
          products.map(product=>(
            <div className='centered flex-col'>
              <Image 
                src={product.img}
                width={300}
                height={400}
                alt={product.name}
              />
              <p>{product.name}</p>
              
            </div>
          ))
        }</Carousel>
      </SectionContainer>

    </main>
  );
}
