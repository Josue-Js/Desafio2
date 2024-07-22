import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { HeaderBoxRight, HeaderContainer, HeaderLogo } from "@/components/header/header";
import {
  HomeContainer,
  HomeHeroSection,
  HomeHeroSectionTitle,
  HomeHeroSectionImage,
  HomeHeroSectionDescription,
  HomeHeroSectionWrapper,
  HomeSection,
  HomeSectionTitle,
  HomeSectionDescription,
  HomeSectionWrapper,
  HomeSectionCard,
  HomeSectionCardIcon
} from "@/layout/home/home";
import { Folder, Brain, Globe } from 'lucide-react';

import Banner from '../assets/img/banner.png'
import Library from '../assets/img/library.png'
import BannerMobile from '../assets/img/bannerMobile.png'
import { MainHeader } from "@/layout/Header/mainHeader";

const CARDS = [
  {
    title: 'Organização Simplificada',
    description: 'Mantenha suas notas organizadas de forma intuitiva. Nossa interface amigável torna a organização das suas ideias um processo simples e eficiente.',
    icon: Folder,
  },
  {
    title: 'Captura Rápida de Ideias',
    description: 'Nunca perca uma inspiração! Nossa ferramenta de notas permite que você registre suas ideias instantaneamente, onde quer que esteja. Seja no trabalho, na escola ou em movimento, suas notas estarão sempre ao seu alcance.',
    icon: Brain,
  },
  {
    title: 'Acesso em Qualquer Lugar',
    description: 'Suas notas, sempre seguras e acessíveis, você pode acessar suas anotações a qualquer momento e de qualquer dispositivo. A privacidade e a segurança dos seus dados são nossa prioridade.',
    icon: Globe,
  }
]

export default function Home() {
  return (
    <HomeContainer>
      <MainHeader />

      <HomeHeroSection className="md:h-[calc(100vh-72px)]">
        <HomeHeroSectionWrapper className="max-w-[1030px] md:w-[60%] pt-10 sm:pt-[90px] md:pt-[120px] lg:pt-[216px] max-h-max">
          <HomeHeroSectionTitle
            className="text-2xl sm:text-4xl md:text-[52px] md:leading-[3.5rem] max-w-[772px] h-full"
          >
            Organize suas ideias de maneira simples e eficiente
          </HomeHeroSectionTitle>
          <HomeHeroSectionDescription className="mt-6 mb-12 md:mt-12 text-sm sm:text-lg max-w-[1019px] w-[60%] md:w-[100%]">
            O Descubra uma maneira revolucionária de tomar notas e gerenciar suas ideias. Seja para trabalho, estudo ou projetos pessoais, mantenha tudo organizado e acessível de qualquer lugar.
          </HomeHeroSectionDescription>
          <Button className="text-xl font-medium shadow-[2px_2px_10px_rgba(0,0,0,0.3)]">
            <Link href="/signUp">
              Começe agora
            </Link>
          </Button>
        </HomeHeroSectionWrapper>
        <HomeHeroSectionImage className="top-[90px] md:top-0">
          <Image src={Banner} alt="" draggable={false} objectFit="" className="hidden md:block" />
          <Image src={BannerMobile} alt="" draggable={false} objectFit="" className="block md:hidden" />
        </HomeHeroSectionImage>
      </HomeHeroSection>

      <HomeSection className="mt-20 md:mt-0 flex-wrap lg:flex-nowrap gap-12 justify-between  items-center">
        <HomeSectionWrapper>
          <HomeSectionTitle className="text-2xl sm:text-3xl md:text-4xl max-w-[820px] mb-8">
            Notas Organizadas para Todas as Suas Necessidades
          </HomeSectionTitle>
          <HomeSectionDescription className="text-sm md:text-base max-w-[786px] min-w-[320px]">
            Descubra a excelência em organização com nossa plataforma de notas online. Projetada para oferecer a melhor experiência ao usuário, nossa ferramenta garante que suas anotações estejam sempre acessíveis e seguras. Com funcionalidades inovadoras e uma interface amigável, você pode capturar suas ideias rapidamente e mantê-las organizadas sem esforço. Experimente a praticidade e a qualidade de um serviço que realmente entende suas necessidades.
          </HomeSectionDescription>
        </HomeSectionWrapper>

        <Image src={Library} alt="library" width={577} height={345} className="rounded-3xl" />
      </HomeSection>

      <HomeSection className="mt-20  md:mt-[180px] flex-col flex-wrap md:flex-nowrap gap-12 ">
        <HomeSectionTitle className="text-2xl sm:text-3xl md:text-4xl max-w-[820px] mb-8">
          Fluxos de trabalho para qualquer projeto
        </HomeSectionTitle>

        <HomeSectionWrapper className="grid grid-cols-[repeat(auto-fit,minmax(350px,_1fr))] w-full">
          {CARDS.map(({ title, description, icon: Icon }) => (
            <HomeSectionCard className="flex flex-col max-w-[550px] w-[100%] gap-5" key={title}>
              <HomeSectionCardIcon>
                {<Icon size={24} />}
              </HomeSectionCardIcon>
              <HomeSectionTitle className="text-2xl">
                {title}
              </HomeSectionTitle>
              <HomeSectionDescription>
                {description}
              </HomeSectionDescription>
            </HomeSectionCard>
          ))}
        </HomeSectionWrapper>

      </HomeSection>
    </HomeContainer>
  )
}