"use client";

import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import CustomDropdown from "@/components/CustomDropdown";
import NavLink from "./NavLink";
import useUserRole from "@/hooks/useUserRole";

const Navbar = () => {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();
  const userImg = user?.picture || "/default-user.jpg";

  const userRole = useUserRole();
  console.log(userRole);

  return (
    <nav className="flex justify-between items-center py-4 bg-white px-6 md:px-8 lg:px-12 xl:px-24 shadow-sm border-b border-slate-100">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={120}
          height={60}
          className="h-10 w-auto object-contain"
        />
      </Link>

      <div className="flex items-center gap-8">
        {/* Nav Links - Only visible when user is logged in */}
        {user && (
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-700">
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/dashboard/bookings/new">Book Container</NavLink>
            <NavLink href="/dashboard/containers">My Containers</NavLink>
            <NavLink href="/dashboard/shipments">Shipments</NavLink>
            <NavLink href="/dashboard/track">Track Container</NavLink>

            {userRole === "admin" && (
              <NavLink href="/admin/create">Create Container</NavLink>
            )}
          </div>
        )}

        {/* Auth + Profile */}
        <div className="flex gap-4 items-center">
          {user ? (
            <CustomDropdown
              trigger={
                <div className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-8 h-8 relative rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-cyan-500 transition-all">
                    <Image
                      src={userImg}
                      alt="User profile"
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="hidden md:inline text-sm font-medium text-slate-700">
                    {user.given_name}
                  </span>
                </div>
              }
            >
              <div className="py-2 px-4 flex flex-col gap-2 min-w-[300px] line-clamp-1">
                <div className="mb-2 w-full">
                  <h3 className="text-sm text-slate-500">Hi,</h3>
                  <p className="font-medium text-slate-800 ">
                    {user.given_name}
                  </p>
                </div>
                <LogoutLink className="text-gray-600 ">Sign Out</LogoutLink>
              </div>
            </CustomDropdown>
          ) : (
            <>
              <LoginLink
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                Sign In
              </LoginLink>
              <RegisterLink className={buttonVariants({ size: "sm" })}>
                Register
              </RegisterLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
