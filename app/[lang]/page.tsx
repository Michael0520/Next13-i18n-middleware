import Link from "next/link"
import { dictionary } from "@/content"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

function HomePage({ params }: { params: { lang: string } }) {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {dictionary[params.lang].homeHeader}
        </h1>
      </div>
      <div className="flex gap-4">
        <p>{dictionary[params.lang].homeContent}</p>
      </div>
    </section>
  )
}
