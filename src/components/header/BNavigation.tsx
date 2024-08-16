import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import SubmenuItems from "@/components/header/SubmenuItems";
import {
  aboutItems,
  contactItems,
  institutionItems,
  projectItems,
} from "@/constant";

const BNavigation = () => {
  return (
    <NavigationMenu className="lg:flex block w-full">
      <NavigationMenuList className="lg:flex w-full block">
        <NavigationMenuItem>
          <a href="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <SubmenuItems items={aboutItems} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Institutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <SubmenuItems items={institutionItems} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <SubmenuItems items={projectItems} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <SubmenuItems items={contactItems} />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default BNavigation;
