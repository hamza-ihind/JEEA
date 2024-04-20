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

interface ComponentItem {
  title: string;
  href: string;
  description: string;
}

const courses: ComponentItem[] = [
  {
    title: "Première Année",
    href: "/courses/#cp1",
    description: "La page contenant tous les exercices de tout les modules",
  },
  {
    title: "Deuxième année",
    href: "/courses/#cp2",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

const microLearning: ComponentItem[] = [
  {
    title: "Cheat Sheets",
    href: "/Microlearning/Cheats",
    description: "La page contenant tous les exercices de tout les modules",
  },
  {
    title: "Mind Maps",
    href: "/Microlearning/Mindmaps",
    description: "La page contenant tous les exercices de tout les modules",
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
    <div className="z-20 flex backdrop-blur-[25px] fixed w-full h-16 justify-between px-32 items-center shrink-0 border-b border-solid border-zinc-800">
      <NavigationMenu>
        <NavigationMenuList>
          <Image
            src="/FSF.svg"
            alt="logo"
            width={40}
            height={20}
            className="mr-8"
          />
          <NavigationMenuItem>
            <NavigationMenuTrigger className={`bg-transparent`}>
              Compil'Court
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
                        src="/logo-black.svg"
                        alt="logo"
                        width={82}
                        height={48}
                      />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        ALEPHNULL
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Apprendre sans limites. Evoluer sans frontières.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="C'est quoi ALEPHNULL">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Equipe">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Courses">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={`bg-transparent`}>
              Cycle préparatoire
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {courses.map((component) => (
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
          <NavigationMenuItem>
            <Link href="/Alephcom" passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} bg-transparent`}
              >
                Cycle d'ingénieur
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/Dashboard" passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} bg-transparent`}
              >
                Equipe
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu className="flex gap-4">
        <Link href="/sign-up" passHref>
          <Button variant={"default"}>Contactez-nous</Button>
        </Link>
        <ModeToggle />
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
