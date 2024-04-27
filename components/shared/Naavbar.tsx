"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { MenuIcon, MountainIcon } from "lucide-react";

interface ComponentItem {
  title: string;
  href: string;
  description: string;
}

const poles: ComponentItem[] = [
  {
    title: "Informatique",
    href: "/poles/info",
    description: "La page contenant tous les exercices de tout les modules",
  },
  {
    title: "Design & Montage",
    href: "/poles/design",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Rédaction, Traduction, Correction",
    href: "/poles/rtc",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

const ListItem: React.FC<ListItemProps> = ({ title, children, ...props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
}

const Navbar: React.FC = () => {
  return (
    <header className="flex h-16 w-full shrink-0 items-center px-64 max-lg:px-16 max-sm:px-4 z-50 backdrop-blur-[25px] fixed justify-between border-b border-solid border-zinc-800">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden p-1" size="icon" variant="outline">
            <MenuIcon className="h-8 w-8 text-white" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="flex items-center gap-2 text-white" href="/">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={40}
              height={20}
              className="mr-8"
            />
          </Link>
          <div className="grid gap-2 py-6">
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold text-white [&[data-state=open]>svg]:rotate-90">
                CompilCourt
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="-mx-6 grid gap-6 bg-gray-100 p-6 dark:bg-gray-800">
                  <Link
                    className="group grid h-auto w-full justify-start gap-1 text-white"
                    href="/#ABOUT"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Qui sommes-nous ?
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                      Plongez dans notre identité et découvrez qui nous sommes.
                    </div>
                  </Link>
                  <Link
                    className="group grid h-auto w-full justify-start gap-1 text-white"
                    href="/#EQUIPE"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Equipe
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                      Rencontrez notre équipe et découvrez ceux qui la
                      composent.
                    </div>
                  </Link>
                  <Link
                    className="group grid h-auto w-full justify-start gap-1 text-white"
                    href="/courses-cp"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Nos Cours
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                      Parcourez nos cours pour découvrir notre offre éducative.
                    </div>
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold text-white [&[data-state=open]>svg]:rotate-90">
                Cycle Préparatoire
                {/* <ChevronRightIcon className="ml-auto h-5 w-5 transition-all text-white" /> */}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="-mx-6 grid gap-6 bg-gray-100 p-6 dark:bg-gray-800">
                  <Link
                    className="group grid h-auto w-full justify-start gap-1 text-white"
                    href="/courses-cp/#cp1"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Première annèe
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                      Read our latest blog posts.
                    </div>
                  </Link>
                  <Link
                    className="group grid h-auto w-full justify-start gap-1 text-white"
                    href="/courses-cp/#cp2"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Deuxième annèe
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                      Read our customer case studies.
                    </div>
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold text-white [&[data-state=open]>svg]:rotate-90">
                Cycle Ingénieur
                {/* <ChevronRightIcon className="ml-auto h-5 w-5 transition-all text-white" /> */}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="-mx-6 grid gap-6 bg-gray-100 p-6 dark:bg-gray-800">
                  <Link
                    className="group grid h-auto w-full justify-start gap-1 text-white"
                    href="/courses-ci/#ci1"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Première annèe
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                      Read our latest blog posts.
                    </div>
                  </Link>
                  <Link
                    className="group grid h-auto w-full justify-start gap-1 text-white"
                    href="/courses-ci/#ci2"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Deuxième annèe
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                      Read our customer case studies.
                    </div>
                  </Link>
                  <Link
                    className="group grid h-auto w-full justify-start gap-1 text-white"
                    href="/courses-ci/#ci3"
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Troisième annèe
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                      Read our customer case studies.
                    </div>
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </SheetContent>
      </Sheet>

      <div className="w-[150px] max-lg:hidden">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={80}
            height={20}
            className="mr-8"
          />
        </Link>
      </div>

      <div className="flex w-full justify-center">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={`bg-transparent`}>
                JEEA
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Image
                          src="/assets/logo.png"
                          alt="logo"
                          width={100}
                          height={100}
                        />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Junior Entreprise ENSA Agadir
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          For Every Problem, We Engineer a Solution
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/#ABOUT" title="Qui sommes-nous ?">
                    Plongez dans notre identité et découvrez qui nous sommes.{" "}
                  </ListItem>
                  <ListItem href="/#EQUIPE" title="Equipe">
                    Rencontrez notre équipe et découvrez ceux qui la composent.
                  </ListItem>
                  <ListItem href="/courses-cp" title="Nos Cours">
                    Parcourez nos cours pour découvrir notre offre éducative.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={`bg-transparent`}>
                Nos Pôles
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {poles.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <NavigationMenu className="flex gap-4 max-lg:hidden">
        <Link href="/#CONTACT" passHref>
          <Button variant={"default"}>Contactez-nous</Button>
        </Link>
        <ModeToggle />
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
