"use client"

import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Component() {
  const skills = [
    { name: "React", logo: "/placeholder.svg?text=React" },
    { name: "Node.js", logo: "/placeholder.svg?text=Node.js" },
    { name: "Git", logo: "/placeholder.svg?text=Git" },
    { name: "Docker", logo: "/placeholder.svg?text=Docker" },
    { name: "AWS", logo: "/placeholder.svg?text=AWS" },
    { name: "MongoDB", logo: "/placeholder.svg?text=MongoDB" },
    { name: "PostgreSQL", logo: "/placeholder.svg?text=PostgreSQL" },
    { name: "Express.js", logo: "/placeholder.svg?text=Express.js" },
    { name: "Django", logo: "/placeholder.svg?text=Django" },
    { name: "TypeScript", logo: "/placeholder.svg?text=TypeScript" },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Sticky Header/Navigation */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="flex justify-center items-center h-16 gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              home
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              projects
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              blog
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="px-6 py-12 max-w-4xl mx-auto">
          <div className="flex justify-between items-start">
            <div>
<<<<<<< HEAD
              <h1 className="text-4xl font-bold mb-4">hi, i&apos;m developer name 👋</h1>
=======
              <h1 className="text-4xl font-bold mb-4">hi, i'm developer name </h1>
>>>>>>> e1f6b9f57cfd73b13b5e0b327c3f6265196ef63d
              <p className="text-lg text-gray-400 mb-6">
                Full-stack developer passionate about building great software
              </p>
              <div className="flex items-center gap-2 text-gray-400 mb-6">
                <MapPin className="w-4 h-4" />
                <span>Your Location</span>
              </div>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-primary transition-colors">
                  <Github className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  <Mail className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  <FileText className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <Button variant="outline" className="border-primary">
              Resume
            </Button>
          </div>
        </section>

        {/* Experience & Education Tabs */}
        <section className="px-6 py-12 max-w-4xl mx-auto">
          <Tabs defaultValue="work" className="w-full">
            <TabsList className="w-full bg-gray-900 border-gray-800">
              <TabsTrigger value="work" className="w-full">Work</TabsTrigger>
              <TabsTrigger value="education" className="w-full">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="work" className="mt-8 space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                  <Image
                    src="/placeholder.svg"
                    alt="DBS Bank logo"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">DBS Bank</h3>
                  <p className="text-gray-400">Graduate Associate (SEED Programme)</p>
                  <p className="text-sm text-gray-500">Jul 2023 - Present</p>
                  <ul className="mt-2 text-gray-400 list-disc list-inside">
                    <li>Developed the Java backend for a bank account servicing process with multiple channel integrations using Activiti workflow</li>
                    <li>Built a custom database migration tool using Python and MariaDB and facilitated the migration of 1000+ processes from a vendor platform</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                  <Image
                    src="/placeholder.svg"
                    alt="SIT logo"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Singapore Institute of Technology</h3>
                  <p className="text-gray-400">Software Developer (Contract)</p>
                  <p className="text-sm text-gray-500">Apr 2023 - Jun 2023</p>
                  <ul className="mt-2 text-gray-400 list-disc list-inside">
                    <li>Built NFTVue, a NFT gallery website that allows students to connect their crypto wallets to view and verify their school event-issued NFTs</li>
                    <li>Worked on DemoConstruct, a full-stack web application (React + Python) that uses Meshroom to reconstruct 3D models from captured images</li>
                  </ul>
                  <div className="mt-2">
                    <Badge variant="secondary" className="mr-2">
                      NFTVue
                    </Badge>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="education" className="mt-8 space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                  <Image
                    src="/placeholder.svg"
                    alt="Digipen logo"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Digipen Institute of Technology Singapore</h3>
                  <p className="text-gray-400">BS in Computer Science in Real-Time Interactive Simulation</p>
                  <p className="text-sm text-gray-500">Sep 2019 - Apr 2023</p>
                  <ul className="mt-2 text-gray-400 list-disc list-inside">
                    <li>Graduated with a Minor in Mathematics</li>
                    <li>President of Digipen Student Management Committee for freshman year</li>
                    <li>3-time recipient of the Dean's Honor List</li>
                  </ul>
                  <div className="mt-2">
                    <Badge variant="secondary" className="mr-2">
                      Final Year Project
                    </Badge>
                    <Badge variant="secondary">2nd Year Project</Badge>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Skills Section */}
        <section className="px-6 py-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center bg-gray-900 rounded-lg p-3">
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  width={24}
                  height={24}
                  className="mr-3"
                />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="px-6 py-12 max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <Link href="#" className="text-primary hover:underline">
              view more →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((item) => (
              <Card key={item} className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <Image
                    src="/placeholder.svg"
                    alt="Project preview"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover w-full"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-2">Project Name</CardTitle>
                  <p className="text-gray-400">
                    A brief description of the project and what technologies were used to build it.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-12">
        <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Developer Name</h2>
            <p className="text-gray-400">Full-stack Developer</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="text-center py-4 text-sm text-gray-500 border-t border-gray-800">
          © {new Date().getFullYear()} Developer Name. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
