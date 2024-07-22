import { HeaderBoxRight, HeaderContainer, HeaderLogo } from "@/components/header/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import Logo from '@/assets/logo/Logo.svg'

export function MainHeader() {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <Link href="/">
          <Image src={Logo} className="flex-shrink-0" alt="logo" draggable={false} width={135} />
        </Link>
      </HeaderLogo>
      <HeaderBoxRight>
        <Link href="signUp">
          <Button variant="outline">
            cadastrar se
          </Button>
        </Link>
        <Link href="signIn">
          <Button>
            Entrar
          </Button>
        </Link>
      </HeaderBoxRight>
    </HeaderContainer>
  );
}