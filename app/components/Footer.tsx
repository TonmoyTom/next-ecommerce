import Image from "next/image";
import Link from "next/link";
export const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center md:justify-between gap-8 md:gap-0 md:flex-row md:items-start bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="TrendLama"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className=" text-white hidden md:block font-medium text-md tracking-wider">
            TRENDLAMA
          </p>
        </Link>
        <p className="text-sm text-gray-400">@ 2025 TRENDLAMA</p>
        <p className="text-sm text-gray-400">All right reserved</p>
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start text-gray-400 text-sm">
        <p className="text-amber-50 text-sm">Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start text-gray-400 text-sm">
        <p className="text-amber-50 text-sm">Links</p>
        <Link href="/">All Product</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Best Seller</Link>
        <Link href="/">Sale</Link>
      </div>
      <div className="flex flex-col gap-4 items-center md:items-start text-gray-400 text-sm">
        <p className="text-amber-50 text-sm">Links</p>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Program</Link>
      </div>
    </div>
  );
};
